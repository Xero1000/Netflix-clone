import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        {/* NavBar is visible on all pages except TrailerPage */}
        <NavBar />
        <Outlet />
    </>
  )
}

export default Layout