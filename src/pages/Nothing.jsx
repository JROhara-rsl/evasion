import React from 'react'
import { Link } from 'react-router'

const Nothing = () => {
  return (
    <div>
        <h1>ERROR 404</h1>
        <h2>Nothing here</h2>
        <Link to='/'>Revenir sur l'accueil</Link>
    </div>
  )
}

export default Nothing