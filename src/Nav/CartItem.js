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
import {  useSelector } from 'react-redux'

const CartItem = () => {
  const cartItems=useSelector(state=>state.cart.cart)
  return (
    <div>CartItem
      {
        cartItems.map(item=>(
          <div key={item.id}>
            <h3>{item.Device}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default CartItem