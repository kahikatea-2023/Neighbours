import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import CommentsSection from '../Comment/CommentsSection'

function ClassifiedsDetailPost() {
  const { postId } = useParams()
  const { locationId } = useParams()
  const navigate = useNavigate()

  const hardCodedData = {
    id: 1,
    user_auth0_id: 'auth0_1',
    location_id: 4,
    user_name: 'Sarah',
    title: 'Help Needed: Cockroach in House',
    type: 'Household',
    image: '../../public/images/cockroach.png',
    date: '2023-07-15',
    time: '15:00:00',
    venue: 'My House',
    description:
      "There is a cockroach in my house, and I need someone's help to get rid of it!",
  }


  function handleGoBack() {
    navigate(-1)
  }

  return (
    <div className="p-5">
      <FaArrowLeft size={30} onClick={handleGoBack} />
      <img
        className="w-96 m-auto mt-4"
        src={hardCodedData.image}
        alt="cockroach"
      />
      <div className="flex my-2">
        <div className="mr-2">
          <img
            src="../../public/images/userImage.jpg"
            alt={hardCodedData.user_name}
            className="w-10 h-10 rounded-full border-1 border-black"
          />
        </div>
        <div>
          <p className="font-normal">{hardCodedData.user_name}</p>
          <p className="font-light">Newmarket Neighbour</p>
        </div>
      </div>
      <h1 className="font-black text-xl mb-0">{hardCodedData.title}</h1>
      <p className="font-light mt-0">Posted on {hardCodedData.date}</p>
      <div
        className="px-2 pt-2 pb-4
      "
      >
        <p>
          <strong>Venue: </strong>
          {hardCodedData.venue}{' '}
        </p>
        <p className="pt-1">{hardCodedData.description}</p>
      </div>
      <div>
        <div className="border-slate-400 border-t-2">
          {location && postId && <CommentsSection postId={postId} locationId={locationId} />}
        </div>
      </div>
    </div>
  )
}

export default ClassifiedsDetailPost
