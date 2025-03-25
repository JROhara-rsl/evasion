import { Link } from 'react-router';

// CSS
import '../shop/shop.scss'
import './panier.scss'

// Component
import Button from '../../components/button/Button';
import ButtonPanier from '../../components/button/ButtonPanier';
import ButtonPicto from '../../components/button/ButtonPicto';

const Commande = () => {
  return (
    <div  id="page-commande">
            <title>Votre commande - Évasion</title>
            <meta name='description' content="Confirmez votre commande et finalisez l'achat." />
        <div className="container">
            <header>
                <h1 className=''>Votre commande</h1>
                <span id="link-breadcrumb" className=''>
                  <ButtonPicto name='Retour au shop' lien='/shop' img={`${import.meta.env.BASE_URL}/assets/picto/picto-back.svg`}/>
                  <Link to='/'>Évasion</Link>/<Link to='/shop'>Shop</Link>/<Link to='/panier'>panier</Link>/<Link to='/panier/commande'>commande</Link>
                </span>
            </header>
            <div className='container-grid'>

            </div>
        </div>
    </div>
  )
}

export default Commande