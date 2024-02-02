import React, { useEffect, useState } from 'react'
import ecartlogo from '../Images/logo-white.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

const navigate=useNavigate()

 const handleLogin=()=>{
  try{
    const res= axios.post('https://ecartbackend-qtwf.onrender.com/api/login',{email,password})
    .then((res)=>{
      console.log(res.data,"User Logged In Data");

      if(res.data.msg==="Login Successful!"){
        console.log("login success")
        alert(res.data.msg)
        localStorage.setItem("token",res.data.token)
        setTimeout(() => {
          navigate('/')
        }, 1000);
  
      }
      else{
        alert("PassWord Incorrect")
      }
     if(res.data.msg==="You Haven't Registered Yet"){
      alert("you Haven't Registered Yet")
      setTimeout(() => {
        navigate('/register')
      }, 3000);
     }
    })
    console.log(res.data,"Response Data")

  }
  catch(err){
    console.log(err,"error in axios")
  }
 }
  return (
    <div className='LoginWrapper'>
        <div className='LoginLeft'>
          <div style={{width:"100%",display:"flex",justifyContent:"center"}}><img src={ecartlogo} alt='Not Found' className='ecartlogin'/></div>
          <h2 style={{textDecoration:"underLine"}}>LOGIN TO YOUR ACCOUNT</h2>

          <label><h3>Enter Email:</h3></label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <br/>
          <label><h3>Enter Password:</h3></label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <br/>

          <button onClick={handleLogin} className='LoginButton'>
            Log In
          </button>

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