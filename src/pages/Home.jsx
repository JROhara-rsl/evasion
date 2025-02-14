import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'

// CSS
import '../scss/custom.scss'

const Home = () => {
  return (
    <div>
        <Helmet>
          <title>Évasion - cosmétique & hygiène sensorielle</title>
          <meta name='description' content="Évasion vous propose des produits cosmiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France." />
        </Helmet>
        <div className="container">
          <h1>Évasion</h1>
        </div>
    </div>
  )
}

export default Home