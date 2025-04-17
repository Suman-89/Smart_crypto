import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/cms';
import Cart from './pages/cms/cart';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
