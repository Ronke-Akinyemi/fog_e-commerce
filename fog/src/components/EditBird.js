import React, {useContext, useState} from 'react'
import { ItemContext } from '../App'

export const EditBird = () => {
    const allBird = useContext(ItemContext).bird
    const [bird, setBird] = useState(allBird[0])
    const [showBird, setShow] = useState(false)
    const [name, setName] = useState(bird.name)
    const [type, setType] = useState(bird.type)
    const [quantity, setQuantity] = useState(bird.quantity)
    const [price, setPrice] = useState(bird.price)
    const [age, setAge] = useState(bird.age)
    const [weight, setWeight] = useState(bird.weight)
    const [source, setSource] = useState(bird.source)
    const [info, setInfo] = useState(bird.info)
    const [image, setImage] = useState(null)

    const changeBird = (bird) => {
            const selected = allBird.filter(b => {
            return b.id === bird
        })
        setBird(selected[0])
        setName(selected[0].name); setType(selected[0].type); setQuantity(selected[0].quantity)
        setPrice(selected[0].price); setAge(selected[0].age); setWeight(selected[0].weight)
        setSource(selected[0].source); setInfo(selected[0].info)
        setShow(true)
    }
    const submitForm = (e) => {
        console.log(image)
    }
  return (
    <div className='container'>
        {!showBird ?
        <div className='row'>
            {allBird.map(bird => (
                <button
                onClick={() => changeBird(bird.id)}
                className='col-md-3 bg-warning m-2' key={bird.id}>
                    <h3 className='text-dark'>{bird.name}</h3>
                    <p>Edit</p>
                </button>
            ))}
        </div> :
        <div>
            <div className='text-right'>
                <button type='button' onClick={() => setShow(false)} className="btn-close text-danger text-right bg-danger"></button>
            </div>
            <h3 className='text-dark'>Edit</h3>
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
                                    <option value="layers POL">layers Point of lay</option>
                                    <option value="layers POC">layers Point of Cage</option>
                                    <option value="layers DOC">DOC Layers</option>
                                    <option value="layers Spent">Spent Layers</option>
                                    <option value="Broiler DOC">DOC Broiler</option>
                                    <option value="Broiler 8 weeks">Broiler 8 weeks</option>
                                    <option value="Turkey DOC">Turkey DOC</option>
                                    <option value="Broiler Table Size">Broiler Table Size</option>
                                    <option value="Others">Others</option>
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
        </div>}
    </div>
  )
}
