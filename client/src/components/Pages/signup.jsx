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

      <div className="signup-box">
        <form onSubmit={handlesubmit}>
          <h2>NAME</h2>
          <input type="text" placeholder='Enter your name' onChange={(e)=>{setname(e.target.value)}} />
          <h2>EMAIL ID</h2>
          <input type="text" placeholder='Enter your email id' onChange={(e)=>{setemail(e.target.value)}} />
          <h2>PASSWORD</h2>
          <input type="text" placeholder='Enter your password' onChange={(e)=>{setpassword(e.target.value)}} />
          <button>Sign Up</button>
        </form>
        <p>Already have an account ?</p>
        <Link to="/login"><button>Login</button></Link>
      </div>

    </div>
  )
}

export default signup