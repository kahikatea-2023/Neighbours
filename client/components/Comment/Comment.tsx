import { CommentSectionProps } from '../../../models/comments'
import 'react-comments-section/dist/index.css'
import { useAuth0 } from '@auth0/auth0-react'
import { CommentSection } from 'react-comments-section'

function Comment(): JSX.Element {
  const { user, loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect()
  }

  const handleDeleteComment = (commentId: string) => {
    // Delete comment logic here
    console.log('Deleting comment:', commentId)
  }

  const handleAddComment = (text: string) => {
    // Add comment logic here
    console.log('Adding comment:', text)
  }

  const handleReactToComment = (commentId: string, reaction: string) => {
    // React to comment logic here
    console.log('Reacting to comment:', commentId, 'with reaction:', reaction)
  }

  const data = [
    // Hardcore comment data
    {
      userId: '02b',
      comId: '017',
      fullName: 'Lily',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'I think you have a point🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
      replies: [],
    },
  ]

  const commentSectionProps: CommentSectionProps = {
    currentUser: {
      currentUserId: user?.sub || '',
      currentUserImg: user?.picture?.toString() || '',
      currentUserProfile: '',
      currentUserFullName: user?.name || '',
    },
    commentData: data,
    onDeleteComment: handleDeleteComment,
    onAddComment: handleAddComment,
    onReactToComment: handleReactToComment,
  }

  return (
    <div>
      {user ? (
        <CommentSection
          logIn={{
            loginLink: '',
            signupLink: '',
          }}
          {...commentSectionProps}
        />
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
