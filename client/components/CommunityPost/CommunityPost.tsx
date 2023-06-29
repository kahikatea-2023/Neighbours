import Post from "../UI/Post/Post";

function CommunityPost() {

  // todo: get one post from classified and activities by random
  // hardcoded below

  const actPost = {
    user_auth0_id: 3456,
    location_id: 2,
    title: 'Zumba Class',
    image: '../../public/images/cockroach.png',
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


  return (
    <>
      <Post key={actPost.user_auth0_id} title={actPost.title} className="text-black" imgSource={actPost.image} date={actPost.date} />
      <Post key={classifiedPost.user_auth0_id} title={classifiedPost.title} className="text-black" imgSource={classifiedPost.image} date={classifiedPost.date} />
    </>
  )

}

export default CommunityPost