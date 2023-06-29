import { Router } from 'express'

import * as db from '../db/locations'

const router = Router()

//get, post, update, delete

router.get('/', async (req, res) => {
  try {
    const locations = await db.getAllLocations()

    res.json({ locations })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const location = await db.getLocationById(id)

    res.json({ location })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
