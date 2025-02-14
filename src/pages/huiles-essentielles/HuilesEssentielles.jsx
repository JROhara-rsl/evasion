import React from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

// CSS
import './huilesessentielles.scss'

const HuilesEssentielles = () => {
  return (
    <div>
          <Helmet>
            <title>Évasion -Laboratoire d'huiles essentielles</title>
            <meta name='description' content="Nos produits sont le fruit d'un savoir-faire unique, associant naturalité et innovation. Chaque formulation est développée avec exigence." />
          </Helmet>
          <div className="container">
              <h1>Huiles essentielles</h1>
          </div>
        </div>
  )
}

export default HuilesEssentielles