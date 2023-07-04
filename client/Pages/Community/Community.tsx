import { useQuery } from 'react-query'
import CommunityPost from '../../components/CommunityPost/CommunityPost'
import Weather from '../../components/Weather/Weather'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchProfiles } from '../../apis/profile'

function Community() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }

  const profileQuery = useQuery({
    queryKey: 'fetchProfiles',
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await fetchProfiles(accessToken)

        return response
      }
    },
    enabled: !!user,
  })

  return (
    <div className="h-screen">
      <div className="text-lg font-bold pl-7 mt-6 mb-6">
        {isAuthenticated && (
          <h1>
            Hello,{' '}
            {!profileQuery.isLoading &&
              profileQuery.data &&
              profileQuery.data.first_name}{' '}
            {!profileQuery.isLoading &&
              profileQuery.data &&
              profileQuery.data.last_name}{' '}
            🌿
          </h1>
        )}
        <h2>Find your New Neighbours and Events</h2>
      </div>
      <div className="bg-lightPink flex flex-row py-2 px-4 mb-6 mx-5 rounded-2xl border-solid border-pink border-3">
        <Weather />
      </div>
      <div className="text-xl font-bold text-center">
        <h2>Explore your Neighourhood</h2>
      </div>
      <CommunityPost />
    </div>
  )
}

export default Community
