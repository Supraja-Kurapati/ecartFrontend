import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
const cartItems=useSelector(state=>state.ecom.cart)
 console.log(cartItems);
  return (

   
<div className='CartWrapper'>
<hr/>

<div>
{/* {
 cartItems.filter(e=>parseInt(e.id)===item.id).map(item=>{
  <div key={item.id}>
  <h2>{item.Device}</h2>
  </div>
 })
} */}
{
  cartItems.map(item=>(
    <div key={item.id}>
<h2>{item.Device}</h2>
    </div>
  ))
}
</div>
</div>
    )
}

export default Cart