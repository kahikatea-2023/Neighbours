import { ClassifiedRqDataBackend } from '../../../models/classified'
import Post from '../UI/Post/Post'

interface Props {
  data: ClassifiedRqDataBackend[]
}
function ClassifiedPost(props: Props) {
  const classifiedPosts = props.data

  return (
    <>
      {classifiedPosts.map((post) => {
        // const postCommentArray = classifiedComment.filter(
        //   (comment) => comment.classified_request_id === post.id
        // )
        // const numberOfComment = postCommentArray.length
        return (
          <Post
            key={post.id}
            title={post.title}
            path={`/newmarket/classifieds/${post.user_auth0_id}`}
            className="text-black"
            imgSource={post.image}
            date={post.date}
          />
        )
      })}
    </>
  )
}

export default ClassifiedPost
