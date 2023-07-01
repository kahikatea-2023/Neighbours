import { Router } from 'express'
import { UsersData, usersDataSchema } from '../../models/user'
import { getUserById, upsertProfile } from '../db/profile'
import { validateAccessToken } from './auth0'
const router = Router()

//get profile by auth0_id
router.get('/:auth0_id', validateAccessToken, async (req, res) => {
  try {
    const auth0_id = req.params.auth0_id as string

    const auth0Id = req.auth?.payload.sub
    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }
    const profile = await getUserById(auth0_id)

    res.json({ profile })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// add a new user
router.post('/:auth0_id', validateAccessToken, async (req, res) => {
  const form = req.body
  const auth0_id = req.params.auth0_id

  if (!auth0_id) {
    res.status(400).json({ message: 'Please provide an auth0_id' })
    return
  }

  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }

  try {
    const userResult = usersDataSchema.safeParse(form)

    if (!userResult.success) {
      res.status(400).json({ message: 'Please provide a valid form' })
      return
    }

    const newUser = { ...userResult.data, auth0_id: auth0_id }

    await upsertProfile(newUser)
    res.sendStatus(201)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})
export default router
