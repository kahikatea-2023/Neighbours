import { ChangeEvent, FormEvent, useState } from 'react'
import { UsersDataBackend } from '../../../models/user'
import { useMutation, useQueryClient } from 'react-query'
import { LocationsData, LocationsDataBackend } from '../../../models/locations'

function RegisterUser() {
  // const queryClient = useQueryClient()
  // const mutations = useMutation(addNewUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('getUsers')
  //   }
  // })

  const [userData, setUserData] = useState({} as Partial<UsersDataBackend>)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newUserData = { ...userData, [name]: value }
    setUserData(newUserData)
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = +event.target.value
    const newUser: LocationsDataBackend = { ...newUser, id: value }
    setUserData(newUserData)
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" >First Name</label>
          <input
            type="text"
            name='firstName'
            value={newUser.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input type="text" name='lastName' value={newUser.last_name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="userName">User Name</label>
          <input type="text" name='userName' value={newUser.name} onChange={handleChange} />
        </div>



        <label htmlFor='location'>Location</label>

        <select value={newUser.location_id} onChange={handleSuburbChange}>
          <option value="">Select Suburb</option>
          {data.map((suburb) => (
            <option key={suburb} value={suburb}>
              {suburb}
            </option>
          ))}
          {/*Render list of suburbs*/}
        </select>

        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterUser
