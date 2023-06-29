import { Router } from 'express'

import { getAllLocations, getLocationById } from '../db/locations'
import {
  getAllAnswers,
  getAllClassifications,
  getClassificationById,
} from '../db/classified'
const router = Router()

//get, post, update, delete

// locations

router.get('/', async (req, res) => {
  try {
    const locations = await getAllLocations()

    res.json({ locations })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const location = await getLocationById(id)

    res.json({ location })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//classified

router.get('/:id/classified', async (req, res) => {
  try {
    const classifications = await getAllClassifications()
    res.json({ classifications })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id/classified/:request', async (req, res) => {
  try {
    const id = Number(req.params.request)
    const classification = await getClassificationById(id)
    res.json({ classification })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// classified_request_answers

router.get('/:id/classified/:request/answers', async (req, res) => {
  try {
    const requestId = Number(req.params.request)
    const answers = await getAllAnswers(requestId)

    res.json({ answers })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
