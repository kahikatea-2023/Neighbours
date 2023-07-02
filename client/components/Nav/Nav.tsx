import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  toggleMenu: () => void
}

function Nav(props: Props) {
  const { isAuthenticated, logout } = useAuth0()
  const navigate = useNavigate()

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  function goTo(link: string) {
    props.toggleMenu()
    navigate(link)
  }

  return (
    <nav className="mt-10 pt-16 pl-4 flex">
      <ul className="text-3xl">
        <li>
          {isAuthenticated ? (
            <button onClick={() => goTo('/newmarket')}>Home</button>
          ) : (
            <button onClick={() => goTo('/')}>Home</button>
          )}
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={() => goTo('/:location/activities')}>
              Activities
            </button>
          ) : (
            <button onClick={() => goTo('/error')}>Activities</button>
          )}
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={() => goTo('/newmarket/classifieds')}>
              Classifieds
            </button>
          ) : (
            <button onClick={() => goTo('/error')}>Classifieds</button>
          )}
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={() => goTo('/:location/market')}>Market</button>
          ) : (
            <button onClick={() => goTo('/error')}>Market</button>
          )}
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={() => goTo('/profile')}>Profile</button>
          ) : (
            <button onClick={() => goTo('/error')}>Profile</button>
          )}
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={() => goTo('/my-posts')}>My posts</button>
          ) : (
            <button onClick={() => goTo('/error')}>My posts</button>
          )}
        </li>
        <li>
          {isAuthenticated && <button onClick={handleLogout}>Sign out</button>}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
