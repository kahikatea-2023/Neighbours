import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import Comment from '../Comment/Comment'

function ClassifiedsDetailPost() {
  const id = useParams()
  const navigate = useNavigate()

  const hardcodedData = [
    {
      id: 1,
      created_by: 'Sarah',
      title: 'Help Needed: Cockroach in House',
      type: 'Household',
      image: '../../public/images/cockroach.png',
      date: '2023-07-15',
      time: '15:00:00',
      venue: 'My House',
      description:
        "There is a cockroach in my house, and I need someone's help to get rid of it!",
    },
    {
      id: 2,
      created_by: 'Tem',
      title: 'Gardening Assistance Needed',
      type: 'Gardening',
      image: 'https://example.com/gardening.jpg',
      date: '2023-08-05',
      time: '18:30:00',
      venue: 'Backyard',
      description:
        "I'm looking for someone who can help me with gardening tasks like weeding and planting.",
    },
  ]

  const hardcodedComments = [
    {
      userId: '1',
      comId: '1',
      fullName: 'John Doe',
      userProfile: '',
      text: 'This is the first comment.',
      avatarUrl: '',
      replies: [],
    },
    {
      userId: '2',
      comId: '2',
      fullName: 'Jane Smith',
      userProfile: '',
      text: 'Here is another comment.',
      avatarUrl: '',
      replies: [],
    },
  ]

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <div className="p-5">
      <FaArrowLeft size={30} onClick={handleGoBack} />
      <img
        className="w-96 m-auto mt-4"
        src={hardcodedData[0].image}
        alt="cockroach"
      />
      <div className="flex my-2">
        <div className="mr-2">
          <img
            src="../../public/images/userImage.jpg"
            alt={hardcodedData[0].created_by}
            className="w-10 h-10 rounded-full border-1 border-black"
          />
        </div>
        <div>
          <p className="font-normal">{hardcodedData[0].created_by}</p>
          <p className="font-light">Newmarket Neighbour</p>
        </div>
      </div>
      <h1 className="font-black text-xl mb-0">{hardcodedData[0].title}</h1>
      <p className="font-light mt-0">Posted on {hardcodedData[0].date}</p>
      <div
        className="px-2 pt-2 pb-4
      "
      >
        <p>
          <strong>Venue: </strong>
          {hardcodedData[0].venue}
        </p>
        <p className="pt-1">{hardcodedData[0].description}</p>
      </div>
      <div>
        <div className="border-slate-400 border-t-2">
          <Comment
            currentUser={{
              currentUserId: '',
              currentUserImg: '',
              currentUserProfile: '',
              currentUserFullName: '',
            }}
            commentData={hardcodedComments}
            onDeleteComment={function (commentId: string): void {
              throw new Error('Function not implemented.')
            }}
            onAddComment={function (text: string): void {
              throw new Error('Function not implemented.')
            }}
            onReactToComment={function (
              commentId: string,
              reaction: string
            ): void {
              throw new Error('Function not implemented.')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ClassifiedsDetailPost
