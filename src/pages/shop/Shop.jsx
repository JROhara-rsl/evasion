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

  const [categorieOk, setCategorieOk] = useState(  ['gelDouche', 'huile', 'huileSatinee', 'creme']  );
  const [gammeOk, setGammeOk] = useState(  ['bretagne', 'corse', 'coteAzur', 'provence']  );
  

  useEffect(() => {
    const fetchItem = async () => {
      try{
        const {data, status, error} = await supabase
                                      .from("produits")
                                      .select("*")
                                      .in("categorieId", categorieOk)
                                      .in("gammeId", gammeOk);
        if(status === 200) setItems(data)          

      } catch(error) {
        console.log("Error fetching: ", error);
      }
    }
    fetchItem()
  }, [categorieOk, gammeOk]);
  
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
    setCategorieOk(
      Object.entries(categorie)
            .filter(([key, value]) => value === true)
            .map(([key]) => key)
    );
  }, [categorie]); 

  useEffect(() => {
    setGammeOk(
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
                  <ButtonToggle filtre="categorie" name='Gel douche' value="gelDouche" onToggle={handleToggle}/>
                  <ButtonToggle filtre="categorie" name='Huile douche' value="huile" onToggle={handleToggle}/>
                  <ButtonToggle filtre="categorie" name='Huile satinée'  value="huileSatinee" onToggle={handleToggle}/>
                  <ButtonToggle filtre="categorie" name='Crème'  value="creme" onToggle={handleToggle}/>
                </ul>
              </div>
              <div className='liste-filter'>
                <h2 className='name-category'>Nos gammes</h2>
                <ul>
                  <ButtonToggle filtre="gamme" name='Bretagne'  value="bretagne" onToggle={handleToggle}/>
                  <ButtonToggle filtre="gamme" name='Corse'  value="corse" onToggle={handleToggle}/>
                  <ButtonToggle filtre="gamme" name="Côte d'Azur"  value="coteAzur" onToggle={handleToggle}/>
                  <ButtonToggle filtre="gamme" name='Provence'  value="provence" onToggle={handleToggle}/>
                </ul>
              </div>
            </div>
            <div id="container-shop">
              {items.map(item => 
                <ItemProduit 
                  key={item.id} 
                  id={item.id}
                  name={item.name} 
                  uuid={item.uuid}
                  lien={functionProduit.urlProduit(item.name, item.uuid)}
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

