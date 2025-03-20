import React, { useState } from 'react'

// CSS
import '../../scss/custom.scss'
import './nav-user.scss'

// Component
import ButtonPicto from '../button/ButtonPicto';
import Search from '../search/Search';

const NavUser = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  const toSearch = (e) => { 
    e.preventDefault();     
    setActiveSearch(true)
  }

  const searchEnd = (event) => {
    event.preventDefault();
    setActiveSearch(false)
  }

  return (
    <>
      <Search active={activeSearch ? true : false} click={searchEnd}/>
      <div id='nav-user'>
        <ButtonPicto name='Compte utilisateur'      lien='/compte' img='http://localhost:5173/public/assets/picto/picto-user.svg'/>
        <ButtonPicto name="Panier de l'utilisateur" lien='/panier' img='http://localhost:5173/public/assets/picto/picto-panier.svg'/>
        <ButtonPicto name='Rechercher' click={toSearch} img='http://localhost:5173/public/assets/picto/picto-search.svg'/>
      </div>
    </>
  )
}

export default NavUser