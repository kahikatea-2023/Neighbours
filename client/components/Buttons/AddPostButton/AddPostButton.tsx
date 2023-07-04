import { useNavigate, useParams } from 'react-router'
import Button from '../../UI/Button/Button'

function AddPostButton() {
  const navigate = useNavigate()
  const { locationId } = useParams()
  
  function handleAddPost() {
    console.log('clicked')
    navigate(`/${locationId}/classifieds/add-post`)
  }

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleAddPost}
        className="bg-pink w-11/12 rounded-sm text-center font-medium text-base"
      >
        Add Post
      </Button>
    </div>
  )
}

export default AddPostButton
