import React from 'react'
import { useState,useEffect } from 'react';
import '../styles/mycart.css'
import Cartproducts from './cartproducts'
import Navbar from './navbar';
import axios from 'axios';

const mycart = () => {

  const [price, setprice] = useState()

  const getAPI = async() =>{
    let details = await axios.get("http://localhost:8000/get-cart-products-price")
    setprice(details.data)
  }

  useEffect(() => {
    getAPI()
  })

  return (
    <div>
      <Navbar/>
      <h1 className='yourcart'>Your Cart</h1>

      <div className="boxes">

        <div className="cart-items">
          <Cartproducts />
        </div>

        <div className="order-summary">

          <h1 className='summary-head'>Order Summary</h1>
          <div className="subtotalcost">
            <h3 className='cart-text'>Subtotal</h3>
            <p>${price}</p>
          </div>
          <div className="deliverycost">
            <h3 className='cart-text'>Delivery Fees</h3>
            <p>$35</p>
          </div>
          <div className="totalcost">
            <p className='cart-text-last' >Total</p>
            <p>${price+35}</p>
          </div>
          <button className='buy-now'>Buy Now</button>
        </div>

      </div>
    </div>
  )
}

export default mycart