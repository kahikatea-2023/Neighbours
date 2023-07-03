  // export interface CommentSectionProps {
  //   UpdateUsersDataBackend: {
  //     currentUserId: string
  //     currentUserImg: string
  //     currentUserProfile: string
  //     currentUserFullName: string
  //   }
  //   commentData: CommentData[]
  //   onDeleteComment: (commentId: string) => void
  //   onAddComment: (text: string) => void
  //   onReactToComment: (commentId: string, reaction: string) => void
  // }

// export interface CommentData {
//   userId: string
//   comId: string
//   fullName: string
//   userProfile: string
//   text: string
//   avatarUrl: string
//   replies: never[]
// }

import { PostAnswersBackend } from './classified'
import { UsersDataBackend } from './user'

export interface CommentSectionProps {
  UsersDataBackend: UsersDataBackend
  postAnswersBackend: PostAnswersBackend[]
  // onDeleteComment: (id) => void
  // onAddComment: (text: string) => void
  // onReactToComment: (commentId: string, reaction: string) => void
}
