import { useAuth0 } from '@auth0/auth0-react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import AddPostButton from '../../components/Buttons/AddPostButton/AddPostButton'
import Market from '../../components/Market/Market'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState } from 'react'

export default function MarketPage() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  const CarouselData = [
    {
      headerText: null,
      subText: 'Sub Text One',
      image: '/images/banana.png',
    },
    {
      headerText: 'Header Text Two',
      subText: null,
      image: '/images/jordan-shoes.webp',
    },
    {
      headerText: null,
      subText: null,
      image: '/images/macbook.webp',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  function handleSearch(e: any) {
    e.preventDefault()
  }

  return (
    isAuthenticated && (
      <div className="h-screen bg-lightPink p-2 mt-1">
        <FaArrowLeft size={28} onClick={handleGoBack} />
        {/* <div className="border-pink border-2 rounded-full flex items-center h-8 mb-4">
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
      </div> */}
        <div className="text-center text-4xl font-bold pl-4 mt-2 mb-1">
          <h1 className="font-semibold text-2xl text-start">
            Newmarket Market
          </h1>
          <h2 className="font-light text-base text-start w-full">
            Check out what is on trend!
          </h2>
        </div>
        
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          className="w-64 mx-auto border-1 drop-shadow-lg rounded-xl mb-4"
        >
          {CarouselData.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" className="flex items-center h-40" />
            </div>
          ))}
        </Carousel>
        <Market />
        <AddPostButton />
      </div>
    )
  )
}
