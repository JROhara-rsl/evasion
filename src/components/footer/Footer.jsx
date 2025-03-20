import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

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
                <li><Link to='/#sectionIntroProduit'>Nos produits</Link></li>
                <li><Link to='/#sectionTemps'>Notre philosophie</Link></li>
                <li><Link to='/#sectionNouveau'>Nouveau produit</Link></li>
                <li><Link to='/#sectionHuilesEssentielles'>Nos huiles essentielles</Link></li>
              </ul>
            </div>
            <div>
              <Link to='/shop'><div>Shop</div></Link>
              <ul> 
                <li><Link to='/#container-section-shop'>Nos produits</Link></li>
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
                <li><Link to='/huiles-essentielles#page-huiles-essentielles'>Nos produits</Link></li>
                <li><Link to='/huiles-essentielles#sectionEvader'>S’évader</Link></li>
                <li><Link to='/huiles-essentielles#sectionHuilesEssentielles'>Notre savoir-faire</Link></li>
                <li><Link to='/huiles-essentielles'>Nos engagements</Link></li>
                <li><Link to='/actualite#page-actualite'>Actualité</Link></li>
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