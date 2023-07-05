import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, useQueryClient } from 'react-query'
import { deleteComment, fetchComments, postComment } from '../../apis/comments'

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

  //mutation for addComment

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const comment = formData.get('comment') as string

    const token = await getAccessTokenSilently()
    await postComment(comment, Number(postId), token)
    client.invalidateQueries(['comments'])
  }

  return (
    <div className="p-4">
      <h3 className="font-semi bold text-2xl mb-2">Comments</h3>
      {data &&
        data.map((comment) => (
          <div
            key={comment.id}
            className="flex justify-between px-4 border-2 rounded-3xl border-pink mb-4 bg-lightPink"
          >
            <div className=" w-">
              <p className="py-1">
                <strong>{comment.user_name}</strong>
              </p>
              <p className="pb-2">{comment.comment}</p>
            </div>
            <div className="px-4 flex justify-between">
              <button onClick={() => handleDelete(comment.id)}>
                <img src="/images/delete.png" alt="delete" className="w-10" />
              </button>
            </div>
          </div>
        ))}
      <form
        onSubmit={handleAdd}
        className="border-1 drop-shadow-lg rounded-full bg-white flex justify-between w-full px-4"
      >
        <input
          type="text"
          name="comment"
          placeholder="Write a comment ..."
          className="pl-4"
        />
        <button type="submit">
          <img src="/images/send.png" alt="send" className="w-5" />
        </button>
      </form>
    </div>
  )
}

export default CommentsSection
