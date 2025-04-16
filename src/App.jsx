import { useState } from 'react'
import './App.css'
import Index from './pages/auth'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './pages/auth/cart';


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
