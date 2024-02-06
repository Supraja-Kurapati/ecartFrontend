import React from 'react'
import {NavLink,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Mobiles from './Mobiles'
import Laptop from './Laptop'
import Accessories from './Accessories'
import Tablet from './Tablet'
import Individual from '../Individual/Individual'

//import Cart from '../Nav/Cart'
import Login from '../Nav/Login'
import Register from '../Nav/Register'
// import { useRef } from 'react'
import Search from '../Nav/Search'
import CartItem from '../Nav/CartItem'


const Routing = () => {
 const linkStyle={
  textDecoration:"none",
  color:"Black"
 }
// const navref=useRef();
// const shownavbar=()=>{
//   navref.current.classList.toggle("responsivenavbar")
// }

  return (
    <>
    <div>
      {/* <BrowserRouter> */}
      <div className='ParentNavlink'>
{/* <div className='responsivenavbar'> */}
      <NavLink to='/' style={linkStyle}>    
         <img src='https://www.svgrepo.com/show/13696/house.svg' alt='Not Found' height=
        '30px' width='30px' style={{marginLeft:"5px"}}/>
       <div> Home</div></NavLink>

      <NavLink to='/Mobiles' style={linkStyle}><img src='https://img.freepik.com/free-vector/smart-phone-flat-style_78370-4084.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705968000&semt=ais' alt='Not Found' height=
        '30px' width='30px'style={{marginLeft:"5px"}}/>
 <div>Mobile</div></NavLink>

 <NavLink to='/Tablets' style={linkStyle}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Circle-icons-tablet.svg/1200px-Circle-icons-tablet.svg.png' alt='Not Found' height=
        '30px' width='30px'style={{marginLeft:"5px"}}/>
 <div>Tablet</div></NavLink>

      <NavLink to='/Laptop' style={linkStyle}><img src='https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706140800&semt=sph' alt='Not Found' height=
        '32px' width='30px' style={{marginLeft:"5px"}}/>
<div>Laptop</div></NavLink>

      <NavLink to='/Accessories' style={linkStyle}><img src='https://us.123rf.com/450wm/sergwsq/sergwsq1109/sergwsq110900040/10502566-icons-of-computer-vector-electronic-tv-printer-laptop-photo.jpg?ver=6' alt='Not Found' height=
        '30px' width='30px' style={{marginLeft:"20px"}}/>
<div>Accessories</div></NavLink>
{/* <div className='hamburger' onClick={shownavbar}>
      <div style={{display:"block"}}>
      <div className='topline'>-</div>
      <div className='bottomline'>-</div>
      </div>
    </div> 

</div>*/}
      </div>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Mobiles' element={<Mobiles/>}/>
        <Route path='/Tablets' element={<Tablet/>}/>
        <Route path='/Laptop' element={<Laptop/>}/>
        <Route path='/Accessories' element={<Accessories/>}/>
        <Route path='/Individual/:id' element={<Individual/>}/>
        <Route path='/cart' element={<CartItem/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
    </>
  )
}

export default Routing