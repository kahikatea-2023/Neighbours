import { CommentSectionProps } from '../../../models/comments'
import { PostAnswersBackend } from '../../../models/classified'

function Comment(props: CommentSectionProps): JSX.Element {
  const {
    UsersDataBackend,
    postAnswersBackend,
    // onDeleteComment,
    // onAddComment,
  } = props

  const handleLogin = () => {
    // You can implement the login logic here
    console.log('Logging in...')
  }

  // const handleDeleteComment = (id: number) => {
  //   // You can implement the delete comment logic here
  //   console.log('Deleting comment:', id)
  //   onDeleteComment(id)
  // }

  // const handleAddComment = (text: string) => {
  //   // You can implement the add comment logic here
  //   console.log('Adding comment:', text)
  //   onAddComment(text)
  // }

  // const handleReactToComment = (commentId: string, reaction: string) => {
  //   // You can implement the react to comment logic here
  //   console.log('Reacting to comment:', commentId, 'with reaction:', reaction)
  //   onReactToComment(commentId, reaction)

  return (
    <div>
      {UsersDataBackend ? (
        <div>
          {/* Render the comment section */}
          <h3>Comments</h3>
          {postAnswersBackend.map((postAnswer: PostAnswersBackend) => (
            <div key={postAnswer.id}>
              <p>
                <strong>{UsersDataBackend.name}</strong>
              </p>
              {/* <button onClick={() => handleDeleteComment(postAnswers.id)}>
                Delete
              </button> */}
            </div>
          ))}
          <div>
            {/* <input type="text" placeholder="Add a comment" /> */}
            {/* <button onClick={() => handleAddComment('New comment')}>
              Add Comment
            </button> */}
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
