import React from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

// CSS
import './contact.scss'

const Contact = () => {
  return (
    <>    
      <Helmet>
        <title>Contactez Évasion</title>
        <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
      </Helmet>
      <div className="container">
            <h1>Contacter nous</h1>
      </div>
    </>
  )
}

export default Contact