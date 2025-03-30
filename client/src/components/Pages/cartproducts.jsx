import React from "react";
import { useState,useEffect } from "react";
import Buycard from './buycard'
import '../styles/cartproducts.css'
import axios from "axios";

function product() {

  const [products, setproducts] = useState([])

  const getAPI = async() =>{
    let details = await axios.get("http://localhost:8000/get-cart-products")
    setproducts(details.data)
  }

  useEffect(() => {
    getAPI()
  }, [])

  return (
    <div className="cartproducts-view">
      {products.map((item) => (
        <Buycard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default product;
