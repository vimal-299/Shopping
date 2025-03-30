import React from 'react'
import axios from 'axios'
import '../styles/cards.css'

const cards = (props) => {

    const handleaddtocart = async () => {
        try {
            const product = {
                id: props.id,
                image: props.image,
                title: props.title,
                price: props.price,
                quantity: 1
            };
            axios.post("http://localhost:8000/add-cart-product", product)
            .then(action=>{
                if (action.data === "Product out of stock"){
                    alert("Sorry! Product is out of stock")
                }
            })
            axios.put(`http://localhost:8000/update-quantity/${props.id}`)
        } catch (error) {
          console.error("Error adding product to cart:", error.message);
        }
      };

    return (
        <div>
            <div className="home-card" onClick={handleaddtocart}>
                <div className="home-cloth-image-container">
                    <img className='home-cloth-image' src={props.image} alt="" />
                </div>
                <div className="home-cloth-name">
                    <h2>{props.title}</h2>
                </div>
                <div className="home-cloth-price">
                    <h2>${props.price}</h2>
                </div>
            </div>
        </div>
    )
}

export default cards