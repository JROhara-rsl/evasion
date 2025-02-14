import React from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

// CSS
import './nosgammes.scss'

const NosGammes = () => {
  return (
    <div>
      <Helmet>
        <title>Nos gammes cosmétiques Évasion</title>
        <meta name='description' content="Évasion vous propose des produits cosmétiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France." />
      </Helmet>
      <div className="container">
          <h1>Nos gammes</h1>
      </div>
    </div>
  )
}

export default NosGammes