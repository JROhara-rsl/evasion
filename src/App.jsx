import { useState } from 'react'
import { Routes, Route } from 'react-router'

// CSS
import './App.css'
import './scss/custom.scss'

// Component
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Nothing from './pages/Nothing';
import Shop from './pages/shop/Shop';

function App() {

  return (
    <>
      <Routes>
	        <Route path="/" element={<Layout/>}>
		        <Route index element={<Home/>} />  
            <Route path="/shop" element={<Shop/>} />   
	        </Route>      
          <Route path='*' element={<Nothing/>} />
      </Routes>
    </>
  )
}

export default App
