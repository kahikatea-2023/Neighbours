import { Outlet } from 'react-router-dom'

// import Header from './Header/Header'
import Weather from '../Weather'

function AppLayout() {
  return (
    <div>
      {/* <Header /> */}
      <section className="main">
        <div className="left-top">
          <Weather />
        </div>
      </section>
      <Outlet />
    </div>
  )
}

export default AppLayout
