import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

// CSS
import './nosgammes.scss'

// Component
import ButtonToggle from '../../components/button/ButtonToggle';
import Button from '../../components/button/Button';
import Newsletter from '../../components/newsletter/Newsletter';
const SliderGamme = React.lazy(() => import('../../components/slider/SliderGamme'));
  
const NosGammes = () => {
  const [scrollY, setScrollY] = useState(0);
  
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="page-nos-gammes">
      <Helmet>
        <title>Nos gammes cosmétiques Évasion</title>
        <meta name='description' content="Évasion vous propose des produits cosmétiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France." />
      </Helmet>
      <section className="container container-first">
          <h1 className='title-XH'>Nos gammes</h1>
      <div id="header-gammes" className='container container-grid'>
        <figure className={`container-image pre-anim ${scrollY < '700' ? 'translateT' : ''}`} >
          <figcaption>Corse</figcaption>
          <img alt="" src="../../assets/img/photos/maillot-rayure-orange-1000px.jpg"></img>
        </figure>
        <figure className={`container-image pre-anim ${scrollY < '700' ? 'translateB' : ''}`}>
          <figcaption>Côte d'azur</figcaption>
          <img alt="" src="../../assets/img/photos/maillot-jaune-azur-1000px.jpg"></img>
        </figure>
        <figure className={`container-image pre-anim ${scrollY < '700' ? 'translateT' : ''}`}>
          <figcaption>Provence</figcaption>
          <img alt="" src="../../assets/img/photos/soiree-plaid-1000px.jpg"></img>
        </figure>
        <figure className={`container-image pre-anim ${scrollY < '700' ? 'translateB' : ''}`}>
          <figcaption>Bretagne</figcaption>
          <img alt="" src="../../assets/img/photos/homme-torse-nue-ciel-1000px.jpg"></img>
        </figure>
        <div id='container-filter'>
            <div className='liste-filter'>
              <h2 className='name-category'>Nos produits</h2>
              <ul>
                <ButtonToggle placeHolder='Gel douche' value="gelDouche"/>
                <ButtonToggle placeHolder='Huile' value="huile"/>
                <ButtonToggle placeHolder='Huile satinée'  value="huileSatinee"/>
                <ButtonToggle placeHolder='Crème'  value="creme"/>
              </ul>
            </div>
        </div>
      </div>
      <Button name="Découvrir nos produits" lien='/shop'/>
      </section>
      <section id="container-slider-gammes">
        <SliderGamme />
      </section>
      <Newsletter/>
    </div>
  )
}

export default NosGammes