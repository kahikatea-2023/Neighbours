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
    <nav className="pt-16 pl-4 flex">
      <ul className="text-3xl">
        <li>
          <button onClick={() => goTo('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => goTo('/:location/activities')}>Activities</button>
        </li>
        <li>
          <button onClick={() => goTo('/newmarket/classifieds')}>Classifieds</button>
        </li>
        <li>
          <button onClick={() => goTo('/:location/market')}>Market</button>
        </li>
        <li>
          <button onClick={() => goTo('/profile')}>Profile</button>
        </li>
        <li>
          <button onClick={() => goTo('/my-posts')}>My posts</button>
        </li>
        <li>
          {isAuthenticated && <button onClick={handleLogout}>Sign out</button>}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
