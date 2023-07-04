import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { AnswerDataBackend } from '../../../models/comments'
import { fetchClassifiedPost } from '../../apis/classifiedPost'
import { fetchComments } from '../../apis/comments'

function CommentsSection() {
  const { locationId } = useParams()
  const { request } = useParams()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  const [addComment, setAddComment] = useState('')

  const { isLoading, data } = useQuery(
    ['fetchLocations', locationId],
    async () => {
      const token = await getAccessTokenSilently()

      return await fetchComments(Number(locationId), Number(request), token)
    }
  )
}

function Comment(props: AnswerDataBackend): JSX.Element {
  // const {
  //   currentUser,
  //   commentData,
  //   onDeleteComment,
  //   onAddComment,
  //   onReactToComment,
  // } = props

  const { comment, classified_request_id, user_name, id } = props

  // const {
  //   currentUser,
  //   commentData,
  //   onDeleteComment,
  //   onAddComment,
  //   onReactToComment,
  // } = props

  const handleLogin = () => {
    // You can implement the login logic here
    console.log('Logging in...')
  }

  const handleDeleteComment = (commentId: string) => {
    // You can implement the delete comment logic here
    console.log('Deleting comment:', commentId)
    onDeleteComment(commentId)
  }

  const handleAddComment = (text: string) => {
    // You can implement the add comment logic here
    console.log('Adding comment:', text)
    onAddComment(text)
  }

  const handleReactToComment = (commentId: string, reaction: string) => {
    // You can implement the react to comment logic here
    console.log('Reacting to comment:', commentId, 'with reaction:', reaction)
    onReactToComment(commentId, reaction)
  }

  return (
    <div>
      {currentUser ? (
        <div>
          {/* Render the comment section */}
          <h3>Comments</h3>
          {props.map((comment: comment) => (
            <div key={comment.comId}>
              <p>
                <strong>{comment.fullName}</strong>: {comment.text}
              </p>
              <button onClick={() => handleDeleteComment(comment.comId)}>
                Delete
              </button>
            </div>
          ))}
          <div>
            <input type="text" placeholder="Add a comment" />
            <button onClick={() => handleAddComment('New comment')}>
              Add Comment
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Please log in to add or delete comments.</p>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  )
}

export default Comment
