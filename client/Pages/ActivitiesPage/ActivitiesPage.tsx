import { useAuth0 } from "@auth0/auth0-react"
import ActivityPost from "../../components/ActivityPost/ActivityPost"

function ActivitiesPage() {

  const { isAuthenticated } = useAuth0()

  const fakeData = [
    {
      id: 1,
      user_auth0_id: 'auth0_1',
      title: 'Yoga Workshop',
      type: 'Workshop',
      image: 'https://example.com/yoga-workshop.jpg',
      date: '2023-07-15',
      time: '15:00:00',
      venue: 'Community Center',
      attendees: '5/10',
      description:
        'Join us for a rejuvenating yoga workshop aimed at all skill levels. Relax, stretch, and find your inner peace.',
    },
    {
      id: 2,
      user_auth0_id: 'auth0_2',
      location_id: 4,
      title: 'Painting Class',
      type: 'Class',
      image: 'https://example.com/painting-class.jpg',
      date: '2023-08-05',
      time: '18:30:00',
      venue: 'Art Studio',
      attendees: '8/12',
      description:
        'Discover your creativity through our painting class. Learn various techniques and express yourself on canvas.',
    },
    {
      id: 3,
      user_auth0_id: 'auth0_3',
      location_id: 4,
      title: 'Book Club Meeting',
      type: 'Club',
      image: 'https://example.com/book-club-meeting.jpg',
      date: '2023-09-10',
      time: '19:00:00',
      venue: 'Local Library',
      attendees: '6/8',
      description:
        'Join our book club and dive into captivating stories. Engage in thoughtful discussions with fellow book lovers.',
    },
    {
      id: 4,
      user_auth0_id: 'auth0_1',
      location_id: 4,
      title: 'Music Jam Session',
      type: 'Jam Session',
      image: 'https://example.com/music-jam-session.jpg',
      date: '2023-10-20',
      time: '20:00:00',
      venue: 'Community Hall',
      attendees: '4/6',
      description:
        "Calling all musicians! Bring your instruments and let's create beautiful melodies together in this casual jam session.",
    },
    {
      id: 5,
      user_auth0_id: 'auth0_2',
      location_id: 4,
      title: 'Fitness Bootcamp',
      type: 'Bootcamp',
      image: 'https://example.com/fitness-bootcamp.jpg',
      date: '2023-11-12',
      time: '07:00:00',
      venue: 'Park',
      attendees: '10/15',
      description:
        'Get ready to sweat and challenge yourself with our high-intensity fitness bootcamp. Improve your strength and endurance.',
    },
    {
      id: 6,
      user_auth0_id: 'auth0_3',
      location_id: 4,
      title: 'Cooking Workshop',
      type: 'Workshop',
      image: 'https://example.com/cooking-workshop.jpg',
      date: '2023-12-08',
      time: '17:30:00',
      venue: 'Culinary School',
      attendees: '6/10',
      description:
        'Join us for a hands-on cooking workshop and learn to prepare delicious dishes. Explore different cuisines and techniques.',
    },
  ]

  return (
    isAuthenticated && (
      <div className="h-screen">
        <div className="w-3/4 text-center text-4xl font-bold pl-7 mt-2 mb-6">
          <h1 className="font-semibold text-2xl text-start">Activities</h1>
          <h2 className="font-light text-base text-start">
            Check out activities in your neighbourhood
          </h2>
        </div>
        <ActivityPost />
      </div>
    )
  )
}

export default ActivitiesPage
