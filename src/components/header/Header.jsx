import React, { useState } from 'react'
import { Link } from 'react-router';

// CSS
import './header.scss';

// Component
import Logo from '../logo/Logo';

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleClick = (event) => {
    //event.preventDefault();
    if(!burgerMenu) { 
      setBurgerMenu(true) 
    } else {
      setBurgerMenu(false) 
    }
    console.log(burgerMenu);
  }
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
            <svg id="button-burger" onClick={handleClick} width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12H27.5M2 2H27.5M2 22H27.5" />
            </svg>
          </div>
        </nav>
        <div id="container-burger-menu" className={burgerMenu ? 'activate' : ''}>
            <Link onClick={handleClick} to='/'><div>Home</div></Link>
            <hr></hr>
            <Link onClick={handleClick} to='/shop'><div>Shop</div></Link>
            <hr></hr>
            <Link onClick={handleClick} to='/nos-gammes'><div>Nos gammes</div></Link>
            <hr></hr>
            <Link onClick={handleClick} to='/huiles-essentielles'><div>Huiles essentielles</div></Link>
            <hr></hr>
            <Link onClick={handleClick} to='/contact'><div>Contact</div></Link>
        </div>
    </header>
  )
}

export default Header