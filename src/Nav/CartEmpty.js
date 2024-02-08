import React from 'react'
import { NavLink } from 'react-router-dom'
const CartEmpty = () => {
   
  return (
  <>
    <div className='CartEmpty'>
    <div style={{display:"flex", justifyContent:"center"}}>
    <NavLink to='/'>  
        <h3 className='continueshopping'>Continue Shopping</h3>
    </NavLink>
    </div>

    </div>
    </>
  )
}

export default CartEmpty