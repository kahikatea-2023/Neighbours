import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/">
      <img src="/images/Neighbours-logo.png" alt="Logo" className="w-44" />
    </Link>
  )
}

export default Logo
