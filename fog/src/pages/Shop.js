import React, { useEffect, useState } from 'react'
import { Products } from '../components/Products'
import { useContext } from 'react'
import { CartContext } from '../App'
import { ToastContainer, toast } from 'react-toastify';
import { Loading } from '../components/Loading';

export const Shop = () => {
const bird = [
        {
            "id": "d8c49fd7-ac69-47f4-8dfa-75e3b7bb6d4e",
            "name": "Layers",
            "type": "layers POL",
            "quantity": 2,
            "price": 200,
            "age": "8 months",
            "weight": "6kg",
            "source": "Amor",
            "info": "well presderved",
            "image": null
        },
        {
            "id": "c0606bbd-1047-45e1-a6f7-124a17a77156",
            "name": "Layers",
            "type": "Broiler DOC",
            "quantity": 244,
            "price": 123,
            "age": "8 months",
            "weight": "6kg",
            "source": "Amor",
            "info": "well presderved",
            "image": "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/birds/IMG_20210513_084704_717_transcpr_rlqldv.jpg"
        }
    ]
const crop = [
        {
            "id": "badf022a-793a-4179-9568-c3dc80cba56a",
            "name": "Imported maize",
            "type": "cassava",
            "quantity": 60,
            "price": 300,
            "info": "well presderved",
            "image": null
        },
        {
            "id": "9a7eb624-9456-4707-902a-283f6b87369c",
            "name": "Imported maize",
            "type": "maize",
            "quantity": 2000,
            "price": 2730,
            "info": "imported from tailand",
            "image": null
        },
        {
            "id": "d249cbe7-c0cb-4a6a-8108-3b486c8ba19b",
            "name": "White yam",
            "type": "yam",
            "quantity": 50,
            "price": 500,
            "info": "it is well preserved",
            "image": "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/crops/IMG_20210518_180421_447_gbuzca.jpg"
        },
        {
            "id": "3baa0d6d-a600-47fc-b297-8fdb4e752cc9",
            "name": "cava2",
            "type": "cassava",
            "quantity": 100,
            "price": 1000,
            "info": "fast growing variety",
            "image": null
        }
    ]

const equip= [
        {
            "id": "badf022a-793a-4179-9568-c3dc80cba56a",
            "name": "Imported maize",
            "type": "cassava",
            "quantity": 60,
            "price": 300,
            "info": "well presderved",
            "image": null
        },
        {
            "id": "9a7eb624-9456-4707-902a-283f6b87369c",
            "name": "Imported maize",
            "type": "maize",
            "quantity": 2000,
            "price": 2730,
            "info": "imported from tailand",
            "image": null
        },
        {
            "id": "d249cbe7-c0cb-4a6a-8108-3b486c8ba19b",
            "name": "White yam",
            "type": "yam",
            "quantity": 50,
            "price": 500,
            "info": "it is well preserved",
            "image": "https://res.cloudinary.com/djkpvbgmj/raw/upload/v1/media/fog/crops/IMG_20210518_180421_447_gbuzca.jpg"
        },
        {
            "id": "3baa0d6d-a600-47fc-b297-8fdb4e752cc9",
            "name": "cava2",
            "type": "cassava",
            "quantity": 100,
            "price": 1000,
            "info": "fast growing variety",
            "image": null
        }
    ]

const [isLoading, setIsLoading] = useState(false)
// const [bird, setBird] = useState([])
// const [crop, setCrop] = useState([])
// const [equip, setEquip] = useState([])
const [error, setError] = useState(null)
// useEffect(()=>{
//     const url = "http://localhost:8000/all"
//         const abortCont = new AbortController();
//     setIsLoading(true)
//     // pass second arg to fetch for the sake of abort controller
//         fetch(url, { signal: abortCont.signal })
//         .then(res => {
//         if (!res.ok){
//             throw Error("Resources not found")
//         }
//         return res.json()
//         })
//         .then((data) => {
//             console.log(data["Bird"])
//         setBird(data["Bird"])
//         setCrop(data["Crop"])
//         setEquip(data["Equipment"])
//         setError(null)
//         setIsLoading(false)
//         })
//         .catch(error =>{
//             //check for abort error
//             if (error.name === 'AbortError'){
//                 console.log("fetch aborted")
//             }
//             else{
//                 setError(error.message)
//                 setIsLoading(false)
//             }
//         })

//         //clean up
//         return () => abortCont.abort();
//     }, []
// )
    const inform = () => toast.success("Item added to cart", {
    position:"top-right"
  })
    const [showModal, setModalShow] = useState(false)
    const [name, setName]= useState("")
    const [price, setPrice]= useState("")
    const [amount, setAmount] = useState("")
    const [quantity, setQuantity] = useState("")
    const [info, setInfo] = useState("")
    const [item, setItem] = useState(null)

    const updateModel = (props) => {
        setModalShow(true)
        setName(props.name)
        setPrice(props.price)
        setAmount(props.amount)
        setItem(props)
        setInfo(props.info)
    }
    const hideModel = () => {
        setQuantity("")
        setModalShow(false)
    }
    const cart = useContext(CartContext)
    const updateCart = (e) => {
        e.preventDefault()
        setModalShow(false)
        cart.updateCart(item)
        setName("")
        setPrice("")
        setAmount("")
        setQuantity("")
        setItem(null)
        inform()
    }
  return (
    <div className='container-fluid'>
        {isLoading ? <Loading/> :
        <>
        <ToastContainer/>
        {showModal && <>
      <div className='modal-container'>
        <div className='mud'>
            <button type='button' onClick={hideModel} className="btn-close text-danger text-right bg-danger bco"></button>
            <form onSubmit={updateCart}>

              <h5 className="modal-title">{name}</h5>
              <hr className="hr"></hr>
                {/* <p>{name}</p> */}

                <div className="modal-body">
                  <p>{info}</p>
                <hr className="hr"></hr>
                <div className='row'>
                  <p className='col-md-4'>Unit price :<p>N {price}</p></p>
                {quantity > 0 &&<><p className='col-md-4'>Quantity: <p>{quantity}</p></p> <p className='col-md-4'>Amount: <p>{amount}</p></p></>}

                </div>

                <input
                type="number"
                value = {quantity}
                onChange = {(e) => {
                    quantity < 0 ? setQuantity(0) : setQuantity(e.target.value)
                    setItem({...item, "quantity": parseInt(e.target.value)})
                    setAmount(price * e.target.value)
                }}
                >
                </input>
                <hr className="hr"></hr>
                <div className="justify-content-center mt-5 align-item-center d-flex gap-1">
                        <button type="button" className="btn btn-secondary"  onClick={hideModel}>Close</button>
                        {quantity > 0 && <button type="submit" className="btn btn-primary">Add to cart</button>
                }
                </div>

                </div>
            </form>

        </div>
      </div>
      </>}
      <p>Your sure plug for all agricultural services</p>
      <div className='row'>
        <div className="p-5 text-center bg-warning">
          <h4 class="mb-1">Animal Section</h4></div>
        <div class="p-4">
            <Products prod={bird} updateModel ={updateModel}/>
        </div>
      </div>
      <div className='row'>
        <div class="p-5 text-center bg-warning">
          <h4 class="mb-1">Crops</h4>
        </div>
        <div className='p-4'>
          <Products prod={crop} updateModel ={updateModel}/>
        </div>
      </div>
      <div className='row'>
        <div class="p-5 text-center bg-warning">
          <h4 class="mb-1">Inputs</h4>
        </div>
        <div className='p-4'>
          <Products prod={equip} updateModel ={updateModel}/>
        </div>
      </div>
      </>}
    </div>

  )
}
