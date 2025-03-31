import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/login.css'

const login = () => {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/user-login", { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "logged in") {
          navigate('/home')
        }
        else if (result.data === "your password is incorrect") {
          alert("Incorrect password")
        }
        else if (result.data === "no user found") {
          alert("User not found")
        }
      });
  };

  return (
    <div className='login-page'>
    
      <div className="login-box">
        <form onSubmit={handlesubmit}>
          <h1>Welcome Back</h1>
          {/* <h2>EMAIL ID</h2> */}
          <input className='field' type="text" placeholder='Enter your email' onChange={(e) => { setemail(e.target.value) }} />
          {/* <h2>PASSWORD</h2> */}
          <input className='field' type="text" placeholder='Enter your password' onChange={(e) => { setpassword(e.target.value) }} />
          <button className='signup-button'>Login</button>
        </form>
      </div>

      <div className="welcomebackbox">
        <h3 className='journey'>Let's Start the Journey</h3>
        <p>New to this site ?</p>
        <Link to="/"><button className='login-button'>Sign-up</button></Link>
      </div>

    </div>
  )
}

export default login