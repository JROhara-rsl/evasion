import React from 'react'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/footer'
import NavUser from './nav-user/navUser'

const Layout = () => {
  return (
    <main>
        <Header />
        <NavUser />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout