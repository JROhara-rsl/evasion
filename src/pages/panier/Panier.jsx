import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import supabase from "../../supabase.js"

// CSS
import '../shop/shop.scss'
import './panier.scss'

// Component
import Button from '../../components/button/Button';
import ButtonPanier from '../../components/button/ButtonPanier';
import ButtonPicto from '../../components/button/ButtonPicto';

// Context
import { usePanier } from "../../context/PanierContext";

const Panier = () => {
    const [total, setTotal] = useState(0);
    const { panier } = usePanier();

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
    }, [panier]);    
    

  return (
    <div id="page-panier">
            <title>Votre panier - Évasion</title>
            <meta name='description' content="Sélectionnez votre commande et finalisez l'achat." />
        <div className="container">
            <header>
                <h1 className=''>Votre panier</h1>
                <span id="link-breadcrumb" className=''><ButtonPicto name='Retour au shop' lien='/shop' img={`${import.meta.env.BASE_URL}/assets/picto/picto-back.svg`}/><Link to='/'>Évasion</Link>/<Link to='/shop'>Shop</Link>/<Link to='/panier'>panier</Link></span>
            </header>
            <div className='container-grid'>
                <div id="container-commande" className='grid6'>
                    {items.map((item) => (
                        panier[item.uuid] && (
                        <div key={item.uuid} className={'container-product product-' + item.categorieId}   >
                            <div className='border'>
                                <div className='prix'>{item.prix}€</div>
                            </div>
                            <div  className='container-product-meta'>
                            <Link to={'/shop/item/'+(item.categorieId)+'/'+(item.uuid)} className='product-image'>
                                <img alt={item.name} src={`${import.meta.env.BASE_URL}/assets/img/'+(item.img)+'-350px.png`} />
                            </Link>
                            <div className='container-meta'>
                                <h3 className='title-post-item'>{item.name}</h3>
                                <div className='meta'>
                                    <span>{item.gamme}</span>
                                    <span>{item.format}ml</span>
                                    <span>Quantité : {panier[item.uuid]?.quantite || 0}</span>
                                </div>
                                <hr></hr>
                                <p>Huile de douche aux huiles essentielles avec des notes d’agrumes.</p>
                                <div className="container-double">
                                    <ButtonPanier name='Retirer du panier' action="delete" uuid={item.uuid} />
                                    <div className="container-double container-more-less">
                                        <ButtonPanier name='-' action="less" uuid={item.uuid} />
                                        <ButtonPanier name='+' action="add" uuid={item.uuid} />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        )
                    ))}
                </div>
                <div id="container-recap" className='grid3 container-flex-texte'>
                    <h2 className='title-H'>Récapitulatif</h2>
                    <ul>
                        {items.map((item) => (
                            panier[item.uuid] && (
                                <li key={item.uuid}>
                                    <span>{panier[item.uuid] && panier[item.uuid].quantite}x - {item.name} {item.gamme} - {item.format}ml</span> 
                                    <span>{panier[item.uuid] ? item.prix*panier[item.uuid].quantite : item.prix }€</span>
                                </li>
                            )
                        ))}
                    </ul>
                    <div id="text-total">= {total}€</div>
                    <Button name='Commandez' lien='/panier/commande' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Panier