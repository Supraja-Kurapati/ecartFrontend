import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../Redux/Slice'
import { removeItem } from '../Redux/Slice'
import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
const CartItem = () => {
  const cartItems=useSelector((state)=>state.cart.cart)
  const totalItemsinCart=useSelector((state)=>state.cart.totalquantity)
  const totalPriceinCart=useSelector((state)=>state.cart.totalPrice)
  // const totalPrice=useSelector(state=>state.cart)
  const dispatch=useDispatch();
  // const navigate=useNavigate()

  console.log(cartItems);
  console.log(totalItemsinCart);
  //console.log(totalPriceinCart);
  const handleRemoveItem=(item)=>{
   dispatch(removeItem({
     quantity:0
   }))
   console.log(item.id,"removeItem")

  }

//   const handleQuantitychange=(item,newQuantity)=>{
//    dispatch(updateQuantity({item,quantity:newQuantity}))
//  }
//  const incrementitem=(item)=>{
// dispatch(addItemToCart({...item,quantity:1}))
// console.log("increment",item.quantity);
//  }
const incrementitem=(item)=>{
  dispatch(incrementQuantity({...item,quantity:+1}))
  console.log("increment",item.quantity,item.sellingPrice);
   }
  
 const decrementitem=(item)=>{
  dispatch(decrementQuantity({quantity:-1,...item}))
  console.log("decrement",item.quantity,item.sellingPrice);

   }

  return (
    <>
    <div style={{display:'flex', flexDirection:'column',width:'auto',justifyContent:"center"}}>CartItem
      {
      cartItems.map((item,index) => ( 
        <>  
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
      
</> 

     ))} 

    </div>
    <div className='OrderDetailsWrapper'>
      <h3> Total items: {totalItemsinCart}</h3>
      <h3> Total Price :{totalPriceinCart}</h3>

      <NavLink to='/checkout'>
      <button className='CheckOut'>CheckOut</button>
      </NavLink>
      </div>

     </>

  )
}

export default CartItem