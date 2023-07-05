import { Router } from 'express'

import { getAllLocations, getLocationById } from '../db/locations'
import {
  getAllAnswersByRequest,
  getAllClassificationsByLocation,
  getClassificationById,
  addRequest,
  updateRequest,
  deleteRequestById,
  addAnswer,
  updateAnswer,
  deleteAnswerById,
  getClassificationByUserAuthId,
} from '../db/classified'
import {
  AddClaRequest,
  addClaRequestSchema,
  newRequestToBackend,
  updateClaRequestSchema,
} from '../../models/classified'
import { validateAccessToken } from './auth0'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const locations = await getAllLocations()
    res.json({ locations })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong to get locations' })
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
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//get classifications and all its answers

router.get('/:id/classified/:request', async (req, res) => {
  try {
    const id = Number(req.params.request)
    const classification = await getClassificationById(id)
    const answers = await getAllAnswersByRequest(id)
    res.json({ ...classification, answers })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// get classified post by auth0_id
router.get('/:auth0Id/classifiedposts', async (req, res) => {
  try {
    const auth0Id = req.params.auth0Id
    const userClassifications = await getClassificationByUserAuthId(auth0Id)
    res.json({ userClassifications })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Something went wrong with getClassificationByUserAuthId',
    })
  }
})

//add new request
router.post('/:id/classified', validateAccessToken, async (req, res) => {
  const location_id = Number(req.params.id)
  const auth0_id = req.auth?.payload.sub
  const Request = req.body
  // as AddClaRequest

  const newRequest = {
    user_auth0_id: auth0_id,
    location_id: location_id,
    title: Request.title,
    date: Request.date,
    venue: Request.venue,
    description: Request.description,
    image: Request.image,
  } as newRequestToBackend

  if (!auth0_id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }
  try {
    // Need to fixed the zod
    const userResult = addClaRequestSchema.safeParse(Request)

    if (!userResult.success) {
      res.status(400).json({ message: 'Please provide a valid form' })
      return
    }

    await addRequest(newRequest)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

//update request
router.patch(
  '/:id/classified/:request',
  validateAccessToken,
  async (req, res) => {
    const updatedRequest = req.body
    const id = Number(req.params.request)
    const location_id = Number(req.params.id)
    const auth0Id = req.auth?.payload.sub

    const updateResult = {
      user_auth0_id: auth0Id,
      location_id: location_id,
      title: updatedRequest.title,
      date: updatedRequest.date,
      venue: updatedRequest.venue,
      description: updatedRequest.description,
      image: updatedRequest.image,
    } as newRequestToBackend

    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }

    try {
      const userResult = updateClaRequestSchema.safeParse(updatedRequest)

      if (!userResult.success) {
        res.status(400).json({ message: 'Please provide a valid form' })
        return
      }

      await updateRequest(updateResult, id)
      res.sendStatus(204)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong')
    }
  }
)

//delete request
router.delete(
  '/:id/classified/:request',
  validateAccessToken,
  async (req, res) => {
    try {
      const id = Number(req.params.request)
      const auth0Id = req.auth?.payload.sub
      if (!auth0Id) {
        console.error('No auth0Id')
        return res.status(401).send('Unauthorized')
      }
      await getClassificationById(id)
      await deleteRequestById(id, auth0Id)
      // should delete the answer before delete the
      res.sendStatus(200)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong')
    }
  }
)

//answers

router.get('/:id/classified/:request/answers', async (req, res) => {
  try {
    const id = Number(req.params.request)
    const answers = await getAllAnswersByRequest(id)

    res.json({ answers })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//post answer

export default router
