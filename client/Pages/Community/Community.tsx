
import CommunityPost from "../../components/CommunityPost/CommunityPost"
import Weather from "../../components/Weather"
import { useAuth0 } from '@auth0/auth0-react'


function Community() {
  const { user, isAuthenticated, isLoading } = useAuth0()


  if (isLoading) {
    return <p>Loading...</p>
  }


  return (
    <div>
      <div className="text-2xl font-bold pl-7 mt-6 mb-6">
        {isAuthenticated && <h1>Hello, {user?.nickname}🌿</h1>}
        <h1>Find your New Neighbours and Events</h1>
      </div>
      <div className='w-3/4 bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg drop-shadow-[0px_0px_10px_#B0BF3B]'>
        <Weather />
      </div>
      <div className="text-2xl font-bold pl-7 mb-3">
        <h2>Explore your Neighourhood</h2>
      </div>
      <CommunityPost />



    </div>
  )
}

export default Community
