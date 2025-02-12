import React from 'react'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/footer'

const Layout = () => {
  return (
    <main>
        <Header />
        <section>
            <Outlet />
        </section>
        <Footer />
    </main>
  )
}

export default Layout