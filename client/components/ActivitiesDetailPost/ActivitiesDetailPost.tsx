import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Comment from '../Comment/Comment'

function ActivitiesDetailPost() {
  const navigate = useNavigate()

  const fakeData = {
    id: 1,
    user_auth0_id: 'auth0_1',
    user_name: 'Sarah',
    title: 'Zumba class',
    type: 'Workshop',
    image: '/public/images/zumba-class.jpg',
    date: '06/07/2023',
    time: '15:00:00',
    venue: 'Community Center',
    attendees: '5/10',
    description:
      'Join us for a rejuvenating yoga workshop aimed at all skill levels. Relax, stretch, and find your inner peace.',
  }

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
    <div className="p-5 h-screen">
      <FaArrowLeft size={30} onClick={handleGoBack} />
      <div className="flex my-2">
        <div className="flex">
          <img
            src="../../public/images/user.png"
            alt={fakeData.user_name}
            className="w-10 h-10 rounded-full border-1 border-black mr-2"
          />
          <div>
            <p className="font-normal">{fakeData.user_name}</p>
            <p className="font-light">Newmarket Neighbour</p>
          </div>
        </div>
      </div>
      <img
        className="w-96 m-auto mt-2"
        src={fakeData.image}
        alt="zumba class"
      />
      <h1 className="font-black text-xl mb-0">{fakeData.title}</h1>
      <p className="font-light mt-0">Posted on {fakeData.date}</p>
      <div
        className="px-2 pt-2 pb-4
      "
      >
        <p>
          <strong>Venue: </strong>
          {fakeData.venue}{' '}
        </p>
        <p className="pt-1">{fakeData.description}</p>
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

export default ActivitiesDetailPost
