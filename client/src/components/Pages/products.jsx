import React from "react";
import { useState,useEffect } from "react";
import Cards from './cards'
import '../styles/products.css'
import axios from "axios";

function Product() {

  const [products, setproducts] = useState([])

  const fetchAPI = async() =>{
    let details = await axios.get("http://localhost:8000/get-home-products")
    setproducts(details.data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="products-view" >
      {products.map((item) => (
        <Cards
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

export default Product;
