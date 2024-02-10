import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeAll } from '../Redux/Slice'
const OrderDetails = () => {
    const totalPriceinCart=useSelector((state)=>state.cart.totalPrice)
    const totalItemsinCart=useSelector((state)=>state.cart.totalquantity)
   const dispatch=useDispatch()
    const checkout=()=>{
        dispatch(removeAll())
      }
      

  return (
    <div>
        <div className='OrderDetailsWrapper'>
      <h3> Total items: {totalItemsinCart}</h3>
      <h3> Total Price :{totalPriceinCart}</h3>

      <NavLink to='/checkout'>
      <button className='CheckOut' onClick={()=>checkout}>CheckOut</button>
      </NavLink>
      </div>

    </div>
  )
}

export default OrderDetails