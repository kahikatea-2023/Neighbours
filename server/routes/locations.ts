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
} from '../db/classified'
import {
  ClassifiedPostRqData,
  ClassifiedRqCommentDataBackend,
  ClassifiedRqDataUpdateBackend,
  PostAnswers,
  PostRequest,
} from '../../models/classified'
import { validateAccessToken } from './auth0'
const router = Router()

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

//add new request
router.post('/:id/classified', validateAccessToken, async (req, res) => {
  try {
    const newRequest = req.body as PostRequest
    const auth0_id = req.auth?.payload.sub
    if (!auth0_id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }
    const newPost = { ...newRequest, user_auth0_id: auth0_id }
    await addRequest(newPost)
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
    try {
      const updatedRequest = req.body as PostRequest
      const id = Number(req.params.request)
      const auth0Id = req.auth?.payload.sub
      if (!auth0Id) {
        console.error('No auth0Id')
        return res.status(401).send('Unauthorized')
      }
      await getClassificationById(id)
      const updatedPost = { ...updatedRequest, user_auth0_id: auth0Id }
      await updateRequest(updatedPost, id)
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
router.post(
  '/:id/classified/:request/answers',
  validateAccessToken,
  async (req, res) => {
    try {
      const newAnswer = req.body as PostAnswers
      const auth0Id = req.auth?.payload.sub
      if (!auth0Id) {
        console.error('No auth0Id')
        return res.status(401).send('Unauthorized')
      }
      const newComment = { ...newAnswer, user_auth0_id: auth0Id }
      await addAnswer(newComment)

      res.sendStatus(201)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong')
    }
  }
)

//update answer
router.patch(
  '/:id/classified/:request/answers/:answer',
  validateAccessToken,
  async (req, res) => {
    try {
      const updatedAnswer = req.body as ClassifiedRqCommentDataBackend
      const id = Number(req.params.answer)
      const auth0Id = req.auth?.payload.sub
      if (!auth0Id) {
        console.error('No auth0Id')
        return res.status(401).send('Unauthorized')
      }
      await getAllAnswersByRequest(id)
      await updateAnswer(updatedAnswer, Number(req.params.answer))
      res.sendStatus(204)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong')
    }
  }
)

// delete answer
router.delete(
  '/:id/classified/:request/answers/:answer',
  validateAccessToken,
  async (req, res) => {
    try {
      const requestId = Number(req.params.request)
      const answerId = Number(req.params.answer)
      const auth0Id = req.auth?.payload.sub

      if (!auth0Id) {
        console.error('No auth0Id')
        return res.status(401).send('Unauthorized')
      }

      await getAllAnswersByRequest(requestId)
      await deleteAnswerById(answerId, auth0Id)

      res.sendStatus(200)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong')
    }
  }
)

export default router
