import { useAuth0 } from '@auth0/auth0-react'

import Button from '../UI/Button/Button'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `http://localhost:5173/register`,
      },
    })
  }

  return (
    <Button className="bg-coldPink text-primary " onClick={handleRegister}>
      REGISTER
    </Button>
  )
}

export default RegisterButton
