import ClassifiedPost from '../../components/ClassifiedPost/ClassifiedPost'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchClassifiedPost } from '../../apis/classifiedPost'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import AddPostButton from '../../components/Buttons/AddPostButton/AddPostButton'
import { useQuery } from 'react-query'
import { FaArrowLeft } from 'react-icons/fa'

function ClassifiedPage() {
  const { locationId } = useParams()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  const { isLoading, data } = useQuery(
    ['fetchLocations', locationId],
    async () => {
      const token = await getAccessTokenSilently()

      return await fetchClassifiedPost(Number(locationId), token)
    }
  )
  if (isLoading) return 'Loading...'

  function handleSearch(e: any) {
    e.preventDefault()
  }
  function handleGoBack() {
    navigate(-1)
  }

  return (
    isAuthenticated && (
      <div className="h-screen bg-lightPink p-2 mt-1">
        <FaArrowLeft size={28} onClick={handleGoBack} />
        <div className="text-center text-4xl font-bold pl-4 mt-2 mb-1">
          <h1 className="font-semibold text-2xl text-start">Classifieds</h1>
          <h2 className="font-light text-base text-start w-full">
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
