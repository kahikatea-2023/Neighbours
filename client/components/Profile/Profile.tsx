import { useQuery } from "react-query"
import EditButton from "../Buttons/EditButton/EditButton"
import { fetchProfiles } from "../../apis/profile"
import { useAuth0 } from "@auth0/auth0-react"

function Profile() {

  const { user, getAccessTokenSilently } = useAuth0()

  const profileQuery = useQuery({
    queryKey: 'fetchProfiles',
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await fetchProfiles(accessToken)

        return response
      }
    },
    enabled: !!user
  })

  return (
    <>
      <div>
        <div className="border-b-1 border-slate-400 flex pb-3 pt-6">
          <div className="px-5">
            <img src="public/images/name-icon.png" alt="name" className="w-10" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-slate-500 font-light pb-1">First Name</p>
              <p className="font-light pb-1">{!profileQuery.isLoading && profileQuery.data && profileQuery.data.first_name}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-slate-500 font-light pb-1">Last Name</p>
              <p className="font-light">{!profileQuery.isLoading && profileQuery.data && profileQuery.data.last_name}</p>
            </div>
          </div>
        </div>
        <div className="border-b-1 border-slate-400 flex py-3">
          <div className="px-5">
            <img src="public/images/pronouns-icon.png" alt="pronouns" className="w-10" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-slate-500 font-light pb-1">Pronouns</p>
              <p className="font-light pb-1">{!profileQuery.isLoading && profileQuery.data && profileQuery.data.pronouns}</p>
            </div>
          </div>
        </div>
        <div className=" flex py-3">
          <div className="px-5">
            <img src="public/images/bio-icon.png" alt="pronouns" className="w-10" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-slate-500 font-light pb-1">Bio</p>
              <p className="font-light pb-1">{!profileQuery.isLoading && profileQuery.data && profileQuery.data.bio}</p>
            </div>
          </div>
        </div>
        <EditButton />
      </div>
    </>
  )
}

export default Profile

function getAccessTokenSilently() {
  throw new Error("Function not implemented.")
}
