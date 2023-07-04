import { useParams } from 'react-router-dom'
import Post from '../UI/Post/Post'
import TopPost from '../UI/Post/TopPost'
import { useState } from 'react'

export default function Market() {
  const { locationId } = useParams()

  const fakeData = [
    {
      id: 1,
      market_advertisement_id: 1,
      title: `Ahmad's Banana`,
      price: '100',
      image: '/public/images/banana.png',
      user_auth0_id: 'auth0_3',
      time: '2023-07-16 09:30:00',
      description: 'Premium Banana only for $100 per 100g!',
      comment: "Your organic vegetables look amazing! Can't wait to try them!",
    },
    {
      id: 2,
      market_advertisement_id: 1,
      title: `Finger`,
      price: '4',
      image: '/public/images/banana.png',
      user_auth0_id: 'auth0_1',
      time: '2023-07-16 10:15:00',
      description: 'Premium Banana only for $100 per 100g!',
      comment: 'What other produce do you have available?',
    },
    {
      id: 3,
      market_advertisement_id: 2,
      title: `Rolex`,
      price: '17,000',
      image: '/public/images/banana.png',
      user_auth0_id: 'auth0_3',
      time: '2023-08-05 19:45:00',
      description: 'Premium Banana only for $100 per 100g!',
      comment:
        'Your jewelry pieces are stunning! Do you have any discounts for multiple purchases?',
    },
    {
      id: 4,
      market_advertisement_id: 3,
      title: `My husband`,
      price: '0',
      image: '/public/images/banana.png',
      user_auth0_id: 'auth0_2',
      time: '2023-09-10 20:30:00',
      description: 'Premium Banana only for $100 per 100g!',
      comment: "I'm a big fan of vinyl records! Are they in good condition?",
    },
  ]

  const firstTwoPosts = fakeData.slice(0, 2)
  const remainingPosts = fakeData.slice(2)

  //Search bar section
  const [searchTerm, setSearchTerm] = useState('')
  function handleSearch(e: any) {
    e.preventDefault()
  }

  return (
    <>
      <div className="mx-2">
        <div className="flex justify-between mb-4 w-full">
          {firstTwoPosts.map((post) => {
            return (
              <TopPost
                key={post.id}
                title={post.title}
                path={`/${locationId}/activities/${post.id}`}
                className="text-black w-42"
                imgSource={post.image}
                date={post.price}
              />
            )
          })}
        </div>
        <div className="border-pink border-2 rounded-full flex items-center h-8">
          <img
            src="/public/images/search-icon.png"
            alt="search-icon"
            className="w-10 pl-4"
          />
          <form onSubmit={handleSearch} className="pl-4">
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
              date={post.price}
            />
          )
        })}
      </div>
    </>
  )
}
