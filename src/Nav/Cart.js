import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
const cartItems=useSelector(state=>state.ecom.cart)
//  console.log(Data);


  return (
<div className='CartWrapper'>
<hr/>
<div>
  <h1> Cart ITEMS </h1>
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



