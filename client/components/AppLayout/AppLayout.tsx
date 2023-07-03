import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Address from '../Address/Address'
import Map from '../Map/Map'

function AppLayout() {
  return (
    <div>
      <section className="main">
        <div className="left-top">
          <Header />
          <Map />
          <Address />
        </div>
      </section>
      <Outlet />
    </div>
  )
}

export default AppLayout
