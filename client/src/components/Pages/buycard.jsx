import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import '../styles/buycards.css'

const buycard = (props) => {
    const [count,setcount] = useState(1)

    useEffect(() => {
        if (count == 0){
            const product = {
                id: props.id,
                price: props.price,
            };
            axios.delete("http://localhost:8000/remove-cart-product",{data: product})
            .then((res)=>{console.log(res.data)})
        }
    }, [count])

  return (
    <div>
        <div className="card">
            <div className="cloth-image-container">
                <img className='cloth-image' src={props.image} alt="" />
            </div>
            <div className="cloth-details">
                <h2>{props.title}</h2>
                <h2>${props.price}</h2>
            </div>

            <button className="quantity" >
                <button onClick={()=>{setcount(count-1)}} className="subtract">-</button>
                {count}
                <button onClick={()=>{setcount(count+1)}} className="add">+</button>
            </button>

        </div>
    </div>
  )
}

export default buycard