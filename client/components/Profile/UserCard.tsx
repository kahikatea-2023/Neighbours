function UserCard() {
  const userInfo = {
    first_name: 'Mary',
    last_name: 'Anne',
    location: 'Newmarket',
    posts: '30',
    comments: '149',
    pronouns: 'She/her',
    bio: 'Call me Doreamon',
    user_image: 'public/images/userImage.jpg',
  }

  return (
    <div className="bg-primary rounded-lg text-lightPink font-extralight flex flex-col items-center">
      <img
        src={userInfo.user_image}
        alt={userInfo.first_name}
        className="w-28 rounded-full"
      />
      <p className="font-normal">
        {userInfo.first_name} {userInfo.last_name}
      </p>
      <p>{userInfo.location} Neighbour</p>
      <div className="flex justify-between">
        <p>
          <a href="/my-posts" className="font-normal">
            {userInfo.posts}
          </a>{' '}
          Posts
        </p>
        <p>
          <a href="/my-posts" className="font-normal">
            {userInfo.comments}
          </a>{' '}
          Comments
        </p>
      </div>
    </div>
  )
}

export default UserCard
