import React from 'react'
import spinner from '../Images/Spinner-1s-200px.gif'
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
const CheckOut = () => {
   const navigate=    useNavigate();
 //  let cartLength=useSelector((state)=>state.cart.cart.length)
setTimeout(() => {
    navigate('/')
    
}, 4000);
  return (
    <div>
        <div className='thankuWrapper'>

           <div className='thnkutxt'>Thank you For Shopping <br/>With Us!
<br/>
<div style={{display:'flex', justifyContent:'center'}}>
<img src={spinner} alt='..' style={{height:'130px', width:'130px'}}/>
<span className='thnkutxt'>Redirecting to HomePage
</span></div>
</div>
        </div>
    </div>
  )
}

export default CheckOut