import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { AnswerDataBackend } from '../../../models/comments'
import { fetchClassifiedPost } from '../../apis/classifiedPost'
import { fetchComments } from '../../apis/comments'

interface Props {
  postId: string,
  locationId: string
}

function CommentsSection({postId, locationId} : Props) {
  const { getAccessTokenSilently } = useAuth0()

  const { isLoading, data } = useQuery(
    ['comments', postId],
    async () => {
      const token = await getAccessTokenSilently()

      return await fetchComments(Number(locationId), Number(postId), token)
    }
  )



  return (
     <div>
          {/* Render the comment section */}
          <h3>Comments</h3>
          {data && data.map((comment) => (
            <div key={comment.id}>
              <p>
                <strong>{comment.user_name}</strong>: {comment.comment}
              </p>
              <button onClick={() => {}}>
                Delete
              </button>
            </div>
          ))}
          <div>
            <input type="text" placeholder="Add a comment" />
            <button onClick={() => {}}>
              Add Comment
            </button>
          </div>
        </div>
  )
}

export default CommentsSection
