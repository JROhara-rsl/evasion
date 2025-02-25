import React from 'react'
import { Link } from 'react-router';

// CSS
import './footer.scss';

// Component
import Logo2 from '../logo/Logo2';


const Footer = () => {
  return (
    <footer className='container-white'>
      <div className="border-nav">
        <Logo2 />
        <div>
          <nav className="display-nav">
            <div>
              <Link to='/'><div>Home</div></Link>
              <ul> 
                <li>Nos produits</li>
                <li>Nouveau produit</li>
                <li>Notre philosophie</li>
                <li>Nos huiles essentielles</li>
              </ul>
            </div>
            <div>
              <Link to='/shop'><div>Shop</div></Link>
              <ul> 
                <li>Nos produits</li>
              </ul>
            </div>
            <div>
              <Link to='/nos-gammes'><div>Nos gammes</div></Link>
              <ul> 
                <li>Les gammes
                  <ul>
                    <li>Bretagne</li>
                    <li>Corse</li>
                    <li>Côte d’Azure</li>
                    <li>Provence</li>
                  </ul>
                </li>
                <li>Les incontournables</li>
              </ul>
            </div>
            <div>
              <Link to='/huiles-essentielles'><div>Huiles essentielles</div></Link>
              <ul> 
                <li>Nos produits</li>
                <li>Notre savoir-faire</li>
                <li>S’évader</li>
                <li>Nos engagements</li>
                <li>Actualité</li>
              </ul>
            </div>
            <div>
              <Link to='/contact'><div>Contact</div></Link> 
              <ul> 
                <li>Nous contacter</li>
                <li>Notre adresse</li>
              </ul> 
            </div>           
          </nav>
          <ul id="container-copyright">
            <li>Mentions légales</li>
            <li>évasion © copyright 2025</li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer