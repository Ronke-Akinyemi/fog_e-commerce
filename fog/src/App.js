import React, { useState } from 'react';
import './App.css';
import './style.css'
import {Routes, Route } from 'react-router-dom';
// import { Logout } from './components/Logout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Carts } from './pages/Carts';
import Navigation from './components/Navigation';
import { Tecno } from './pages/Tecno';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer';




import { createContext } from "react";
export const CartContext = createContext()

function App(){
  const [cart, setCart] = useState([])
  const updateCart = (props) => {
    setCart([...cart, props])
}
  return(
    <>
    <CartContext.Provider value={{updateCart, cart}}>
      <Navigation/>
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/shop" element= {<Shop/>}></Route>
        <Route path="/about" element= {<About/>}></Route>
        <Route path="/cart" element= {<Carts />}></Route>
        <Route path="/tecno" element= {<Tecno/>}></Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </CartContext.Provider>
    </>
  )
}

export default App;