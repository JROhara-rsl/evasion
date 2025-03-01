import React from 'react'
import { Link } from 'react-router';

// CSS
import '../../scss/custom.scss'
import './nav-user.scss'

// Component
import ButtonPicto from '../button/ButtonPicto';

const NavUser = () => {
  return (
    <div id='nav-user'>
        <ButtonPicto name='Compte utilisateur'      lien='/compte' img='http://localhost:5173/public/assets/picto/picto-user.svg'/>
        <ButtonPicto name="Panier de l'utilisateur" lien='/panier' img='http://localhost:5173/public/assets/picto/picto-panier.svg'/>
        <ButtonPicto name='Rechercher' img='http://localhost:5173/public/assets/picto/picto-search.svg'/>
    </div>
  )
}

export default NavUser