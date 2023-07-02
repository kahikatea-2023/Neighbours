import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Button/Button'

function EditButton() {
  const navigate = useNavigate()

  function handleGoHome() {
    navigate('/edit-profile')
  }

  return (
      <div className='flex justify-center pt-2'>
        <Button
          className="bg-primary text-lightPink drop-shadow-lg w-24"
          onClick={handleGoHome}
        >
          EDIT
        </Button>
      </div>
  )
}

export default EditButton
