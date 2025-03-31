import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/signup.css'

const signup = () => {

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/user-signup",{name,email,password})
    .then(result => {console.log(result)
    navigate('/login')
    });
  };

  return (
    <div className='signup-page'> 
      <div className="welcomebox">
        <h3 className='journey'>Let's Start the Journey</h3>
        <p>Already have an account ?</p>
        <Link to="/login"><button className='login-button'>Login</button></Link>
      </div>
      <div className="signup-box">
        <form onSubmit={handlesubmit} className='form'>
          <h1>Create Account</h1>
          <input className='field' type="text" placeholder='Enter your name' required onChange={(e)=>{setname(e.target.value)}} />
          <input className='field' type="email" placeholder='Enter your email id' required onChange={(e)=>{setemail(e.target.value)}} />
          <input className='field' type="password" placeholder='Enter your password' required pattern=".*[A-Z].*" title="Password must contain at least one uppercase letter" onChange={(e)=>{setpassword(e.target.value)}} />
          <button className='signup-button'>Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default signup