import { useNavigate } from 'react-router'
import Button from '../../UI/Button/Button'

function AddPostButton() {
  const navigate = useNavigate()
  function handleAddPost() {
    console.log('clicked')
    navigate('/:locationId/classifieds/add-post')
  }

  return (
    <div className="">
      <Button
        onClick={handleAddPost}
        className="bg-pink w-11/12 h-7 rounded-s-sm text-center font-medium text-base items-center"
      >
        Add Post
      </Button>
    </div>
  )
}

export default AddPostButton
