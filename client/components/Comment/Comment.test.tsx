/**
 * @vitest-environment jsdom
 */
import { describe, expect, it, vi } from 'vitest'
import Comment from '../Comment/Comment'
import { renderComponent } from '../../test-utils'
import { CommentData } from '../../../models/comments'

describe('Comment component', () => {
  it('renders comments correctly', () => {
    const commentData = [
      {
        userId: '1',
        comId: '1',
        fullName: 'John Doe',
        userProfile: 'https://example.com/user.jpg',
        text: 'This is the first comment.',
        avatarUrl: 'https://example.com/avatar.jpg',
        replies: [],
      },
      {
        userId: '2',
        comId: '2',
        fullName: 'Jane Smith',
        userProfile: 'https://example.com/user.jpg',
        text: 'Here is another comment.',
        avatarUrl: 'https://example.com/avatar.jpg',
        replies: [],
      },
    ]

    const { findByText } = renderComponent(
      <Comment
        currentUser={{
          currentUserId: '',
          currentUserImg: '',
          currentUserProfile: '',
          currentUserFullName: '',
        }}
        commentData={commentData}
        onDeleteComment={vi.fn()}
        onAddComment={vi.fn()}
        onReactToComment={vi.fn()}
      />
    )

    expect(findByText('This is the first comment.')).toBeTruthy()
    expect(findByText('Here is another comment.')).toBeTruthy()
  })

  it('renders empty comment section correctly', () => {
    // Test 2: Rendering empty comment section
    const emptyCommentData: CommentData[] = []

    const { findByText } = renderComponent(
      <Comment
        currentUser={{
          currentUserId: '',
          currentUserImg: '',
          currentUserProfile: '',
          currentUserFullName: '',
        }}
        commentData={emptyCommentData}
        onDeleteComment={vi.fn()}
        onAddComment={vi.fn()}
        onReactToComment={vi.fn()}
      />
    )

    const emptyCommentMessage = 'No comments yet.'
    expect(findByText(emptyCommentMessage)).toBeTruthy()
  })
})
