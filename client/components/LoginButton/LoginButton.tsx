import { useAuth0 } from '@auth0/auth0-react'

import Button from '../UI/Button/Button'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        // redirect_uri: `${window.location.origin}/newmarket`,
        redirect_uri: `http://localhost:5173/newmarket`,
      },
    })
  }

  return (
    <>
      <Button className="bg-primary text-lightPink " onClick={handleLogin}>
        LOG IN
      </Button>
    </>
  )
}

export default LoginButton
