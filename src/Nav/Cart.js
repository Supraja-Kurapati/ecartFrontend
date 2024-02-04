 import React from 'react'
 import { useSelector } from 'react-redux'
 import CartItem from './CartItem';

const Cart = () => {
// const cartItems=useSelector(state=>state.ecom.cart)
// //  console.log(Data);


 const cart=useSelector((state)=>state.cart)
 console.log(cart);
return(
<div className="cart__left">
  <div>
    <h3>Shopping Cart</h3>
    {cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        Image={item.Image}
        Device={item.Device}
        quantity={item.quantity}
        price={item.Price}
      />
    ))}
  </div>
</div>
)
    }
    export default Cart
//   return (
// <div className='CartWrapper'>
// <hr/>
// <div>
//   <h1> Cart ITEMS </h1>
// {
//   cartItems.map(item=>(
//     <div key={item.id}>
// <h2>{item.Device}</h2>
//     </div>
//   ))
// }
// </div>
// </div>
//     )
// }

// export default Cart




