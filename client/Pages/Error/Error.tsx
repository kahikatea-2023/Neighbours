import GoHomeButton from '../../components/GoHomeButton/GoHomeButton'

function Error() {
  return (
    <div className="h-screen">
      <img
        src="/public/images/error.png"
        alt="404"
        width="150px"
        className="m-auto mt-20 mb-6"
      />
      <div className="font-light text-center w-5/6 m-auto">
        <p>
          Sorry, you do not have access to Neighbours as an unauthorized user.
        </p>
        <p className="pt-2">Please log in to continue.</p>
      </div>
      <div className="flex mt-6 justify-center">
        <GoHomeButton />
      </div>
    </div>
  )
}

export default Error
