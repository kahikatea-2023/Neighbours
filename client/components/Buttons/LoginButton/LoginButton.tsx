import { useAuth0 } from '@auth0/auth0-react'

import Button from '../../UI/Button/Button'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  async function handleLogin() {
    await loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/redirect`,
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
