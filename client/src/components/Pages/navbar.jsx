import React from 'react'
import '../styles/navbar.css'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";

const navbar = () => {
    return (
        <div>
            <div className="navbar">
                <ul className="nav-list">
                    <li className="nav-item brand"><Link to="/home"><h1>Shop.co</h1></Link></li>

                    <div className="right-items">

                        <li className="nav-item">
                            <div className='searchbar'>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                />
                            </div>
                        </li>
                        <li className="nav-item"><Link to="/mycart"><FaShoppingCart /></Link></li>
                        <li className="nav-item"><Link to="/myprofile"><FaUser /></Link></li>

                    </div>
                </ul>
            </div>
        </div>
    )
}

export default navbar