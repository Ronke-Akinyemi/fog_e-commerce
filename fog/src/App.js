import React, { useEffect, useState } from 'react';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddProduct } from './pages/AddProduct';
import { Contact } from './components/Contact';
import 'react-multi-carousel/lib/styles.css';



export const CartContext = createContext()

function App(){
  const [cart, setCart] = useState(localStorage.getItem("fogCart") ? JSON.parse(localStorage.getItem("fogCart")) : [])
  const updateCart = (props) => {
    setCart([...cart, props])
}
const deleteItem = (props) => {
  setCart(cart.filter(item => item.id !== props))
}
useEffect(() => {
  localStorage.setItem("fogCart", JSON.stringify(cart))
}, [cart])
  return(
    <>
      <CartContext.Provider value={{updateCart, deleteItem, cart}}>
        {/* <ToastContainer> */}
        <Navigation/>
        <Routes>
          <Route path="/" element= {<Home />}></Route>
          <Route path="/shop" element= {<Shop/>}></Route>
          <Route path="/about" element= {<About/>}></Route>
          <Route path="/cart" element= {<Carts />}></Route>
          <Route path="/tecno" element= {<Tecno/>}></Route>
          <Route path="/addProduct" element = {<AddProduct/>}></Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Contact/>
        <Footer/>
        {/* </ToastContainer> */}
      </CartContext.Provider>
    </>
  )
}

export default App;