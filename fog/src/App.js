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
import { Loading } from './components/Loading';
import { ToastContainer} from 'react-toastify';



export const CartContext = createContext()
export const ItemContext = createContext()

function App(){
  const [cart, setCart] = useState(localStorage.getItem("fogCart") ? JSON.parse(localStorage.getItem("fogCart")) : [])
  const updateCart = (props) => {
    setCart([...cart, props])
}
const [isLoading, setIsLoading] = useState(false)
const [user, setUser] = useState(localStorage.getItem("fogUser") ? JSON.parse(localStorage.getItem("fogUser")) : null)
const signIn = (props) => {
  setUser(props)
}

const deleteItem = (props) => {
  setCart(cart.filter(item => item.id !== props))
}
const [theme, setTheme] = useState("light")
const changeTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"))
}
const [bird, setBird] = useState([])
const [crop, setCrop] = useState([])
const [equip, setEquip] = useState([])
useEffect(()=>{
    const url = "http://localhost:8007/all"
        const abortCont = new AbortController();
    // pass second arg to fetch for the sake of abort controller
        fetch(url, { signal: abortCont.signal })
        .then(res => {
        if (!res.ok){
            throw Error("Resources not found")
        }
        return res.json()
        })
        .then((data) => {
            setBird(data["Bird"])
            setCrop(data["Crop"])
            setEquip(data["Equipment"])
            updateToken()
            setIsLoading(false)
        })
        .catch(() =>{
            //check for abort error
                setIsLoading(false)
        })

        //clean up
        return () => abortCont.abort();
    }, []
)
let updateToken = async ()=> {
  if (user !== null){
    fetch('http://localhost:8008/api/token/refresh/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':user.refresh})
    })
    .then(res => {
      if (!res.ok){
        throw Error("Invalid")
      }
      return res.json()
    })
    .then(data => setUser(data))
    .catch(() => {
      setUser(null)
    })
    // if(isLoading){
    //     setIsLoading(false)
    // }
  }
    }
useEffect(()=> {
        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(user !== null){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)
    }, [user, isLoading])
// const bird = [
//         {
//             "id": "d8c49fd7-ac69-47f4-8dfa-75e3b7bb6d4e",
//             "name": "Broiler",
//             "type": "layers POL",
//             "quantity": 2,
//             "price": 200,
//             "age": "8 months",
//             "weight": "6kg",
//             "source": "Amor",
//             "info": "well presderved",
//             "image": null
//         },
//         {
//             "id": "c0606bbd-1047-45e1-a6f7-124a17a77156",
//             "name": "Layers",
//             "type": "Broiler DOC",
//             "quantity": 244,
//             "price": 123,
//             "age": "8 months",
//             "weight": "6kg",
//             "source": "Amor",
//             "info": "well presderved",
//             "image": "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/birds/IMG_20210513_084704_717_transcpr_rlqldv.jpg"
//         },
//         {
//             "id": "c0606bbd-1247-45e1-a6f7-q24a17a77156",
//             "name": "Turkey",
//             "type": "Broiler DOC",
//             "quantity": 244,
//             "price": 123,
//             "age": "8 months",
//             "weight": "6kg",
//             "source": "Amor",
//             "info": "well presderved",
//             "image": "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/birds/IMG_20210513_084704_717_transcpr_rlqldv.jpg"
//         },
//         {
//             "id": "yp606bbd-1247-45e1-a6f7-q24a17a77156",
//             "name": "Goat",
//             "type": "others",
//             "quantity": 419,
//             "price": 23000,
//             "age": "2 years",
//             "weight": "10kg",
//             "source": "WAD",
//             "info": "Matured and big",
//             "image": "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/birds/IMG_20210513_084704_717_transcpr_rlqldv.jpg"
//         }
//     ]
// const crop = [
//         {
//             "id": "badf022a-793a-4179-9568-c3dc80cba56a",
//             "name": "Imported maize",
//             "type": "cassava",
//             "quantity": 60,
//             "price": 300,
//             "info": "well presderved",
//             "image": null
//         },
//         {
//             "id": "9a7eb624-9456-4707-902a-283f6b87369c",
//             "name": "Imported maize",
//             "type": "maize",
//             "quantity": 2000,
//             "price": 2730,
//             "info": "imported from tailand",
//             "image": null
//         },
//         {
//             "id": "d249cbe7-c0cb-4a6a-8108-3b486c8ba19b",
//             "name": "White yam",
//             "type": "yam",
//             "quantity": 50,
//             "price": 500,
//             "info": "it is well preserved",
//             "image": "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/crops/IMG_20210518_180421_447_gbuzca.jpg"
//         },
//         {
//             "id": "3baa0d6d-a600-47fc-b297-8fdb4e752cc9",
//             "name": "cava2",
//             "type": "cassava",
//             "quantity": 100,
//             "price": 1000,
//             "info": "fast growing variety",
//             "image": null
//         }
//     ]

// const equip= [
//         {
//             "id": "badf022a-793a-4179-9568-c3dc80cba56a",
//             "name": "Imported maize dryer",
//             "type": "cassava",
//             "quantity": 60,
//             "price": 300,
//             "info": "well presderved",
//             "image": null
//         },
//         {
//             "id": "9a7eb624-9456-4707-902a-283f6b87369c",
//             "name": "feeder",
//             "type": "maize",
//             "quantity": 2000,
//             "price": 2730,
//             "info": "imported from tailand",
//             "image": null
//         },
//         {
//             "id": "d249cbe7-c0cb-4a6a-8108-3b486c8ba19b",
//             "name": "White yam",
//             "type": "yam",
//             "quantity": 50,
//             "price": 500,
//             "info": "it is well preserved",
//             "image": "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/crops/IMG_20210518_180421_447_gbuzca.jpg"
//         },
//         {
//             "id": "3baa0d6d-a600-47fc-b297-8fdb4e752cc9",
//             "name": "cava2",
//             "type": "cassava",
//             "quantity": 100,
//             "price": 1000,
//             "info": "fast growing variety",
//             "image": null
//         }
//     ]
useEffect(() => {
  localStorage.setItem("fogCart", JSON.stringify(cart))
  localStorage.setItem("fogUser", JSON.stringify(user))
}, [cart, user])
  return(
    <div className='App' id={theme}>
      <CartContext.Provider value={{updateCart, deleteItem, cart, changeTheme, theme, user, signIn, setUser}}>
        <ItemContext.Provider value={{bird, crop, equip}}>
           <ToastContainer/>
          <Navigation/>
          {isLoading ? <Loading/> : <>
            <Routes>
              <Route path="/" element= {<Home />}></Route>
              <Route path="/team" element= {<Team/>}></Route>
              <Route path="/cart" element= {<Carts />}></Route>
                <Route path="/admin" element = {<RequireAuth><Admin/></RequireAuth>}></Route>
                {/* <Route path="/admin" element = {<Admin/>}></Route> */}
                <Route path="/shop" element= {<Shop/>}></Route>
              <Route path="/tecno" element= {<Tecno/>}></Route>
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </>}
          <Contact/>
          <Footer/>
        {/* </ToastContainer> */}
        </ItemContext.Provider>
      </CartContext.Provider>
    </div>
  )
}

export default App;