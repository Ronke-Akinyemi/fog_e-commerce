import React from 'react'
import Table from 'react-bootstrap/Table';
import { CartContext } from '../App'
import { useContext } from 'react';


export const Carts = () => {
  const cart = useContext(CartContext).cart
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Amount</th>
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
        </tr>
        ))
      }
      </tbody>
    </Table>
    </>
  )
}
