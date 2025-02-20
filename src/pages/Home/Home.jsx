import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'

// CSS
import '../../scss/custom.scss'
import Button from '../../components/button/Button'
import './home.scss';


const Home = () => {
  return (
    <div>
        <Helmet>
          <title>Évasion - cosmétique & hygiène sensorielle</title>
          <meta name='description' content="Évasion vous propose des produits cosmiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France." />
        </Helmet>
        <section className="hero container">
          <h1>Évasion</h1>
        </section>
        <section id="section-intro-produit" className='section-dark'>
          <div className='container container-grid'>
            <div className='grid6'>
              <img src="../../public/assets/img/pack/gamme/GAMME-LAVANDE-750px.jpg"/>
            </div>
            <div className='display-flex-texte grid3'>
              <h2>Nos produits</h2>
              <p>
                <span className='paragraphe-chapeau'>Plongez dans un univers où chaque soin devient une invitation au voyage.<br/></span>
                Évasion vous propose des produits cosmiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France. Parce que prendre soin de soi, c'est aussi s'offrir un moment d'évasion.
              </p>
              <Button name='Découvrir nos gammes' lien='/nos-gammes'/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home