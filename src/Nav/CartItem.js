import React from "react";
import { incrementQuantity,decrementQuantity,removeItem } from "../Redux/Slice";

import { useDispatch } from "react-redux";

function CartItem({id,Image,Device,Price,quantity=0}){
    const dispatch=useDispatch()
    return(
        <div style={{border:"2px solid black"}}>
            <img src={Image} alt='item'/>
            <p>{Device}</p>
        <div>
        <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
      </div>
      <button onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>

    )
}



export default CartItem