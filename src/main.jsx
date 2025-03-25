import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";

import App from './App.jsx'

// CSS
import './scss/variables.scss';
import './scss/font.scss';
import './scss/custom.scss';
import './pages/Home/home.scss'
import './pages/actualite/actualite.scss'
import './pages/compte/compte.scss'
import './pages/contact/contact.scss'
import './pages/nos-gammes/nosgammes.scss'
import './pages/panier/panier.scss'
import './pages/huiles-essentielles/huilesessentielles.scss'
import './pages/recherche/recherche.scss'
import './pages/shop/shop.scss'
import './scss/responsive/mediaqueries.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
