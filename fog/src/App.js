import React, { useEffect, useState } from 'react';
import './App.css';
import './style.css'
import {Routes, Route } from 'react-router-dom';
// import { Logout } from './components/Logout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Team } from './pages/Team';
import { Carts } from './pages/Carts';
import Navigation from './components/Navigation';
import { Tecno } from './pages/Tecno';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer';
import { createContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Contact } from './components/Contact';
import 'react-multi-carousel/lib/styles.css';
import { Admin } from './pages/Admin';
import { RequireAuth } from './components/RequireAuth';



export const CartContext = createContext()

function App(){
  const [cart, setCart] = useState(localStorage.getItem("fogCart") ? JSON.parse(localStorage.getItem("fogCart")) : [])
  const updateCart = (props) => {
    setCart([...cart, props])
}
const [user, setUser] = useState(localStorage.getItem("fogUser") ? JSON.parse(localStorage.getItem("fogUser")) : null)
const signIn = (props) => {
  setUser(props)
}
const signOut = () => {
  setUser(null)
}
const deleteItem = (props) => {
  setCart(cart.filter(item => item.id !== props))
}
const [theme, setTheme] = useState("light")
const changeTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"))
}
useEffect(() => {
  localStorage.setItem("fogCart", JSON.stringify(cart))
  localStorage.setItem("fogUser", JSON.stringify(user))
}, [cart, user])
  return(
    <div className='App' id={theme}>
      <CartContext.Provider value={{updateCart, deleteItem, cart, changeTheme, theme, user, signIn, signOut}}>
        {/* <ToastContainer> */}
        <Navigation/>
        <Routes>
          <Route path="/" element= {<Home />}></Route>
          <Route path="/shop" element= {<Shop/>}></Route>
          <Route path="/team" element= {<Team/>}></Route>
          <Route path="/cart" element= {<Carts />}></Route>
          <Route path="/admin" element = {<RequireAuth><Admin/></RequireAuth>}></Route>
          <Route path="/tecno" element= {<Tecno/>}></Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Contact/>
        <Footer/>
        {/* </ToastContainer> */}
      </CartContext.Provider>
    </div>
  )
}

export default App;