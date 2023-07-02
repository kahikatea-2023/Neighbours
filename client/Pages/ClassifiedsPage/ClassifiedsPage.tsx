import ClassifiedPost from '../../components/ClassifiedPost/ClassifiedPost'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from 'react-query'
import { fetchClassifiedPost } from '../../apis/classifiedPost'

function ClassifiedPage() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  // const { isLoading, data } = useQuery('fetchLocations', async () => {
  //   return await fetchClassifiedPost()
  // })

  return (
    isAuthenticated && (
      <div className="h-screen">
        <div className="w-3/4 text-center text-4xl font-bold pl-7 mt-6 mb-6">
          <h1>Classifieds</h1>
        </div>
        <ClassifiedPost />
      </div>
    )
  )
}

export default ClassifiedPage
