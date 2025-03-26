import { Routes, Route } from 'react-router'
import { Suspense, lazy } from 'react'
import emailjs from '@emailjs/browser'; 

// CSS
import './App.css'

// Component
import Layout from './components/Layout';

// Pages
import Home from './pages/Home/Home.jsx';
import Nothing from './pages/Nothing';
const Shop = lazy(() => import('./pages/shop/Shop'));
const NosGammes = lazy(() => import('./pages/nos-gammes/NosGammes'));
const HuilesEssentielles = lazy(() => import('./pages/huiles-essentielles/HuilesEssentielles'));
const Actualite = lazy(() => import('./pages/actualite/Actualite'));
const Article = lazy(() => import('./pages/actualite/Article'));
import Contact from './pages/contact/Contact';
const PageProduit = lazy(() => import('./pages/shop/PageProduit'));
import Panier from './pages/panier/Panier.jsx';
const Recherche = lazy(() => import('./pages/recherche/Recherche'));
import Commande from './pages/panier/Commande.jsx';
import Compte from './pages/compte/Compte.jsx';
import { UpdatePassword } from '@supabase/auth-ui-react';

// Context
import { PanierProvider } from "./context/PanierContext.jsx";
import { ProfilProvider } from './context/ProfilContext.jsx';

function App() {

  return (
    <>
      <ProfilProvider>
        <PanierProvider>
          <Suspense fallback={<div>Chargement...</div>}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>} />  
                  <Route path="/shop" element={<Shop/>} /> 
                  <Route path="/shop/:gammeParams" element={<Shop/>} /> 
                  <Route path='/shop/item/:categorieId/:id' element={<PageProduit/>} /> 
                  <Route path="/nos-gammes" element={<NosGammes/>} />
                  <Route path="/huiles-essentielles" element={<HuilesEssentielles/>} /> 
                  <Route path="/actualite" element={<Actualite/>} />
                  <Route path='/actualite/article/:id/:name' element={<Article/>} /> 
                  <Route path="/contact" element={<Contact/>} />  
                  <Route path="/panier" element={<Panier/>} />  
                  <Route path="/panier/commande" element={<Commande/>} />  
                  <Route path="/compte" element={<Compte />} />
                  <Route path="/recherche/:searchTerm" element={<Recherche />} />
                  <Route path="/update-password" element={<UpdatePassword />} />
                  <Route path='*' element={<Nothing/>} />
                </Route>      
            </Routes>
          </Suspense>
        </PanierProvider>
      </ProfilProvider>
    </>
  )
}

export default App
