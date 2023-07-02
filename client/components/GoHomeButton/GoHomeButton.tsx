import { useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button'

function GoHomeButton() {
  const navigate = useNavigate()

  function handleGoHome() {
    navigate('/')
  }

  return (
    <Button
      className="bg-primary text-lightPink drop-shadow-lg"
      onClick={handleGoHome}
    >
      Go back to the homepage
    </Button>
  )
}

export default GoHomeButton
