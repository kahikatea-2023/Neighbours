import ClassifiedPost from '../../components/ClassifiedPost/ClassifiedPost'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from 'react-query'
import { fetchClassifiedPost } from '../../apis/classifiedPost'
import { useParams } from 'react-router-dom'

function ClassifiedPage() {
  const { locationId } = useParams()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  // // const classifiedData = fetchClassifiedPost(locationId)
  // console.log(classifiedData, 'I am in the classifiedPost')
  const { isLoading, data } = useQuery(
    ['fetchLocations', locationId],
    async () => {
      const token = await getAccessTokenSilently()

      return await fetchClassifiedPost(Number(locationId), token)
    }
  )
  if (isLoading) return 'Loading...'
  console.log('I am the data in the react query', data)

  return (
    isAuthenticated && (
      <div className="h-screen">
        <div className="w-3/4 text-center text-4xl font-bold pl-7 mt-6 mb-6">
          <h1>Classifieds</h1>
        </div>
        {data && <ClassifiedPost data={data} />}
      </div>
    )
  )
}

export default ClassifiedPage
