import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Button/Button'

function EditButton() {
  const navigate = useNavigate()

  function handleGoHome() {
    navigate('/edit-profile')
  }

  return (
    <Button
      className="bg-primary text-lightPink drop-shadow-lg"
      onClick={handleGoHome}
    >
      EDIT
    </Button>
  )
}

export default EditButton
