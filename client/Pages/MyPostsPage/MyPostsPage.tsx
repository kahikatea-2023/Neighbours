import ClassifiedPost from '../../components/ClassifiedPost/ClassifiedPost'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchUserClassifiedPost } from '../../apis/classifiedPost'
import AddPostButton from '../../components/Buttons/AddPostButton/AddPostButton'
import { useQuery } from 'react-query'

function MyPostsPage() {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()


  const { isLoading, data } = useQuery(
    ['fetchLocations', user?.sub],
    async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await fetchUserClassifiedPost(user.sub, token)
        return response
      }
    }
  )

  return (
    isAuthenticated && (
      <div className="h-screen">
        <div className="w-3/4 text-center text-4xl font-bold pl-7 mt-2 mb-6">
          <h1 className="font-semibold text-2xl text-start">
            My Posts
          </h1>
        </div>
        {!isLoading && data && <ClassifiedPost data={data} />}
        <AddPostButton />
      </div>
    )
  )
}

export default MyPostsPage
