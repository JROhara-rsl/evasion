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
          <Link to='/nos-gammes'><div>Nos gammes</div></Link>
          <Link to='/huiles-essentielles'><div>Huiles essentielles</div></Link>
          <Link to='/actualite'><div>Actualité</div></Link> 
          <Link to='/contact'><div>Contact</div></Link>
        </nav>
    </header>
  )
}

export default Header