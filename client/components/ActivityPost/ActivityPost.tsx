import { useParams } from 'react-router-dom'
import Post from '../UI/Post/Post'

function ActivityPost() {
  const { locationId } = useParams()

  const actPosts = [
    {
      img: '../../public/images/cockroach.png',
      title: 'Catch a cockroach PLZ!!!!!',
      description: 'Please anyone can come ASAP!',
      time: '6pm',
      date: '06/July',
      location: 'Dev Academy',
      price: 'free',
    },
    {
      img: '../../public/images/cockroach.png',
      title: 'Catch a cockroach PLZ!!!!!',
      description: 'Please anyone can come ASAP!',
      time: '6pm',
      date: '06/July',
      location: 'Dev Academy',
      price: 'free',
    },
  ]

  return (
    <>
      {actPosts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          className="text-black"
          imgSource={post.img}
          date={post.date}
          path={`/${locationId}/classifieds/`}
        />
      ))}
    </>
  )
}

export default ActivityPost
