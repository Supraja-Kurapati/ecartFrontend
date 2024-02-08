import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrementQuantity, addItemToCart } from '../Redux/Slice'
import { removeItem } from '../Redux/Slice'
// import { useNavigate } from 'react-router-dom'
const CartItem = () => {
  const cartItems=useSelector((state)=>state.cart.cart)
  // const totalPrice=useSelector(state=>state.cart)
  const dispatch=useDispatch();
  // const navigate=useNavigate()

  
  const handleRemoveItem=(item)=>{
   dispatch(removeItem({
     quantity:0
   }))
   console.log(item.id,"removeItem")

  }

//   const handleQuantitychange=(item,newQuantity)=>{
//    dispatch(updateQuantity({item,quantity:newQuantity}))
//  }
 const incrementitem=(item)=>{
dispatch(addItemToCart({...item,quantity:1,...item.Price}))
console.log("increment",item.quantity);
 }
 const decrementitem=(item)=>{
  dispatch(decrementQuantity({quantity:0,...item}))
  console.log("decrement",item.quantity);
   }
  
  return (
    <>
    <div style={{display:'flex', flexDirection:'column',width:'auto',justifyContent:"center"}}>CartItem
      {
      cartItems.map((item,index) => ( 
        
        <div  key={item} className='ParentCartItem'>
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
     ))} 

    </div>
     <div>
     <h3> Total Price :</h3>
     </div>
     </>

  )
}

export default CartItem