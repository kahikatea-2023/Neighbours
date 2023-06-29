import { Router } from 'express'

import { getAllLocations, getLocationById } from '../db/locations'
import {
  getAllAnswers,
  getAllClassificationsByLocation,
  getClassificationById,
  addRequest,
} from '../db/classified'
import { ClassifiedRqData } from '../../models/classified'
import {validateAccessToken}  from './auth0'
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
    const locationId = Number(req.params.id)
    const classifications = await getAllClassificationsByLocation(locationId)
    res.json({ classifications })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/:id/classified', validateAccessToken, async (req , res) => {
  try {
    const { ClassifiedRqData } = req.body
    const auth0Id = req.auth?.payload.sub
    const locationId = Number(req.params.id)

    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }

    const newRequest: ClassifiedRqData = {
      user_auth0_id: auth0Id,
      location_id: ClassifiedRqData.location_id,
      title: ClassifiedRqData.title,
      type: ClassifiedRqData.type,
      image: ClassifiedRqData.image,
      date: ClassifiedRqData.date,
      time: ClassifiedRqData.time,
      venue: ClassifiedRqData.venue,
      description: ClassifiedRqData.description,
    }

    await addRequest(newRequest)
    const request = await getAllClassificationsByLocation(locationId)
    res.json({ request })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
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
    const id = Number(req.params.request)
    const answers = await getAllAnswers(id)

    res.json({ answers })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
