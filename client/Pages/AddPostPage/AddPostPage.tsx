import { useState } from 'react'
import { ActPostData } from '../../../models/activities'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
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

  return (
    <div>
      <div className="w-3/4 text-center text-4xl font-bold mt-6 mb-6">
        <h2>Create Post</h2>
      </div>
      <div>
        <img className='w-10' src="../../public/images/cockroach.png" alt="user avatar" />
        <p>{user?.nickname}</p>
        <p>Newmarket Neighbour</p>
      </div>
      <form onSubmit={handleSubmit} className='pl-7 flex flex-col w-3/4'>
        <div className='flex flex-col '>
          <label htmlFor='title' className='text-black pl-7 pb-2 font-bold font-xl'>Listing title</label>
          <input
            type="text"
            name='title'
            value={postData.title}
            onChange={handleChange}
            className=' bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg drop-shadow-[0px_0px_10px_#65768C]'
          />
        </div>

        <div className='flex flex-col '>
          <label htmlFor="venue" className='text-black pl-7 pb-2 font-bold font-xl'>Venue</label>
          <input
            type="text"
            name='venue'
            value={postData.venue}
            onChange={handleChange}
            className=' bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg drop-shadow-[0px_0px_10px_#65768C]'
          />
        </div>

        <div className='flex flex-col '>
          <label htmlFor="image" className='text-black pl-7 pb-2 font-bold font-xl'>Attach Image Link</label>
          <input
            type="text"
            name='image'
            value={postData.image}
            onChange={handleChange}
            className=' bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg drop-shadow-[0px_0px_10px_#65768C]'
          />
        </div>

        <div className='flex flex-col '>
          <label htmlFor="description" className='text-black pl-7 pb-2 font-bold font-xl'>Description</label>
          <input
            type="text"
            name='description'
            value={postData.description}
            onChange={handleChange}
            className=' bg-primary flex flex-row py-2 px-4 mb-6 ml-6 h-20 rounded-lg drop-shadow-[0px_0px_10px_#65768C]'
          />
        </div>

        <button type="submit" className=' bg-lightGreen text-white justify-center text-center font-bold py-2 px-4 mb-6 ml-6 mt-10 rounded-lg hover:shadow-[0px_0px_9px_2px_#65768C] drop-shadow-2xl'>
          Post
        </button>
      </form>
    </div>
  )
}

export default AddPost