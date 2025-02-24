import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import supabase from "../../supabase.js"

// CSS
import '../shop/shop.scss'
import './panier.scss'


// Component
import Button from '../../components/button/Button';
import ButtonPanier from '../../components/button/ButtonPanier';
import ButtonPicto from '../../components/button/ButtonPicto';

const Panier = () => {
    const [total, setTotal] = useState(0);

    // Importer dans le panier du localStorage 
    const [panier, setPanier] = useState(() => {
        const saved = localStorage.getItem('panier');
        if (saved !== null) {
            try {
                return JSON.parse(saved);
            } catch {
                return null;
            }
        }
        return null;
    })    

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItem = async () => {
          try{          
            if (!panier || panier.length === 0) return; // Vérifie que le panier n'est pas vide
            const uuidList = Object.keys(panier); // Récupère les UUIDs sous forme de tableau
            if (uuidList.length === 0) return;

            const {data, status, error} = await supabase
                                          .from("produits")
                                          .select("*")
                                          .in("uuid", uuidList);
            if(status === 200) setItems(data)          
            
                const total = data.reduce((acc, item) => acc + item.prix * panier[item.uuid].quantite, 0); // Addition des prix avec la quantité
                setTotal(total);

          } catch(error) {
            console.log("Error fetching: ", error);
          }
        }
        fetchItem()
    }, []);

   



  return (
    <>
        <Helmet>
            <title>Votre panier - Évasion</title>
            <meta name='description' content="Sélectionnez votre commande et finalisez l'achat." />
        </Helmet>
        <div className="container">
            <header className='container-grid'>
                <span id="link-breadcrumb" className='grid6'><ButtonPicto name='Retour au shop' lien='/shop' img='../../public/assets/picto/picto-back.svg'/><Link to='/'>Évasion</Link>/<Link to='/shop'>Shop</Link>/<Link to='/panier'>panier</Link></span>
                <h1 className='grid3d'>Votre panier</h1>
            </header>
            <div className='container-grid'>
                <div id="container-commande" className='grid6'>
                    {items.map((item) => (
                        <div key={item.uuid} className={'container-product product-' + item.categorieId}   >
                            <div className='border'>
                                <div className='prix'>{item.prix}€</div>
                            </div>
                            <div  className='container-product-meta'>
                            <Link to={'/shop/item/'+(item.uuid)} className='product-image'>
                                <img alt={item.name} src={ 'http://localhost:5173/public/assets/img/'+(item.img)} />
                            </Link>
                            <div className='container-meta'>
                                <h3 className='title-post-item'>{item.name}</h3>
                                <div className='meta'>
                                <span>{item.gamme}</span>
                                <span>{item.format}ml</span>
                                </div>
                                <hr></hr>
                                <p>Huile de douche aux huiles essentielles avec des notes d’agrumes.</p>
                                <ButtonPanier name='Retirer du panier' delete="true" uuid={item.uuid}/>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="container-recap" className='grid3 display-flex-texte'>
                    <h2 className='title-H'>Récapitulatif</h2>
                    <ul>
                        {items.map((item) => (
                            <li key={item.uuid}><span>{panier[item.uuid].quantite}x - {item.name} {item.gamme} - {item.format}ml</span> <span>{item.prix*panier[item.uuid].quantite}€</span></li>
                        ))}
                    </ul>
                    <div id="text-total">= {total}€</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Panier