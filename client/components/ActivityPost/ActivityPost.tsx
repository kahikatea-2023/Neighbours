import { useParams } from 'react-router-dom'
import Post from '../UI/Post/Post'
import TopPost from '../UI/Post/TopPost'
import { useState } from 'react'

export default function ActivityPost() {
  const { locationId } = useParams()

  const fakeData = [
    {
      id: 1,
      user_auth0_id: 'auth0_1',
      title: 'Yoga Workshop',
      type: 'Workshop',
      image: '/public/images/yoga.png',
      date: '2023-07-15',
      time: '15:00:00',
      venue: 'Community Center',
      attendees: '5/10',
      description:
        'Join us for a rejuvenating yoga workshop aimed at all skill levels. Relax, stretch, and find your inner peace.',
    },
    {
      id: 2,
      user_auth0_id: 'auth0_2',
      location_id: 4,
      title: 'Painting Class',
      type: 'Class',
      image: '/public/images/yoga.png',
      date: '2023-08-05',
      time: '18:30:00',
      venue: 'Art Studio',
      attendees: '8/12',
      description:
        'Discover your creativity through our painting class. Learn various techniques and express yourself on canvas.',
    },
    {
      id: 3,
      user_auth0_id: 'auth0_3',
      location_id: 4,
      title: 'Book Club Meeting',
      type: 'Club',
      image: '/public/images/yoga.png',
      date: '2023-09-10',
      time: '19:00:00',
      venue: 'Local Library',
      attendees: '6/8',
      description:
        'Join our book club and dive into captivating stories. Engage in thoughtful discussions with fellow book lovers.',
    },
    {
      id: 4,
      user_auth0_id: 'auth0_1',
      location_id: 4,
      title: 'Music Jam Session',
      type: 'Jam Session',
      image: '/public/images/yoga.png',
      date: '2023-10-20',
      time: '20:00:00',
      venue: 'Community Hall',
      attendees: '4/6',
      description:
        "Calling all musicians! Bring your instruments and let's create beautiful melodies together in this casual jam session.",
    },
    {
      id: 5,
      user_auth0_id: 'auth0_2',
      location_id: 4,
      title: 'Fitness Bootcamp',
      type: 'Bootcamp',
      image: '/public/images/yoga.png',
      date: '2023-11-12',
      time: '07:00:00',
      venue: 'Park',
      attendees: '10/15',
      description:
        'Get ready to sweat and challenge yourself with our high-intensity fitness bootcamp. Improve your strength and endurance.',
    },
    {
      id: 6,
      user_auth0_id: 'auth0_3',
      location_id: 4,
      title: 'Cooking Workshop',
      type: 'Workshop',
      image: '/public/images/yoga.png',
      date: '2023-12-08',
      time: '17:30:00',
      venue: 'Culinary School',
      attendees: '6/10',
      description:
        'Join us for a hands-on cooking workshop and learn to prepare delicious dishes. Explore different cuisines and techniques.',
    },
  ]

  const firstTwoPosts = fakeData.slice(0,2)
  const remainingPosts = fakeData.slice(2)

  //Search bar section
  const [searchTerm, setSearchTerm] = useState('')
  function handleSearch(e: any) {
    e.preventDefault()
  }


  return (
    <>
      <div className='mx-2'>
        <div className="flex justify-between mb-4 w-full">
          {firstTwoPosts.map((post) => {
            return (
              <TopPost
                key={post.id}
                title={post.title}
                path={`/${locationId}/classifieds/${post.id}`}
                className="text-black w-42"
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
        {remainingPosts.map((post) => {
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
