import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'

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
      <h1 className="font-black text-2xl">{hardcodedData[0].title}</h1>
      <p className="text-right">
        Posted by: <strong>{hardcodedData[0].created_by}</strong>
      </p>
      <p className="pt-1">{hardcodedData[0].description}</p>
      <div>
        <div className="p-4">
          <p>
            <strong>Date: </strong>
            {hardcodedData[0].date}
          </p>
          <p>
            <strong>Time: </strong>
            {hardcodedData[0].time}
          </p>
        </div>
        <div className="border-slate-400 border-t-2">
          <p>Comment Component will be located here</p>
        </div>
      </div>
    </div>
  )
}

export default ClassifiedsDetailPost