import { Router } from 'express'
import {
  AddAnswer,
  AnswersToBackend,
  addAnswerSchema,
} from '../../models/comments'
import * as db from '../db/classified'
import { validateAccessToken } from './auth0'
import { addAnswer } from '../db/classified'

const router = Router()

router.post('/', validateAccessToken, async (req, res) => {
  console.log('post route hit')
  console.log(req.body)
  const newAnswer = req.body
  const auth0Id = req.auth?.payload.sub
  const newComment = {
    comment: newAnswer.comment,
    classified_request_id: newAnswer.classified_request_id,
  }

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    const userResult = addAnswerSchema.safeParse(req.body)

    if (!userResult.success) {
      console.log(JSON.stringify(userResult.error))
      res.status(400).json({ message: 'Please provide a valid form' })
      return
    }
    await addAnswer({ ...newComment, user_auth0_id: auth0Id })
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.delete('/:id', validateAccessToken, async (req, res) => {
  try {
    const userAuth0Id = req.auth?.payload.sub
    if (!userAuth0Id) {
      res.status(400).json({ message: 'unable to find user' })
      return
    }
    const commentId = req.params.id
    await db.deleteAnswerById(Number(commentId), userAuth0Id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'could not delete comment' })
  }
})

export default router
