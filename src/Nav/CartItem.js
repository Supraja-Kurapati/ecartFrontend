import { incrementQuantity,decrementQuantity,removeItem } from "../Redux/Slice";

import { useDispatch } from "react-redux";

function CartItem({id,Image,Device,quantity=0}){
    const dispatch=useDispatch()
    return(
        <div>
            <img className="cartItem__image" src={Image} alt='item'/>
            <p>{Device}</p>
        <div className='cartItem__incrDec'>
        <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
      </div>
      <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>

    )
}

export default CartItem