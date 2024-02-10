import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../Redux/Slice'
import { removeItem ,removeAll} from '../Redux/Slice'
import { NavLink } from 'react-router-dom'
import OrderDetails from './OrderDetails'
// import { useNavigate } from 'react-router-dom'
const CartItem = () => {
  const cartItems=useSelector((state)=>state.cart.cart)
  const totalItemsinCart=useSelector((state)=>state.cart.totalquantity)
  // const totalPriceinCart=useSelector((state)=>state.cart.totalPrice)
  // const totalPrice=useSelector(state=>state.cart)
  const dispatch=useDispatch();
  // const navigate=useNavigate()

  console.log(cartItems);
  console.log(totalItemsinCart);
  const handleRemoveItem=(item)=>{
   dispatch(removeItem({
     quantity:0
   }))
   console.log(item.id,"removeItem")

  }

const incrementitem=(item)=>{
  dispatch(incrementQuantity({...item,quantity:+1}))
  console.log("increment",item.quantity,item.sellingPrice);
   }
  
 const decrementitem=(item)=>{
  dispatch(decrementQuantity({quantity:-1,...item}))
  console.log("decrement",item.quantity,item.sellingPrice);

   }
// const checkout=()=>{
//   dispatch(removeAll())
// }
  return (
    <>
    <div style={{display:'flex', flexDirection:'column',width:'auto',justifyContent:"center"}}>CartItem
      {
      cartItems.map((item,index) => ( 
        <>  
        <div  key={index} className='ParentCartItem'>
        {/* id={item.id} */}
        <div className='cartitemWrapper'>
        <div>
        <img src={item.Image} alt='Not Found' className='cartImg'/>
        </div>
        <div className='cartitemdetails'>
        <span className='devicename'>{item.Device} </span>
       <span className='devicename'> price:{item.sellingPrice}</span>
<div className='qty'>
        <button onClick={()=>decrementitem(item)} className='btnclr'>-</button> 
         {item.quantity}
        <button onClick={()=>incrementitem(item)} className='btnclr'>+</button>

 </div>       
        <button onClick={item.quantity>0?()=>handleRemoveItem(item):undefined} className='rmvbtn'>Remove</button>

         </div>
 </div>


      </div> 

</> 

     ))} 
     <div>      <OrderDetails/>
</div>
     {/* <div className='OrderDetailsWrapper'>
      <h3> Total items: {totalItemsinCart}</h3>
      <h3> Total Price :{totalPriceinCart}</h3>

      <NavLink to='/checkout'>
      <button className='CheckOut' onClick={()=>checkout}>CheckOut</button>
      </NavLink>
      </div> */}
    </div>
   

     </>

  )
}

export default CartItem