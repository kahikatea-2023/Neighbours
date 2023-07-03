import { useEffect, useState } from 'react'
import { UpdateUsersData, UpdateUsersDataBackend } from '../../../models/user'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery } from 'react-query';
import { fetchLocations } from '../../apis/registration';
import { fetchProfiles, updateProfile } from '../../apis/profile';


function EditProfile() {

  const { user, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  const { isLoading, data, } = useQuery('fetchLocations', async () => {
    return await fetchLocations()
  })



  const initialState = {
    first_name: '',
    last_name: '',
    name: '',
    location_id: 0,
    pronouns: '',
    bio: '',
    auth0_id: '',
  }


  const [updateUser, setupdateUser] = useState<UpdateUsersDataBackend>(
    initialState)

  const profileQuery = useQuery({
    queryKey: 'fetchProfiles',
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await fetchProfiles(accessToken)
        setupdateUser(response)
        return response
      }
    },
    enabled: !!user
  })


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    const newupdateUser = { ...updateUser, [name]: value }
    setupdateUser(newupdateUser)
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = +event.target.value
    const currentupdateUser: UpdateUsersDataBackend = {
      ...updateUser,
      location_id: value,
    }
    setupdateUser(currentupdateUser)
  }

  //data is called and then mutated
  const mutations = useMutation({
    mutationFn: ({ updateUser, token }: { updateUser: UpdateUsersData; token: string }) =>
      updateProfile(updateUser, token),
    onSuccess: async () => {
      await console.log('added, I am in patch the mutation')
      // queryClient.invalidateQueries('getUsers')
    },
  })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const token = await getAccessTokenSilently()
    mutations.mutate({ updateUser, token })
    navigate(`/profile`)
  }


  return (
    <div className="mr-6">
      <div className="text-center text-2xl font-semibold my-5">
        <h2>Edit Profile</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col drop-shadow-xl">
        <div className="flex flex-col ">
          <label htmlFor="firstName" className="pl-7 pb-2 text-lg">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="first_name"
            placeholder={''}
            value={updateUser?.first_name}
            onChange={handleChange}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 ml-6 rounded-sm"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="lastName" className="pl-7 pb-2 text-lg">
            Last Name
          </label>
          <input
            id='lastName'
            type="text"
            name="last_name"
            // placeholder="e.g. Anne"
            value={updateUser.last_name}
            onChange={handleChange}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 ml-6 rounded-sm"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="pronouns" className="pl-7 pb-2 text-lg">
            Pronouns
          </label>
          <input
            type="text"
            name="pronouns"
            // placeholder="e.g. She/her, He/his, They/them"
            value={updateUser.pronouns}
            onChange={handleChange}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 ml-6 rounded-sm"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="bio" className="pl-7 pb-2 text-lg">
            Bio
          </label>
          <input
            type="text"
            name="bio"
            // placeholder=""
            value={updateUser.bio}
            onChange={handleChange}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 ml-6 h-20 rounded-sm"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="location" className="pl-7 pb-2 text-lg">
            Location
          </label>
          <select
            name="location"
            value={updateUser.location_id}
            onChange={handleSelect}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 ml-6 rounded-sm"
          >
            <option>New Zealand</option>
          </select>
        </div>

        <div className="flex flex-col ">
          <select
            name="location"
            value={updateUser.location_id}
            onChange={handleSelect}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 ml-6 rounded-sm"
          >
            <option>Auckland</option>
          </select>
        </div>

        <div className="flex flex-col ">
          <select
            name="location"
            value={updateUser.location_id}
            onChange={handleSelect}
            className=" bg-lightPink flex flex-row py-2 px-4 mb-6 ml-6 rounded-sm"
          >
            <option value="">Select location</option>
            {!isLoading && data && data.map((suburb) => (
              <option key={suburb.id} value={suburb.id}>
                {suburb.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className=" bg-primary text-white justify-center text-center py-2 px-4 mb-6 ml-6 mt-10 rounded-lg hover:shadow-[0px_0px_9px_2px_#F18A81] drop-shadow-xl"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default EditProfile

