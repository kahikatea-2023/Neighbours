import { Router } from 'express'

import * as db from '../db/classified'
import { validateAccessToken } from './auth0'

const router = Router()

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
