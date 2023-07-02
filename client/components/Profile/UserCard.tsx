import { useQuery } from "react-query"
import { fetchLocations } from "../../apis/registration"
import { useAuth0 } from "@auth0/auth0-react"
import { fetchProfiles } from "../../apis/profile"

function UserCard() {
  const userInfo = {
    first_name: 'Mary',
    last_name: 'Anne',
    location: 'Newmarket',
    posts: '30',
    comments: '149',
    pronouns: 'She/her',
    bio: 'Call me Doreamon',
    user_image: 'public/images/userImage.jpg',
  }

  const { user, getAccessTokenSilently } = useAuth0()

  const { isLoading, data } = useQuery('fetchLocations', async () => {
    return await fetchLocations()
  })

  const profileQuery = useQuery({
    queryKey: 'fetchProfiles',
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await fetchProfiles(accessToken)
        return response
      }
    },
  })




  return (
    <div className="bg-primary rounded-lg text-lightPink font-extralight flex flex-col items-center pt-8 mt-6">
      <img
        src={userInfo.user_image}
        alt={userInfo.first_name}
        className="w-28 h-28 rounded-full border-4 border-lightPink"
      />
      <p className="font-normal">
        {!profileQuery.isLoading && profileQuery.data && profileQuery.data.first_name} {!profileQuery.isLoading && profileQuery.data && profileQuery.data.last_name}
      </p>
      <p>{ } Neighbour</p>
      <div className="flex justify-around pt-2 pb-4 w-4/5">
        <p>
          <a href="/my-posts" className="font-normal">
            {userInfo.posts}
          </a>{' '}
          Posts
        </p>
        <p>
          <a href="/my-posts" className="font-normal">
            {userInfo.comments}
          </a>{' '}
          Comments
        </p>
      </div>
    </div>
  )
}

export default UserCard
function getAccessTokenSilently() {
  throw new Error("Function not implemented.")
}

