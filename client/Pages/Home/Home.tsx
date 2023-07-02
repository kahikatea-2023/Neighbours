import LoginButton from '../../components/LoginButton/LoginButton'
import RegisterButton from '../../components/RegisterButton/RegisterButton'
import Slogan from '../../components/UI/Slogan/Slogan'

function Home() {
  return (
    <div className="pt-44 pl-4 flex flex-col gap-4 h-screen">
      <Slogan />
      <div className="flex gap-6 pt-14 place-content-center">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  )
}

export default Home
