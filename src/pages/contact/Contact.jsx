import React from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

// CSS
import './contact.scss'

// Component
import Button from '../../components/button/Button'
import Newsletter from '../../components/newsletter/Newsletter'

const Contact = () => {
  return (
    <>    
      <Helmet>
        <title>Contactez Évasion</title>
        <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
      </Helmet>
      <section id="section-contact" className='container-image-large'>
          <div className='container-image'>
            <img alt="" src="../../public/assets/img/photos/plage-france.jpg"></img>
          </div>
          <div className='container container-grid'>
            <div className='display-flex-texte container-white grid4'>
              <h1 className='title-XH'>Nous contacter</h1>
              <hr></hr>
              <p><span className='paragraphe-chapeau'>L'excellence au service de votre bien-être.</span></p>
              <p>Nos produits sont le fruit d'un savoir-faire unique, associant naturalité et innovation. Chaque formulation est développée avec exigence, en partenariat avec des experts en cosmétologie et des producteurs locaux, pour garantir une qualité et une efficacité optimales.</p>
              <Button name="En savoir plus" lien='/huiles-essentielles'/>
            </div>
          </div>
      </section>
      <Newsletter/>
    </>
  )
}

export default Contact