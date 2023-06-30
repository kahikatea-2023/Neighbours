import { Router } from 'express'
import { getUserById } from '../db/profile'
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

export default router
