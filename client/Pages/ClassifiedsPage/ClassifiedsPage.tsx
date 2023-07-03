import ClassifiedPost from '../../components/ClassifiedPost/ClassifiedPost'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchClassifiedPost } from '../../apis/classifiedPost'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import AddPostButton from '../../components/Buttons/AddPostButton/AddPostButton'
import { useQuery } from 'react-query'

function ClassifiedPage() {
  const { locationId } = useParams()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { isLoading, data } = useQuery(
    ['fetchLocations', locationId],
    async () => {
      const token = await getAccessTokenSilently()

      return await fetchClassifiedPost(Number(locationId), token)
    }
  )
  if (isLoading) return 'Loading...'

  return (
    isAuthenticated && (
      <div className="h-screen bg-lightPink">
        <div className="w-3/4 text-center text-4xl font-bold pl-7 mt-2 mb-6">
          <h1 className="font-semibold text-2xl text-start">Classifieds</h1>
          <h2 className="font-light text-base text-start">
            Ask for help to your neighbours
          </h2>
        </div>
        {data && <ClassifiedPost data={data} />}
        <AddPostButton />
      </div>
    )
  )
}

export default ClassifiedPage
