import { useParams } from 'react-router-dom'
import { ClassifiedRqDataBackend } from '../../../models/classified'
import Post from '../UI/Post/Post'

interface Props {
  data: ClassifiedRqDataBackend[]
}

function MyPost(props: Props) {
  const myPosts = props.data
  const { locationId } = useParams()

  function handleDelete(id: number) {

  }

  return (
    <>
      {myPosts.map((post) => {
        // const postCommentArray = classifiedComment.filter(
        //   (comment) => comment.classified_request_id === post.id
        // )
        // const numberOfComment = postCommentArray.length
        return (
          <>
            <button key={post.id} onClick={() => handleDelete(post.id)}>Delete</button>
            <Post
              key={post.user_auth0_id}
              title={post.title}
              path={`/${locationId}/classifieds/${post.user_auth0_id}`}
              className="text-black"
              imgSource={post.image}
              date={post.date}
            />
          </>
        )
      })}
    </>
  )
}

export default MyPost
