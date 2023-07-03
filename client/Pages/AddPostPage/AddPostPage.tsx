import { useState } from 'react'
import { ActPostData } from '../../../models/activities'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { FaArrowLeft } from 'react-icons/fa'
import CreateButton from '../../components/Buttons/CreateButton/CreateButton'
// save for later
// import { useMutation, useQueryClient } from 'react-query'

function AddPost() {
  // for later when connect to backend
  // const queryClient = useQueryClient()
  // const mutations = useMutation(addPost, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('getPosts')
  //   }
  // })

  // const location = useParams().location as string
  // const category = useParams().category as string

  const { user } = useAuth0()

  const navigate = useNavigate()

  const initialState = {
    user_auth0_id: user?.sub,
    location_id: 0,
    title: '',
    type: '',
    image: '',
    date: '',
    time: '',
    venue: '',
    attendees: '',
    description: '',
  } as ActPostData

  const [postData, setpostData] = useState(initialState)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newpostData = { ...postData, [name]: value }
    setpostData(newpostData)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // code below save for later
    // mutations.mutate(postData)
    //the redirect url need more work
    // navigate(`/${location}/${category}`)
    navigate('/newmarket/classifieds')
  }

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <div className='h-screen'>
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
          <p className="font-normal">{user?.nickname}</p>
          <p className="font-light">Newmarket Neighbour</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4 mx-4">
        <div className="flex flex-col ">
          <label
            htmlFor="title"
            className="text-black font-light font-xl mb-1"
          >
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
          <label
            htmlFor="venue"
            className="text-black font-light font-xl mb-1"
          >
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
          <label
            htmlFor="image"
            className="text-black font-light font-xl mb-1"
          >
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
