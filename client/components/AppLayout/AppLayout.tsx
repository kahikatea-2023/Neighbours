import { Outlet } from 'react-router-dom'

// import Header from './Header/Header'
import Weather from '../Weather'
import Header from '../Header/Header'

function AppLayout() {
  return (
    <div>
      <section className="main">
        <div className="left-top">
          <Header />
          <Weather />
        </div>
      </section>
      <Outlet />
    </div>
  )
}

export default AppLayout
