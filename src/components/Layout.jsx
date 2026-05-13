import 'react'

import Navbar from './Navbar'
// import Footer from './Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className='main-content'>
        <Outlet />
      </div>

      {/* Footer */}
      {/* <Footer /> */}

    </>
  )
}

export default Layout