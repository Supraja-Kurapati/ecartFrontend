 import React,{useEffect} from 'react'
 import { useSelector } from 'react-redux'
  import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import CartEmpty from './CartEmpty';
const Cart = () => {
     //const cartItems=useSelector((state)=>state.cart.cart)
     let cartLength=useSelector((state)=>state.cart.cart.length)
     console.log(cartLength);
//   const dispatch=useDispatch();
   const navigate=useNavigate()

//    const handleRemoveItem=(item)=>{
//     dispatch(removeItem({
//       quantity:0
//     }))
//     console.log(item.id,"removeItem")

//    }

//    const handleQuantitychange=(item,newQuantity)=>{
//     dispatch(updateQuantity({item,quantity:newQuantity}))
//   }
//   const incrementitem=(item)=>{
// dispatch(incrementQuantity({quantity:1,...item}))
// console.log("increment",item.quantity);
//   }
  useEffect(()=>{
    const token=localStorage.getItem('token')
    console.log(token);
    if(!token){
      navigate('/login')
    alert('You have not logged in..')
    }
    else{
      axios.get('https://ecartbackend-qtwf.onrender.com/api/store',{
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
  return(
<>
 <div className="cart__left">
   <div>
     {cartLength===0?<CartEmpty/>:<CartItem/>}
  </div>
</div>

</>
)
    }
    export default Cart





