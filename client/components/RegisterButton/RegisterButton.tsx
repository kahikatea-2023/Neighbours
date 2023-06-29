import { useAuth0 } from '@auth0/auth0-react'

import Button from '../UI/Button/Button'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        //NEEDS TO BE CHANGED TO /register
        redirect_uri: `http://localhost:5173/newmarket`,
      },
    })
  }

  return (
    <Button className="bg-primary text-lightGreen" onClick={handleRegister}>
      REGISTER
    </Button>
  )
}

export default RegisterButton
