import EditButton from "../Buttons/EditButton/EditButton"

function Profile () {
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
    <>
    <div>
      <div className="border-b-1 border-slate-400 flex pb-3 pt-6">
        <div className="px-5">
          <img src="public/images/name-icon.png" alt="name" className="w-10"/>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-slate-500 font-light pb-1">First Name</p>
            <p className="font-light pb-1">{userInfo.first_name}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-slate-500 font-light pb-1">Last Name</p>
            <p className="font-light">{userInfo.last_name}</p>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-slate-400 flex py-3">
        <div className="px-5">
          <img src="public/images/pronouns-icon.png" alt="pronouns" className="w-10"/>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-slate-500 font-light pb-1">Pronouns</p>
            <p className="font-light pb-1">{userInfo.pronouns}</p>
          </div>
        </div>
      </div>
      <div className=" flex py-3">
        <div className="px-5">
          <img src="public/images/bio-icon.png" alt="pronouns" className="w-10"/>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-slate-500 font-light pb-1">Bio</p>
            <p className="font-light pb-1">{userInfo.bio}</p>
          </div>
        </div>
      </div>
      <EditButton />
    </div>
    </>
  )
}

export default Profile