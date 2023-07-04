import { useState } from 'react'
import { ActPostData } from '../../../models/activities'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQueryClient } from 'react-query'
import { AddClaRequest, AddPostDataDraft } from '../../../models/classified'
import { FaArrowLeft } from 'react-icons/fa'
import CreateButton from '../../components/Buttons/CreateButton/CreateButton'
import { useQuery } from 'react-query'
import { fetchProfiles } from '../../apis/profile'
import { addClassifiedReqest } from '../../apis/addPost'

function AddPost() {
  const locationId = useParams().locationId
  const location_id = Number(locationId)
  const queryClient = useQueryClient()
  const mutations = useMutation({
    mutationFn: async ({
      postData,
      token,
      location_id,
    }: {
      postData: AddClaRequest
      token: string
      location_id: number
    }) => addClassifiedReqest(location_id, postData, token),
    onSuccess: async () => {
      console.log('the add post in react query work')
      queryClient.invalidateQueries('fetchClassifiedPost')
    },
  })

  const { user, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  const initialState = {
    title: '',
    date: '',
    venue: '',
    description: '',
    image: '',
    user_name: '',
    location: '',
  } as AddClaRequest

  //get the data from the user table
  const profileQuery = useQuery({
    queryKey: 'fetchProfiles',
    queryFn: async () => {
      if (user && user.sub) {
        const token = await getAccessTokenSilently()
        const response = await fetchProfiles(token)

        return response
      }
    },
    enabled: !!user,
  })

  const [postData, setpostData] = useState(initialState)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newpostData = { ...postData, [name]: value }
    setpostData(newpostData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const token = await getAccessTokenSilently()

    console.log('I am in the postComponent', postData)

    mutations.mutate({ postData, token, location_id })

    navigate(`/${locationId}/classifieds`)
  }

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <div className="h-screen">
      <FaArrowLeft size={30} onClick={handleGoBack} />
      <div className="text-center text-3xl font-semibold border-slate-300 border-b-1 pb-2">
        <h2>Create Post</h2>
      </div>

      <div className="flex mb-2 mt-6">
        <div className="mr-2">
          <img
            src="../../public/images/userImage.jpg"
            alt={user?.nickname}
            className="w-10 h-10 rounded-full border-1 border-black"
          />
        </div>
        <div>
          <p className="font-normal">
            {!profileQuery.isLoading &&
              profileQuery.data &&
              profileQuery.data.first_name}{' '}
            {!profileQuery.isLoading &&
              profileQuery.data &&
              profileQuery.data.last_name}
          </p>
          <p className="font-light">
            {!profileQuery.isLoading &&
              profileQuery.data &&
              profileQuery.data.location}{' '}
            Neighbour
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4 mx-4">
        <div className="flex flex-col ">
          <label htmlFor="title" className="text-black font-light font-xl mb-1">
            Listing title
          </label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 rounded-sm drop-shadow-xl"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="venue" className="text-black font-light font-xl mb-1">
            Venue
          </label>
          <input
            type="text"
            name="venue"
            value={postData.venue}
            onChange={handleChange}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 rounded-sm drop-shadow-xl"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="image" className="text-black font-light font-xl mb-1">
            Attach Image Link
          </label>
          <input
            type="text"
            name="image"
            value={postData.image}
            onChange={handleChange}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 rounded-sm drop-shadow-xl"
          />
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor="description"
            className="text-black font-light font-xl mb-1"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            value={postData.description}
            onChange={handleChange}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 rounded-sm drop-shadow-xl h-40"
          />
        </div>
        <CreateButton />
      </form>
    </div>
  )
}

export default AddPost
