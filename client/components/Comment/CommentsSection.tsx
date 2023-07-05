import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, useQueryClient } from 'react-query'
import { deleteComment, fetchComments, postComment } from '../../apis/comments'
import { AddAnswer } from '../../../models/comments'
import { useState } from 'react'
interface Props {
  postId: string
  locationId: string
}

function CommentsSection({ postId, locationId }: Props) {
  const { getAccessTokenSilently } = useAuth0()

  const client = useQueryClient()
  const { data } = useQuery(['comments', postId], async () => {
    const token = await getAccessTokenSilently()

    return await fetchComments(Number(locationId), Number(postId), token)
  })

  async function handleDelete(commentId: number) {
    const token = await getAccessTokenSilently()
    await deleteComment(commentId, token)
    client.invalidateQueries(['comments'])
  }

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const comment = formData.get('comment') as string

    const token = await getAccessTokenSilently()
    await postComment(comment, Number(postId), token)
    client.invalidateQueries(['comments'])
  }

  return (
    <div>
      {/* Render the comment section */}
      <h3>Comments</h3>
      {data &&
        data.map((comment) => (
          <div key={comment.id}>
            <p>
              <strong>{comment.user_name}</strong>: {comment.comment}
            </p>
            <button onClick={() => handleDelete(comment.id)}>Delete</button>
          </div>
        ))}
      <form onSubmit={handleAdd}>
        <input type="text" name="comment" placeholder="Add a comment" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  )
}

export default CommentsSection
