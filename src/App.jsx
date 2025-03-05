import { Routes, Route } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'

// CSS
import './App.css'

// Component
import Layout from './components/Layout';

// Pages
import Home from './pages/Home/Home.jsx';
import Nothing from './pages/Nothing';
import Shop from './pages/shop/Shop';
import NosGammes from './pages/nos-gammes/NosGammes';
import HuilesEssentielles from './pages/huiles-essentielles/HuilesEssentielles';
import Actualite from './pages/actualite/Actualite';
import Article from './pages/actualite/Article';
import Contact from './pages/contact/Contact';
import PageProduit from './pages/shop/PageProduit';
import Panier from './pages/panier/Panier.jsx';
import Compte from './pages/compte/Compte.jsx';
import { UpdatePassword } from '@supabase/auth-ui-react';

// Context
import { PanierProvider } from "./context/PanierContext.jsx";
import { ProfilProvider } from './context/ProfilContext.jsx';

const helmetContext = {};

function App() {

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <ProfilProvider>
          <PanierProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>} />  
                  <Route path="/shop" element={<Shop/>} /> 
                  <Route path='/shop/item/:name/:id' element={<PageProduit/>} /> 
                  <Route path="/nos-gammes" element={<NosGammes/>} />
                  <Route path="/huiles-essentielles" element={<HuilesEssentielles/>} /> 
                  <Route path="/actualite" element={<Actualite/>} />
                  <Route path='/actualite/article/:id/:name' element={<Article/>} /> 
                  <Route path="/contact" element={<Contact/>} />  
                  <Route path="/panier" element={<Panier/>} />  
                  <Route path="/compte" element={<Compte />} />
                  <Route path="/update-password" element={<UpdatePassword />} />
                  <Route path='*' element={<Nothing/>} />
                </Route>      
            </Routes>
          </PanierProvider>
        </ProfilProvider>
      </HelmetProvider>
    </>
  )
}

export default App
