import ActivityPost from "../../components/ActivityPost/ActivityPost"
import Post from "../../components/UI/Post/Post"
import Weather from "../../components/Weather"
import { useAuth0 } from '@auth0/auth0-react'


function Community() {
  const { user, isAuthenticated, isLoading } = useAuth0()


  if (isLoading) {
    return <p>Loading...</p>
  }


  return (
    <div>
      <div>
        {isAuthenticated && <h1>Hello, {user?.nickname}</h1>}
        <h1>Find your New Neighbours and Events</h1>

      </div>
      <div>
        <Weather />
      </div>
      <div>
        <h2>Explore your Neighourhood</h2>
      </div>
      <ActivityPost />



    </div>
  )
}

export default Community
