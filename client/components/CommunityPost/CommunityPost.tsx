import { Link, useParams } from 'react-router-dom'
import Post from '../UI/Post/Post'

function CommunityPost() {
  const { locationId } = useParams()

  // todo: get one post from classified and activities by random
  // hardcoded below

  const actPost = {
    user_auth0_id: 3456,
    location_id: 2,
    title: 'Zumba Class',
    image: '../../public/images/zumba.png',
    date: '06/July',
  }

  const classifiedPost = {
    user_auth0_id: 12513718,
    location_id: 1,

    title: 'Catch a cockroach PLZ!!!!!',
    image: '../../public/images/cockroach.png',
    date: '06/July',
    time: '6pm',
  }

  const marketPost = {
    user_auth0_id: 114,
    location_id: 1,

    title: `Ahmad's Banana for $100`,
    image: '../../public/images/banana.png',
    date: '06/July',
    time: '6pm',
  }

  return (
    <>
      <div>
        <Link
          className="mx-5 flex justify-end text-base hover:text-primary hover:underline-offset-4 hover:underline"
          to={`/${Number(locationId)}/activities`}
        >
          View All Activities
        </Link>
      </div>
      <Post
        key={actPost.user_auth0_id}
        title={actPost.title}
        className="text-black"
        imgSource={actPost.image}
        path={`/${Number(locationId)}/activities/${actPost.user_auth0_id}`}
        date={actPost.date}
      />
      <div>
        <Link
          className="mx-5 flex justify-end text-base hover:text-primary hover:underline-offset-4 hover:underline"
          to={`/${Number(locationId)}/classifieds`}
        >
          View All Classification
        </Link>
      </div>
      <Post
        key={classifiedPost.user_auth0_id}
        title={classifiedPost.title}
        className="text-black"
        path={`/${Number(locationId)}/classifieds/${
          classifiedPost.user_auth0_id
        }`}
        imgSource={classifiedPost.image}
        date={classifiedPost.date}
      />
      <div>
        <Link
          className="mx-5 flex justify-end text-base hover:text-primary hover:underline-offset-4 hover:underline"
          to={`/${Number(locationId)}/classifieds`}
        >
          View All Market
        </Link>
      </div>
      <Post
        key={marketPost.user_auth0_id}
        title={marketPost.title}
        className="text-black"
        path={`/${Number(locationId)}/classifieds/${marketPost.user_auth0_id}`}
        imgSource={marketPost.image}
        date={marketPost.date}
      />
    </>
  )
}

export default CommunityPost
