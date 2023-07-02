import { CommentSectionProps, CommentData } from '../../../models/comments'

function Comment(props: CommentSectionProps): JSX.Element {
  const {
    currentUser,
    commentData,
    onDeleteComment,
    onAddComment,
    onReactToComment,
  } = props

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
          {commentData.map((comment: CommentData) => (
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
