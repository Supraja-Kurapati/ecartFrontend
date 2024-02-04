 import React from 'react'
 import { useSelector } from 'react-redux'
import Data from '../DATA/Data';
//  import CartItem from './CartItem';

const Cart = () => {
// const cartItems=useSelector(state=>state.ecom.cart)
// //  console.log(Data);


 const cart=useSelector(state=>state.cart.cart)
 console.log(Data);
 //console.log(cart);
return(
  <>
{
  cart.map(item=>(
<div key={item.id}>
  <img src={item.Image} alt='Not Found'/>
<p>{item.Device}</p>
</div>
   ))
}
</>
)
    }
    export default Cart

// {/* <div className="cart__left">
//   <div>
//     <h3>Shopping Cart</h3>
//      {
//      cart.map((item) => ( 
//        <CartItem
//         key={item.id}
//         id={item.id}
//         Image={item.Image}
//         Device={item.Device}
//         quantity={item.quantity}
//         price={item.Price}
//       /> 
//      ))} 
//   </div>
// </div> */}




