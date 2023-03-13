import React, { useState } from 'react'
import { Products } from '../components/Products'
import { useContext } from 'react'
import { CartContext } from '../App'

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
    const [showModal, setModalShow] = useState(false)
    const [name, setName]= useState("")
    const [price, setPrice]= useState("")
    const [amount, setAmount] = useState("")
    const [quantity, setQuantity] = useState("")
    const [item, setItem] = useState(null)

    const updateModel = (props) => {
        setModalShow(true)
        setName(props.name)
        setPrice(props.price)
        setAmount(props.amount)
        setItem(props)
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
    }
  return (
    <div className='container-fluid'>
        {showModal && <>
      <div className=''>
        <div className='modal-content'>
            <form onSubmit={updateCart}>
                <p>{name}</p>
                <p>Unit price : {price}</p>
                {quantity > 0 &&<><p>Quantity: {quantity}</p> <p>Amount: {amount}</p></>}
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
                <button type='button' onClick={hideModel} >Close model</button>
                {quantity > 0 && <div>
                    <button>Add to cart</button>
                </div>}
            </form>

        </div>
      </div>
      </>}
      <div className='row'>
        <div className="text-center">Animal Section</div>
        <Products prod={bird} updateModel ={updateModel}/>
      </div>
      <div className='row'>
        <div className="text-center">Crop Section</div>
        <Products prod={crop} updateModel ={updateModel}/>
      </div>
      <div className='row'>
        <div className="text-center">Farm Inputs</div>
        <Products prod={equip} updateModel ={updateModel}/>
      </div>
    </div>

  )
}
