import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import supabase from "../../supabase.js"

// CSS
import './shop.scss'

// JS
import functionProduit from './functionProduit.js'

// Component
import Button from '../../components/button/Button'
import ButtonToggle from '../../components/button/ButtonToggle.jsx';
import ItemProduit from './ItemProduit.jsx';

const Shop = () => {
  const [items, setItems] = useState([]);
  const [categorieOn, setCategorieOn] = useState(false);
  const [gammeOn, setGammeOn] = useState(false);

  const [categorie, setCategorie] = useState({
    gelDouche: true,
    huile: true,
    huileSatinee: true,
    creme: true,
  })
  const [gamme, setGamme] = useState({
    bretagne: true,
    corse: true,
    coteAzur: true,
    provence: true,
  })

  const [categorieActive, setCategorieActive] = useState(  ['gelDouche', 'huile', 'huileSatinee', 'creme']  );
  const [gammeActive, setGammeActive] = useState(  ['bretagne', 'corse', 'coteAzur', 'provence']  );
  

  useEffect(() => {
    const fetchItem = async () => {
      try{
        const {data, status, error} = await supabase
                                      .from("produits")
                                      .select("*")
                                      .in("categorieId", categorieActive)
                                      .in("gammeId", gammeActive);
        if(status === 200) setItems(data)          

      } catch(error) {
        console.log("Error fetching: ", error);
      }
    }
    fetchItem()
  }, [categorieActive, gammeActive]);
  
  const handleToggle = (filtre, name, value) => {
    if(filtre === 'categorie') {
      setCategorie((prevCategorie) => {
        // Si c'est le premier clic, on désactive tout sauf le bouton cliqué
        if (!categorieOn) {
          setCategorieOn(true); // Active le mode filtre des cagtégories
          return Object.keys(prevCategorie).reduce((acc, key) => {
            acc[key] = key === name; // Seul le bouton cliqué est `true`
            return acc;
          }, {});
        }
    
        // Sinon, on toggle juste l'état du bouton cliqué
        return { ...prevCategorie, [name]: !prevCategorie[name] };
      });
    }
    if (filtre === 'gamme') {
      setGamme((prevGamme) => {
        // Si c'est le premier clic, on désactive tout sauf le bouton cliqué
        if (!gammeOn) {
          setGammeOn(true); // Active le mode filtre des gammes
          return Object.keys(prevGamme).reduce((acc, key) => {
            acc[key] = key === name; // Seul le bouton cliqué est `true`
            return acc;
          }, {});
        }
    
        // Sinon, on toggle juste l'état du bouton cliqué
        return { ...prevGamme, [name]: !prevGamme[name] };
      });
    }
  };

  // Permet de voir les mises à jour en temps réel
  useEffect(() => {
    setCategorieActive(
      Object.entries(categorie)
            .filter(([key, value]) => value === true)
            .map(([key]) => key)
    );
  }, [categorie]); 

  useEffect(() => {
    setGammeActive(
      Object.entries(gamme)
            .filter(([key, value]) => value === true)
            .map(([key]) => key)
    );
  }, [gamme]); 

  return (
    <div id="page-shop">  
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
                  <ButtonToggle filtre="categorie" placeHolder='Gel douche' name="gelDouche" onToggle={handleToggle}/>
                  <ButtonToggle filtre="categorie" placeHolder='Huile douche' name="huile" onToggle={handleToggle}/>
                  <ButtonToggle filtre="categorie" placeHolder='Huile satinée'  name="huileSatinee" onToggle={handleToggle}/>
                  <ButtonToggle filtre="categorie" placeHolder='Crème'  name="creme" onToggle={handleToggle}/>
                </ul>
              </div>
              <div className='liste-filter'>
                <h2 className='name-category'>Nos gammes</h2>
                <ul>
                  <ButtonToggle filtre="gamme" placeHolder='Bretagne'  name="bretagne" onToggle={handleToggle}/>
                  <ButtonToggle filtre="gamme" placeHolder='Corse'  name="corse" onToggle={handleToggle}/>
                  <ButtonToggle filtre="gamme" placeHolder="Côte d'Azur"  name="coteAzur" onToggle={handleToggle}/>
                  <ButtonToggle filtre="gamme" placeHolder='Provence'  name="provence" onToggle={handleToggle}/>
                </ul>
              </div>
            </div>
            <div id="container-shop">
              {items.map(item => 
                <ItemProduit 
                  key={item.id} 
                  id={item.id}
                  uudid={item.uuid}
                  categorieId={item.categorieId}
                  name={item.name} 
                  uuid={item.uuid}
                  lien={functionProduit.urlProduit(item.categorieId, item.uuid)}
                  gamme={item.gamme}
                  img={item.img}
                  prix={item.prix}
                  format={item.format}
                  chapeau={item.chapeau}
                />)}
            </div>
      </div>
    </div>
  )
}

export default Shop

