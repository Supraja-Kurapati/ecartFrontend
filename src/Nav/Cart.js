 import React,{useEffect} from 'react'
 import { useSelector,useDispatch } from 'react-redux'
  import axios from 'axios';
//import Data from '../DATA/Data';
 // import CartItem from './CartItem';
 import { removeItem } from '../Redux/Slice';
 import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const cartItems=useSelector(state=>state.cart.cart)
  const dispatch=useDispatch();
   const navigate=useNavigate()

   const handleremove=(item)=>{
    dispatch(removeItem(item))
   }

  useEffect(()=>{
    const token=localStorage.getItem('token')
    console.log(token);
    if(!token){
      navigate('/login')
    alert('You have not logged in..')
    }
    else{
      axios.get('http://localhost:5132/api/cart',{
        headers: {
          authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
      },[navigate])
  
//const cartItems=useSelector(state=>state.ecom.cart)
//  console.log(Data);


 //const cart=useSelector(state=>state.cart.cart)
 //console.log(Data);
 //console.log(cart);
return(
  <>
  <h2> this is cart</h2>
{
  cartItems.map(item=>(
<div key={item.id}>
<p>{item.Device}</p>
  <img src={item.Image} alt='Not Found'/>
<button onClick={()=>handleremove(item)}>Remove</button>
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




