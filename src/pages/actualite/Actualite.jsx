import React from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'

// CSS
import './actualite.scss'

const Actualite = () => {
  return (
     <div>    
        <Helmet>
          <title>L'Actualité pour s'évader avec Évasion</title>
          <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
        </Helmet>
        <div className="container">
              <h1>Actualité</h1>
        </div>
      </div>
  )
}

export default Actualite