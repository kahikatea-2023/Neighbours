import Post from "../UI/Post/Post";

function ActivityPost() {
  const actPosts = [
    {
      img: '../../public/images/cockroach.png',
      title: 'Catch a cockroach PLZ!!!!!',
      description: 'Please anyone can come ASAP!',
      time: '6pm',
      date: '06/July',
      location: 'Dev Academy',
      price: 'free'
    },
    {
      img: '',
      title: 'Catch a cockroach PLZ!!!!!',
      description: 'Please anyone can come ASAP!',
      time: '6pm',
      date: '06/July',
      location: 'Dev Academy',
      price: 'free'
    }

  ]
  return (
    <Post>
      <img className="h-40" src={actPosts[0].img} alt="" />

    </Post>
  )

}

export default ActivityPost