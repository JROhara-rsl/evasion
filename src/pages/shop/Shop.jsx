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
        const {data, status, error} = await supabase.from("produits").select("*");
        if(status === 200) setItems(data)
        
      } catch(error) {
        console.log("Error fetching: ", error);
      }
    }
    fetchItem()
  }, []);
  
  
  return (
    <>  
      <Helmet>
        <title>Shop Évasion - cosmétique & hygiène</title>
        <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
      </Helmet>
      <div id="container-section-shop" className="container container-grid">
            <h1>Shop</h1>
            <div id='container-filter'>
              <div className='liste-filter'>
                <h2 className='name-category'>Nos produits</h2>
                <ul>
                  <li>Gel douche</li>
                  <li>Huile</li>
                  <li>Huile satinée</li>
                  <li>Crème</li>
                </ul>
              </div>
              <div className='liste-filter'>
                <h2 className='name-category'>Nos gammes</h2>
                <ul>
                  <li>Bretagne</li>
                  <li>Corse</li>
                  <li>Côte d'Azur</li>
                  <li>Provence</li>
                </ul>
              </div>
            </div>
            <div id="container-shop">
              {items.map((item) => (
                <div key={item.uuid} className='container-product'>
                  <div className='border'></div>
                  <div  className='container-product-meta'>
                    <Link to={'/shop/item/'+(item.uuid)}>
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </>
  )
}

export default Shop