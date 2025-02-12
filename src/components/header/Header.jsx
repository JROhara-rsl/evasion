import React from 'react'
import { Link } from 'react-router';
import './header.scss';

const Header = () => {
  return (
    <header>
        <div id="logo">

        </div>
        <nav>
          <Link to='/'><div>Home</div></Link>
          <Link to='/shop'><div>Shop</div></Link>
        </nav>
    </header>
  )
}

export default Header