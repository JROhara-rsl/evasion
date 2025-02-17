import React from 'react'
import { Link } from 'react-router';

// CSS
import '../../scss/custom.scss'
import './header.scss';

// Component
import Logo from '../logo/Logo';



const Header = () => {
  return (
    <header>
        <Logo />
        <nav>
          <div className="border-nav display-nav">
            <Link to='/'><div>Home</div></Link>
            <Link to='/shop'><div>Shop</div></Link>
            <Link to='/nos-gammes'><div>Nos gammes</div></Link>
            <Link to='/huiles-essentielles'><div>Huiles essentielles</div></Link>
            <Link to='/actualite'><div>Actualité</div></Link> 
            <Link to='/contact'><div>Contact</div></Link>
          </div>
        </nav>
    </header>
  )
}

export default Header