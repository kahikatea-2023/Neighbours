import { useState } from 'react'
import { UsersDataBackend } from '../../../models/user'
import { useNavigate } from 'react-router-dom'
// save for later
// import { useMutation, useQueryClient } from 'react-query'

function RegisterUser() {
  // for later when connect to backend
  // const queryClient = useQueryClient()
  // const mutations = useMutation(addNewUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('getUsers')
  //   }
  // })

  const navigate = useNavigate()

  const initialState = {
    first_name: '',
    last_name: '',
    name: '',
    location_id: 0,
  } as Partial<UsersDataBackend>

  const [userData, setUserData] = useState(initialState)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newUserData = { ...userData, [name]: value }
    setUserData(newUserData)
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = +event.target.value
    const currentUserData: Partial<UsersDataBackend> = { ...userData, location_id: value }
    setUserData(currentUserData)
  }


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // code below save for later
    // mutations.mutate(userData)
    //the redirect url need more work
    const location = data.find((location) => location.id === userData.location_id)
    const lowercaseName = location?.name.toLowerCase()
    navigate(`/${lowercaseName}`)

  }

  // Hardcoded locations data
  const data = [
    { id: 1, name: 'Auckland Central' },
    { id: 2, name: 'Parnell' },
    { id: 3, name: 'Ponsonby' },
    { id: 4, name: 'Newmarket' },
    { id: 5, name: 'Takapuna' },
    { id: 6, name: 'Devonport' },
    { id: 7, name: 'Milford' },
    { id: 8, name: 'Albany' },
    { id: 9, name: 'Henderson' },
    { id: 10, name: 'New Lynn' },
    { id: 11, name: 'Titirangi' },
    { id: 12, name: 'Massey' },
    { id: 13, name: 'Manukau' },
    { id: 14, name: 'Papatoetoe' },
    { id: 15, name: 'Mangere' },
    { id: 16, name: 'Otahuhu' },
    { id: 17, name: 'Howick' },
    { id: 18, name: 'Pakuranga' },
    { id: 19, name: 'Botany Downs' },
    { id: 20, name: 'Half Moon Bay' },
  ]

  // get location data
  // const { isLoading, data } = useQuery(['getLocations'], async () => {
  //   return await getLocations()
  //   console.log(data)
  // })

  return (
    <div>
      <div className="w-3/4 text-center text-4xl font-bold mt-6 mb-6">
        <h2>Edit Profile</h2>
      </div>
      <form onSubmit={handleSubmit} className='pl-7 flex flex-col w-3/4'>
        <div className='flex flex-col '>
          <label htmlFor="firstName" className='text-black pl-7 pb-2 font-bold font-xl' >First Name</label>
          <input
            type="text"
            name='firstName'
            value={userData.first_name}
            onChange={handleChange}
            className=' bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg drop-shadow-[0px_0px_10px_#65768C]'
          />
        </div>

        <div className='flex flex-col '>
          <label htmlFor='lastName' className='text-black pl-7 pb-2 font-bold font-xl'>Last Name</label>
          <input
            type="text"
            name='lastName'
            value={userData.last_name}
            onChange={handleChange}
            className=' bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg drop-shadow-[0px_0px_10px_#65768C]'
          />

        </div>

        <div className='flex flex-col '>
          <label htmlFor="userName" className='text-black pl-7 pb-2 font-bold font-xl'>User Name</label>
          <input
            type="text"
            name='userName'
            value={userData.name}
            onChange={handleChange}
            className=' bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg drop-shadow-[0px_0px_10px_#65768C]'
          />
        </div>

        <div className='flex flex-col '>
          <label htmlFor='location' className='text-black pl-7 pb-2 font-bold font-xl'>Location</label>
          <select
            name='location'
            value={userData.location_id}
            onChange={handleSelect}
            className=' bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg drop-shadow-[0px_0px_10px_#65768C]'
          >
            <option value="">Select location</option>
            {data.map((suburb) => (
              <option
                key={suburb.id}
                value={suburb.id}>
                {suburb.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className=' bg-lightGreen text-white justify-center text-center font-bold py-2 px-4 mb-6 ml-6 mt-10 rounded-lg hover:shadow-[0px_0px_9px_2px_#65768C] drop-shadow-2xl'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterUser
