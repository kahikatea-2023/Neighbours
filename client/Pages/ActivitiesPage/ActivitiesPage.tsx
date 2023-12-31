import { useAuth0 } from '@auth0/auth0-react'
import ActivityPost from '../../components/ActivityPost/ActivityPost'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import AddPostButton from '../../components/Buttons/AddPostButton/AddPostButton'

function ActivitiesPage() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    isAuthenticated && (
      <div className="h-screen bg-lightPink p-2 mt-1">
        <FaArrowLeft size={28} onClick={handleGoBack} />
        <div className="text-center text-4xl font-bold pl-4 mt-2 mb-1">
          <h1 className="font-semibold text-2xl text-start">Activities</h1>
          <h2 className="font-light text-base text-start w-full">
            Check out activities in your neighbourhood
          </h2>
        </div>
        <ActivityPost />
        <AddPostButton />
      </div>
    )
  )
}

export default ActivitiesPage
