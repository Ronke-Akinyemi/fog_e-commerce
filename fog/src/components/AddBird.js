import React, { useState, useContext } from 'react'
import { CartContext } from '../App'

export const AddBird = () => {
    const user = useContext(CartContext).user
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [source, setSource] = useState("")
    const [info, setInfo] = useState("")
    const [image, setImage] = useState(null)
    const [addAnimal, setAddAnimal] = useState(true)
    const [addCrop, setAddCrop] = useState(false)
    const [addEquip, setAddEquip] = useState(false)
    const submitForm = (e) => {
    e.preventDefault()
    // const data = {name, info, type,quantity,price,age,weight,source}
    // let form_data = new FormData()
    // form_data.append("name", name)
    // form_data.append("type", type)
    // form_data.append("quantity", quantity)
    // form_data.append("price", price)
    // form_data.append("age", age)
    // form_data.append("weight", weight)
    // form_data.append("source", source)
    // form_data.append("info", info)
    // if (image){
    //     form_data.append("image", image)
    // }
    // form_data.append("source", source)

    // fetch('http://localhost:8001/bird', {
    //         method: 'POST',
    //         headers: {"Content-Type": "multipart/form-data; ; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"},
    //         body: data
    //     })
    //     .then((res) => {
    //         return res.json()
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    // console.log(data)


// var myHeaders = new Headers();
// myHeaders.append("Authorization", `Bearer ${user.access}`);

var formdata = new FormData();
formdata.append("name", name);
formdata.append("type", type);
formdata.append("quantity", quantity);
formdata.append("price", price);
formdata.append("age", age);
formdata.append("weight", weight);
formdata.append("source", source);
formdata.append("info", info);
if (image){
    formdata.append("image", image);
}
var requestOptions = {
  method: 'POST',
  // headers: myHeaders,
  headers: {"Content-Type": "multipart/form-data; ; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW", "Authorization": `Bearer ${user.access}`},
  body: formdata,
  redirect: 'follow'
};
fetch("http://127.0.0.1:8001/bird", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
  return (
    <>
    <div className='m-5'>
        <p>
        <button onClick={() => {setAddAnimal(true);setAddCrop(false);
            setName(""); setQuantity(0); setPrice(0); setInfo("");
            setAddEquip(false); setType("layers POL")}}>Add Animal</button>
        <button onClick={() => {setAddAnimal(false);setAddCrop(true); setAddEquip(false);
            setName(""); setQuantity(0); setPrice(0); setInfo("");
            setType("maize")}}>Add Crop</button>
        <button onClick={() => {setAddAnimal(false);setAddCrop(false);
            setName(""); setQuantity(0); setPrice(0); setInfo("");
            setAddEquip(true); setType("animal")}}>Add Equipment</button></p>
        <h2 className='text-dark'>Add New {addAnimal && "Bird"}{addCrop && "Crop"}{addEquip && "Input"}</h2>
      <form onSubmit={submitForm} >
    <div className="row mb-4">
        <div className="col">
        <div className="form-outline">
            <label className="form-label" for="form6Example7">Name</label>
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
            <label className="form-label" for="form6Example7">Type</label>
            <select
                className="form-control"
                value={type}
                required
                onChange = {(e) => setType(e.target.value)}
                >
                    {addAnimal && <>
                        <option  value="layers POL">layers Point of lay</option>
                        <option selected value="layers POC">layers Point of Cage</option>
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
            <label className="form-label" for="form6Example7">Quantity</label>
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
            <label className="form-label" for="form6Example7">Price</label>
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
                    <label className="form-label" for="form6Example7">Age</label>
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
                    <label className="form-label" for="form6Example7">Weight</label>
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
            <label className="form-label" for="form6Example7">Source</label>
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
     <label className="form-label" for="form6Example7">Information</label>
    <textarea className="form-control" id="form6Example7" rows="4"
            required
              value={info}
              onChange = {(e) => {
                  setInfo(e.target.value)
              }}
              ></textarea>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" for="form6Example7">Image</label>
    <input
    className="form-control"
    type="file"
    onChange={(e) => setImage(e.target.files[0])}
    >
    </input>

  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Add Item</button>
        </form>
    </div>
    </>
  )
}
