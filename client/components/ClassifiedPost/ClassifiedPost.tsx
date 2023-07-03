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
    <div className='mx-2'>
      <div className="flex justify-between mb-4">
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
              className="text-black"
              imgSource={post.image}
              date={post.date}
            />
          )
        })}
      </div>
      <div className='border-pink border-2 rounded-full flex items-center h-8'>
        <img src="/public/images/search-icon.png" alt="search-icon" className='w-10 pl-4'/>
        <form onSubmit={handleSearch} className='pl-4'>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

      </div>
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
    </div>
    </>
  )
}

export default ClassifiedPost
