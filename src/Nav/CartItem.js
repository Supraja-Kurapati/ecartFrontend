// import React from "react";
// import { incrementQuantity,decrementQuantity,removeItem } from "../Redux/Slice";

// import { useDispatch } from "react-redux";

// function CartItem({id,quantity=0}){
//     const dispatch=useDispatch()
//     return(
//         <div style={{border:"2px solid black"}}>
//             <img src={Image} alt='item'/>
//             <p>{Device}</p>
//         <div>
//         <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
//         <p>{quantity}</p>
//         <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
//       </div>
//       <button onClick={() => dispatch(removeItem(id))}>
//             Remove
//         </button>
//       </div>

//     )
// }



// export default CartItem

import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {removeItem,updateQuantity }from '../Redux/Slice'
const CartItem = () => {
  const cartItems=useSelector((state)=>state.cart.cart)
  const dispatch=useDispatch();

  const handleRemoveItem=(id)=>{
    dispatch(removeItem(id))
  };

  const handleQuantitychange=(id,newQuantity)=>{
    dispatch(updateQuantity({id,quantity:newQuantity}))
  }
  return (
    <div>CartItem
      {
        cartItems.map((item,index)=>(
          <div key={index}>
            <h2>{item.id}</h2>
            <h3>{item.Device}</h3>

            <button onClick={handleRemoveItem}>Remove</button>
            <button onClick={handleQuantitychange}>quantityChange</button>
            </div>
        ))
      }
    </div>
  )
}

export default CartItem