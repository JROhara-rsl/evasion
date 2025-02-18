import React from 'react'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/footer'

const Layout = () => {
  return (
    <main>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer />
    </main>
  )
}

export default Layout