import React, { useEffect, useState } from 'react'
import ecartlogo from '../Images/logo-white.png'
import { NavLink } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState([])
  const [password,setPassword]=useState([])

 const handleLogin=()=>{
    console.log(email);
 }
  return (
    // <div>
    // <button id='loginbutton' >Login</button>
    // </div>
    <div className='LoginWrapper'>
        <div className='LoginLeft'>
          <div><img src={ecartlogo} alt='Not Found' className='ecartlogin'/></div>
          <h2 style={{textDecoration:"underLine"}}>LOGIN TO YOUR ACCOUNT</h2>

          <label><h3>Enter Email:</h3></label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <br/>
          <label><h3>Enter Password:</h3></label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <br/>

          <button onClick={handleLogin} className='LoginButton'>Log In</button>
    
        </div>

      <div className='LoginRight'>
        <h3>New here👀</h3>
        <h4 style={{color:"gray"}}>Click on the Sign Up button Below To Register⤵</h4>
       <NavLink to='/register'>
        <button className='Registerbutton'>Register</button>
        </NavLink>
      </div>

    </div>
  )
}

export default Login