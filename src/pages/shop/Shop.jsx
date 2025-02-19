import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import supabase from "../../supabase.js"

// CSS
import './shop.scss'

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try{
        const {data, error} = await supabase.from("produits").select("*");
        setItems(data);
        
      } catch(error) {
        console.log("Error fetching: ", error);
      }
    }
    fetchItem()
  }, []);
  
  
  return (
    <div>    
      <Helmet>
        <title>Shop Évasion - cosmétique & hygiène</title>
        <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
      </Helmet>
      <div className="container">
            <h1>Shop</h1>
            <div className="container-shop">
              {items.map((item) => (
                <div className='container-product'>
                  <div className='border'></div>
                  <div key={item.uuid} className='container-product-meta'>
                    <Link to={'/shop/item/'+(item.uuid)}>
                      <img alt={item.name} src={ 'http://localhost:5173/public/assets/img/'+(item.img)} />
                    </Link>
                    <div className='container-meta'>
                      <h3>{item.name}</h3>
                      <div className='meta'>
                        <span>{item.gamme}</span>
                        <span>{item.format}ml</span>
                      </div>
                      <p>Huile de douche aux huiles essentielles avec des notes d’agrumes.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </div>
  )
}

export default Shop