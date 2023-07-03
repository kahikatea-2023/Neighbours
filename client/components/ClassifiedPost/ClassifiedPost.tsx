import { useParams } from 'react-router-dom'
import { ClassifiedRqDataBackend } from '../../../models/classified'
import Post from '../UI/Post/Post'
import { useState } from 'react'
import TopPost from '../UI/Post/TopPost'

interface Props {
  data: ClassifiedRqDataBackend[]
}
function ClassifiedPost(props: Props) {
  const classifiedPosts = props.data
  const firstTwoPosts = classifiedPosts.slice(0, 2)
  const remaingPost = classifiedPosts.slice(2)
  console.log(remaingPost)

  const { locationId } = useParams()
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(e: any) {
    e.preventDefault()
  }

  return (
    <>
      <div className="flex justify-evenly">
        {firstTwoPosts.map((post) => {
          // const postCommentArray = classifiedComment.filter(
          //   (comment) => comment.classified_request_id === post.id
          // )
          // const numberOfComment = postCommentArray.length
          return (
            <TopPost
              key={post.id}
              title={post.title}
              path={`/${locationId}/classifieds/${post.id}`}
              className="text-black mx-2"
              imgSource={post.image}
              date={post.date}
            />
          )
        })}
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {remaingPost.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            path={`/${locationId}/classifieds/${post.id}`}
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
