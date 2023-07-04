import { useAuth0 } from "@auth0/auth0-react"
import ActivityPost from "../../components/ActivityPost/ActivityPost"
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function ActivitiesPage() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    isAuthenticated && (
      <div className="h-screen">
        <FaArrowLeft size={30} onClick={handleGoBack} />
        <div className="w-3/4 text-center text-4xl font-bold pl-7 mt-2 mb-6">
          <h1 className="font-semibold text-2xl text-start">Activities</h1>
          <h2 className="font-light text-base text-start">
            Check out activities in your neighbourhood
          </h2>
        </div>
        <ActivityPost />
      </div>
    )
  )
}

export default ActivitiesPage
