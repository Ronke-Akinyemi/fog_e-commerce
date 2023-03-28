import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { CartContext } from '../App'
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Invoice } from '../components/Invoice';
import { PDFDownloadLink } from '@react-pdf/renderer';

export const Carts = () => {
  const cart = useContext(CartContext).cart
  const [cartLength] = useState(cart.length)
  const deleteItem = useContext(CartContext).deleteItem
  // const updateCart = useContext(CartContext).updateCart
  const [modal, setModal] = useState(false)
  const showModal = () => setModal(true)
  const [email, setEmail] = useState("")
  const [isLoading, setIsloading] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const navigate = useNavigate()
  const hideModel = () => {
    setModal(false)
  }

  if (cart.length < 1){
    navigate("/shop")
  }
  let total = 0
  cart.forEach(element => {
    total += (element.price * element.quantity)
  });
  const inform = () => toast.warning("Item deleted from cart", {
    position:"top-right"
  })
  const makePayment = (e) => {
    setIsloading(true)
    if (!email || !phone || !address || !name) return;
    let data = []
    e.preventDefault()
    cart.forEach(element => {
    data.push({"id": element.id, "quantity": element.quantity})
  });
    const item = {email, name, phone, address, "data": data}
    fetch('http://localhost:8007/pay', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        .then(res => {
        // if (!res.ok){
        //     throw Error("Resources not found")
        // }
        return res.json()
        })
        .then(data => {
          setIsloading(false)
          window.location.href = data.data.authorization_url
          localStorage.removeItem("fogCart")
          // localStorage.setItem("fogRef", JSON.stringify(data.data.reference))
          navigate("/shop")
        })
        .catch(error => console.log('error', error));
  }

  return (
    <div>
      {isLoading ? <Loading/> :
      <>
      {cartLength ?
      <div className='m-3 p-3'>
    <div className='container-fluid'>
      <div className='table-responsive'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
          {
            cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price}</td>
                <td> <button type="button" className="btn btn-danger" onClick={() => {
                  deleteItem(item.id)
                  inform()
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg></button></td>
              </tr>
            ))
          }
          </tbody>
        </Table>

      </div>
      <p className='justify-content-center align-items-center'>Total: {total}</p>
      <button onClick={showModal} type="button" className="btn btn-primary">Check out</button>
    </div>
    <div>
      {modal && <div className='modal-container'>
        <div className='mud'>
          <div className="canBtnBG">
            <button type='button' className="canBtn" onClick={hideModel} ><span aria-hidden="true">&times;</span></button>
          </div>
          <div className='align-items-left'>
            <h1 className='oA'>
              Total : N {total}
            </h1>
            <p className='text-danger'>Delivery fee not yet included!!!</p>
          </div>
            <div>
            <form onSubmit={makePayment}>
              <div className='row'>
                <div className='col-sm-6 form-outline' >
                  <label className="form-label oA">Name</label><br></br>
                    <input
                     className="form-control"
                    type="text"
                    required
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className='col-sm-6 form-outline' >
                  <label className="form-label oA"> <i className="fa fa-envelope prefix grey-text"></i> Email</label><br></br>
                  <input
                  className="form-control"
                  type="email"
                  required
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>
                <div className='col'>
                  <label className="form-label oA"> <i className="fa fa-phone prefix grey-text"></i> Phone Number</label><br></br>
                  <input
                   className="form-control"
                    type="tel"
                    required
                    value = {phone}
                    onChange = {(e) => setPhone(e.target.value)}
                    ></input>
                </div>
                <div className='col'>
                  <label className="form-label oA"> <i className="fa fa-map-marker prefix grey-text"></i> Address</label><br></br>
                  <textarea
                   className="form-control" rows="4"
                   required
                    value = {address}
                    onChange = {(e) => setAddress(e.target.value)}
                    >
                  </textarea>
                </div>

              <div className="justify-content-center mt-5 align-item-center d-flex gap-1">
                          <PDFDownloadLink document ={<Invoice name="Sam" total={total} cart={cart}/>} fileName="Invoice"><button type="button" className="btn btn-secondary"> Download Invoice </button> </PDFDownloadLink>
                        <button type="submit" className="btn btn-primary">Pay Online</button>

                </div>
            </form>

          </div>
        </div>
      </div>}
    </div>
   </div> : <p>No item in cart, go home</p>} </>}</div>
  )
}
