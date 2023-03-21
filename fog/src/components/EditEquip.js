import React, {useContext, useState} from 'react'
import { ItemContext } from '../App'
import { CartContext } from '../App'
import { toast } from 'react-toastify';
import { Loading } from './Loading';

export const EditEquip = () => {
  const allEquip = useContext(ItemContext).equip
    const [equip, setEquip] = useState(allEquip[0])
    const [showEquip, setShow] = useState(false)
    const [name, setName] = useState(equip.name)
    const [type, setType] = useState(equip.type)
    const [quantity, setQuantity] = useState(equip.quantity)
    const [price, setPrice] = useState(equip.price)
    const [info, setInfo] = useState(equip.info)
    const [image, setImage] = useState(null)
    const [modal, setModal] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const user = useContext(CartContext).user
    const inform = () => toast.success("Item Updated", {
    position:"top-right"
    })
     const del = () =>toast.success("Item Deleted", {position:"top-right"})
     const hideModel = () => setModal(false)

    const changeEquip = (equip) => {
            const selected = allEquip.filter(b => {
            return b.id === equip
        })
        setEquip(selected[0])
        setName(selected[0].name); setType(selected[0].type); setQuantity(selected[0].quantity)
        setPrice(selected[0].price); setInfo(selected[0].info)
        setShow(true)
    }
    const submitForm = (e) => {
         e.preventDefault()
         setIsloading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.access}`);
        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("type", type);
        formdata.append("quantity", quantity);
        formdata.append("price", price);
        formdata.append("info", info);
        if (image){
            formdata.append("image", image);
        }
        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };
        fetch(`product/equip/${equip.id}`, requestOptions)
        .then(response => {
            if (!response.ok)
            {
                if (response.status === 401)
                {
                    localStorage.removeItem("fogUser")
                }
                else if(response.status === 400)
                {
                    throw Error("Something went wrong")
                }
            }
            response.text()
        })
        .then(() => {
            inform()
        setIsloading(false)
    })
        .catch(() => setIsloading(false));
    }
        const deleteItem = () => {
        var myHeaders = new Headers();
        setModal(false)
        setIsloading(true)
        myHeaders.append("Authorization", `Bearer ${user.access}`);
        myHeaders.append("Content-Type", "application/json")
        fetch(`product/equip/${equip.id}`, {
            method : 'DELETE',
            headers: myHeaders
        })
        .then(res => {
            if (!res.ok){
                if (res.status === 401)
                {
                    localStorage.removeItem("fogUser")
                }
                else if(res.status === 400)
                {
                    throw Error("Something went wrong")
                }
            }
            return res.text()
        })
        .then(() => {
            del()
            setIsloading(false)
        })
        .catch(() => {
            setIsloading(false)
        })
    }
  return (
    <div className='container'>
         {isLoading ? <Loading/> : <>
            {!showEquip ?
            <div className='row'>
                {allEquip.map(equip => (
                    <button
                    onClick={() => changeEquip(equip.id)}
                    className='col-md-3 m-2 uD' key={equip.id}>
                        <h3 className='oA'>{equip.name}</h3>
                        <p className='text-dark'>Edit</p>
                    </button>
                ))}
            </div> :
            <div>
                {modal && <div className='modal-container'>
                    <div className='mud'>
                    <div className="canBtnBG">
                        <button type='button' className="canBtn" onClick={hideModel} ><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div align-items-left>
                        <p>Confirm Delete</p>
                        <button type='button' className='btn btn-danger' onClick={deleteItem}>Yes</button>
                    </div>
                        <div>

                    </div>
                    </div>
                </div>}
                <div className="canBtnBG">
                    <button type='button' onClick={() => setShow(false)} className="btn-close bg-danger canBtn"></button>
                </div>
                <h3 className='oA'>Edit</h3>
                <form onSubmit={submitForm} >
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label oA">Name</label>
                            <input
                                className="form-control"
                                type="text"
                                required
                                value={name}
                                onChange = {(e) => {
                                    setName(e.target.value)
                                }}
                                ></input>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label oA">Type</label>
                            <select
                                className="form-control"
                                value={type}
                                required
                                onChange = {(e) => setType(e.target.value)}
                                >
                                    <option  value="crop">Crop</option>
                                    <option value="animal">Animal</option>
                                    <option value="others">Others</option>
                                </select>
                        </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label oA" >Quantity</label>
                            <input
                                className="form-control"
                                type="number"
                                required
                                value={quantity}
                                onChange = {(e) => {
                                    setQuantity(e.target.value)
                                }}
                                ></input>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label oA">Price</label>
                            <input
                                className="form-control"
                                type="number"
                                required
                                value={price}
                                onChange = {(e) => {
                                    setPrice(e.target.value)
                                }}
                                ></input>
                        </div>
                        </div>
                    </div>

                <div className="form-outline mb-4">
                    <label className="form-label oA">Information</label>
                    <textarea className="form-control" id="form6Example7" rows="4"
                            required
                            value={info}
                            onChange = {(e) => {
                                setInfo(e.target.value)
                            }}
                            ></textarea>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label oA">Image</label>
                    <input
                    className="form-control"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    >
                    </input>

                </div>
                <div className='row gx-4 align-items-center'>
                    <div className='mb-4 col-sm-4' >
                        <button type="submit" className="btn btn-primary btn-block ">Edit Item</button>
                    </div>
                    <div className='mb-4 col-sm-4' >
                        <button type="button" onClick={() => setModal(true)} className="btn btn-danger btn-block mb-4 ml-4 col-sm-4">Delete Item</button>
                    </div>
                </div>
                        </form>
            </div>}
         </>}
    </div>
  )
}
