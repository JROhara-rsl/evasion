import React from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// CSS
import './nosgammes.scss'

// Component
import ButtonToggle from '../../components/button/ButtonToggle';
import Button from '../../components/button/Button';

const buttonStyle = {
  width: "40px",
  background: 'none',
  border: '0px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><img src="../../public/assets/picto/picto-back.svg" /></button>,
  nextArrow: <button style={{ ...buttonStyle }}><img src="../../public/assets/picto/picto-next.svg" /></button>
}

const NosGammes = () => {

  return (
    <>
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
        <Slide {...properties}>
          <div className="each-slide slide-child slide-provence">
              <div className="container container-grid">
                  <span>Slide 1</span>
              </div>
          </div>
          <div className="each-slide slide-child slide-corse">
              <div className="container container-grid">
                  <span>Slide 2</span>
              </div>
          </div>
          <div className="each-slide slide-child slide-coteazur">
              <div className="container container-grid">
                  <span>Slide 3</span>
              </div>
          </div>
          <div className="each-slide slide-child slide-bretagne">
              <div className="container container-grid">
                  <span>Slide 3</span>
              </div>
          </div>
        </Slide>
      </section>
    </>
  )
}

export default NosGammes