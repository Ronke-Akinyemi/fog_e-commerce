import React, { useState, useContext } from 'react'
import { CartContext } from '../App'
import { Loading } from './Loading'
import { ToastContainer, toast } from 'react-toastify';

export const AddItem = (props) => {
    const user = useContext(CartContext).user
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [source, setSource] = useState("")
    const [info, setInfo] = useState("")
    const [isLoading, setIsloading] = useState(false)
    const [image, setImage] = useState(null)
    const [addAnimal, setAddAnimal] = useState(true)
    const [addCrop, setAddCrop] = useState(false)
    const [addEquip, setAddEquip] = useState(false)
    const inform = () => toast.success("New Product added", {
    position:"top-right"
    })
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
        if(addAnimal){
            formdata.append("age", age);
            formdata.append("weight", weight);
            formdata.append("source", source);
        }
        if (image){
            formdata.append("image", image);
        }
        let url;
        if(addAnimal){
            url = "http://127.0.0.1:8001/bird"
        }
        else if(addCrop){
            url = "http://127.0.0.1:8001/crop"
        }
        else{
            url = "http://127.0.0.1:8001/equip"
        }
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };
        fetch(url, requestOptions)
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
  return (
    <div className='m-5'>
        <ToastContainer/>
        {isLoading ? <Loading/> : <>
            <div>
                <div className='d-flex'>
            <button className='btn btn-primary m-3' onClick={() => {setAddAnimal(true);setAddCrop(false);
                setName(""); setQuantity(0); setPrice(0); setInfo("");
                setAddEquip(false); setType("layers POL")}}>Add Animal</button>
            <button className='btn btn-success m-3' onClick={() => {setAddAnimal(false);setAddCrop(true); setAddEquip(false);
                setName(""); setQuantity(0); setPrice(0); setInfo("");
                setType("maize")}}>Add Crop</button>
            <button className='btn btn-secondary m-3' onClick={() => {setAddAnimal(false);setAddCrop(false);
                setName(""); setQuantity(0); setPrice(0); setInfo("");
                setAddEquip(true); setType("animal")}}>Add Equipment</button>
                <button className='btn btn-danger m-3' onClick={props.toggleUpdate}>Switch to Update page</button>
                </div>
                </div>
            <h2 className='text-dark'>Add New {addAnimal && "Bird"}{addCrop && "Crop"}{addEquip && "Input"}</h2>
        <form onSubmit={submitForm} >
        <div className="row mb-4">
            <div className="col">
            <div className="form-outline">
                <label className="form-label">Name</label>
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
                <label className="form-label">Type</label>
                <select
                    className="form-control"
                    value={type}
                    required
                    onChange = {(e) => setType(e.target.value)}
                    >
                        {addAnimal && <>
                            <option  value="layers POL">layers Point of lay</option>
                            <option value="layers POC">layers Point of Cage</option>
                            <option value="layers DOC">DOC Layers</option>
                            <option value="layers Spent">Spent Layers</option>
                            <option value="Broiler DOC">DOC Broiler</option>
                            <option value="Broiler 8 weeks">Broiler 8 weeks</option>
                            <option value="Turkey DOC">Turkey DOC</option>
                            <option value="Broiler Table Size">Broiler Table Size</option>
                            <option value="Others">Others</option>
                        </>}
                        {addCrop && <>
                            <option  value="maize">Maize</option>
                            <option selected value="cassava">Cassava</option>
                            <option value="yam">Yam</option>
                            <option value="rice">Rice</option>
                            <option value="Others">Others</option>
                        </>}
                        {addEquip && <>
                            <option value="animal">Animal</option>
                            <option selected value="crop">Crop</option>
                            <option value="Others">Others</option>
                        </>}
                    </select>
            </div>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col">
            <div className="form-outline">
                <label className="form-label" >Quantity</label>
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
                <label className="form-label">Price</label>
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
        {addAnimal && <>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label">Age</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                            value={age}
                            onChange = {(e) => {
                                setAge(e.target.value)
                            }}
                            ></input>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label">Weight</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                            value={weight}
                            onChange = {(e) => {
                                setWeight(e.target.value)
                            }}
                            ></input>
                    </div>
                    </div>
                </div>

            <div className="form-outline mb-4">
                <label className="form-label">Source</label>
                <input
                        className="form-control"
                        type="text"
                        required
                        value={source}
                        onChange = {(e) => {
                            setSource(e.target.value)
                        }}
                        ></input>
            </div>
        </>}

    <div className="form-outline mb-4">
        <label className="form-label">Information</label>
        <textarea className="form-control" id="form6Example7" rows="4"
                required
                value={info}
                onChange = {(e) => {
                    setInfo(e.target.value)
                }}
                ></textarea>
    </div>
    <div className="form-outline mb-4">
        <label className="form-label">Image</label>
        <input
        className="form-control"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        >
        </input>

    </div>

    <button type="submit" className="btn btn-primary btn-block mb-4">Add Item</button>
            </form>
        </>}
    </div>
  )
}
