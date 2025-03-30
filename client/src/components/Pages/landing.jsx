import React from 'react'
import Products from './products'
import Navbar from './navbar';
import '../styles/landing.css'

const landing = () => {
    return (
        <div>
            <Navbar/>
            <div className="page">

                <div className="main">
                    <h1 className='text-content'>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
                    <p className='bio'>Browse through our diverse range of meticulously crafted garments, designed <br />to bring out your individuality and cater to your sense of style.</p>
                    <div className="details">
                        <div className="number number1">
                            <h1>200+</h1>
                            <p>International Brands</p>
                        </div>
                        <div className="number number2">
                            <h1>2000+</h1>
                            <p>High-quality products</p>
                        </div>
                        <div className="number number3">
                            <h1>30000+</h1>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <ul className="brands">
                        <li className="brandnames">VERSACE</li>
                        <li className="brandnames">ZARA</li>
                        <li className="brandnames">GUCCI</li>
                        <li className="brandnames">PRADA</li>
                        <li className="brandnames">H&M</li>
                    </ul>
                </div>
            </div>
            
            <Products/>

        </div>
    )
}

export default landing