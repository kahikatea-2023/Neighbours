import Post from "../UI/Post/Post";

function ClassifiedPost() {
  const classifiedPosts = [
    {
      id: 1,
      user_auth0_id: 12345,
      location_id: 2,
      title: 'Catch a cockroach PLZ!!!!!',
      type: "",
      image: '../../public/images/cockroach.png',
      date: '06/July',
      time: '6pm',
      venue: 'Dev Academy',
      description: 'Please anyone can come ASAP!'
    },
    {
      id: 2,
      user_auth0_id: 12345,
      location_id: 2,
      title: 'Catch another cockroach PLZ!!!!!',
      type: "",
      image: '../../public/images/cockroach.png',
      date: '06/July',
      time: '6pm',
      venue: 'Dev Academy',
      description: 'Please anyone can come ASAP!'

    },
    {
      id: 3,
      user_auth0_id: 12345,
      location_id: 2,
      title: 'Help! Catch cockroach PLZ!!!!!',
      type: "",
      image: '../../public/images/cockroach.png',
      date: '06/July',
      time: '6pm',
      venue: 'Dev Academy',
      description: 'Please anyone can come ASAP!'
    }

  ]

  const classifiedComment = [
    {
      classified_request_id: 1,
      user_auth0_id: 12345,
      user_name: 'Mary the lamb',
      time: '18:02',
      comment: "I'll come right now.",
    },
    {
      classified_request_id: 1,
      user_auth0_id: 1565,
      user_name: 'Tom the boy',
      time: '18:05',
      comment: "I can come to.",
    },
    {
      classified_request_id: 2,
      user_auth0_id: 1565,
      user_name: 'Tom the boy',
      time: '18:06',
      comment: "Hew, so many cockroach.",
    },

  ]


  return (
    <>
      {classifiedPosts.map((post) => {

        const postCommentArray = classifiedComment.filter(comment => comment.classified_request_id === post.id)
        const numberOfComment = postCommentArray.length
        return (
          < Post
            key={post.id}
            title={post.title}
            path={`/newmarket/classifieds/${post.user_auth0_id}`}
            className="text-black"
            imgSource={post.image}
            date={post.date}
            comment={numberOfComment} />)
      }
      )}
    </>
  )

}

export default ClassifiedPost