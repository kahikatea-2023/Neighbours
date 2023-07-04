import { useParams } from 'react-router-dom'
import Post from '../UI/Post/Post'
import { useState } from 'react'
import MarketPost from '../UI/Post/MarketPost'

export default function Market() {
  const { locationId } = useParams()

  const fakeData = [
    {
      id: 1,
      market_advertisement_id: 1,
      title: `Ahmad's Banana`,
      price: 100,
      image: '/public/images/banana.png',
      user_auth0_id: 'auth0_3',
      time: '2023-07-16 09:30:00',
      description: 'Premium Banana only for $100 per 100g!',
      comment: "Your organic vegetables look amazing! Can't wait to try them!",
    },
    {
      id: 2,
      market_advertisement_id: 2,
      title: `2021 Tesla`,
      price: 38500,
      image: '/public/images/tesla.png',
      user_auth0_id: 'auth0_1',
      time: '2023-07-16 10:15:00',
      description: 'Premium Banana only for $100 per 100g!',
      comment: 'What other produce do you have available?',
    },
    {
      id: 3,
      market_advertisement_id: 3,
      title: `Sell my partner`,
      price: 0,
      image: '/public/images/man-smiling.jpeg',
      user_auth0_id: 'auth0_3',
      time: '2023-08-05 19:45:00',
      description: 'Premium Banana only for $100 per 100g!',
      comment:
        'Your jewelry pieces are stunning! Do you have any discounts for multiple purchases?',
    },
    {
      id: 4,
      market_advertisement_id: 4,
      title: `*UNUSED* Macbook`,
      price: 2800,
      image: '/public/images/macbook.webp',
      user_auth0_id: 'auth0_2',
      time: '2023-09-10 20:30:00',
      description: 'Premium Banana only for $100 per 100g!',
      comment: "I'm a big fan of vinyl records! Are they in good condition?",
    },
  ]

  //Search bar section
 

  return (
    <>
      
      <h1 className="text-center font-semibold mb-2">All items</h1>
      <div className="mx-2 grid-cols-2">
        <div className="mb-4 grid-rows-2 grid grid-cols-2">
          {fakeData.map((post) => {
            return (
              <MarketPost
                key={post.id}
                title={post.title}
                path={`/${locationId}/market/${post.id}`}
                className="text-black w-44 h-48 h bg-lightPink"
                imgSource={post.image}
                price={post.price}
                date={''}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
