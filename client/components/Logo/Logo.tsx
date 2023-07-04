import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
  toggleMenu: () => void
}

function Logo(props: Props) {
  const { isAuthenticated } = useAuth0()

  function handleLogoClick() {
    props.toggleMenu()
  }

  return isAuthenticated ? (
    <Link to="/:locationId">
      <button onClick={handleLogoClick}>
        <img src="/images/Neighbours-logo.png" alt="Logo" className="w-44" />
      </button>
    </Link>
  ) : (
    <Link to="/">
      <button onClick={handleLogoClick}>
        <img src="/images/Neighbours-logo.png" alt="Logo" className="w-44" />
      </button>
    </Link>
  )
}

export default Logo
