import React from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

// CSS
import './nosgammes.scss'

// Component
import ButtonToggle from '../../components/button/ButtonToggle';
import Button from '../../components/button/Button';
import SliderGamme from '../../components/slider/SliderGamme';
import Newsletter from '../../components/newsletter/Newsletter'

const NosGammes = () => {
  return (
    <div id="page-nos-gammes">
      <Helmet>
        <title>Nos gammes cosmétiques Évasion</title>
        <meta name='description' content="Évasion vous propose des produits cosmétiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France." />
      </Helmet>
      <section className="container container-first">
          <h1 className='title-XH'>Nos gammes</h1>
      <div id="header-gammes" className='container container-grid'>
        <div className='container-image'>
          <img alt="" src="../../public/assets/img/photos/maillot-rayure-orange-1000px.jpg"></img>
        </div>
        <div className='container-image'>
          <img alt="" src="../../public/assets/img/photos/maillot-jaune-azur-1000px.jpg"></img>
        </div>
        <div className='container-image'>
          <img alt="" src="../../public/assets/img/photos/soiree-plaid-1000px.jpg"></img>
        </div>
        <div className='container-image'>
          <img alt="" src="../../public/assets/img/photos/homme-torse-nue-ciel-1000px.jpg"></img>
        </div>
        <div id='container-filter'>
            <div className='liste-filter'>
              <h2 className='name-category'>Nos produits</h2>
              <ul>
                <ButtonToggle name='Gel douche' value="gelDouche"/>
                <ButtonToggle name='Huile' value="huile"/>
                <ButtonToggle name='Huile satinée'  value="huileSatinee"/>
                <ButtonToggle name='Crème'  value="creme"/>
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