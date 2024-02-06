import React, { useState } from 'react';
import Logo from '../Images/logo-white.png'
import '../App.css'
import { NavLink } from 'react-router-dom';
import cart from '../Images/shopping-cart-icon.png'
import { useNavigate } from 'react-router-dom';
 const Navbar = () => {
// const Navbar=({requestsearch})=>{
  const navigate=useNavigate()
  const handlehome=()=>{
    navigate('/')
  } 
  const [loggedIn,setLoggedIn]=useState(false)

  const handlelogin=()=>{
    setLoggedIn(true)
  }
  const handlelogout=()=>{
    localStorage.removeItem('token')
    setTimeout(()=>{
    alert("you ave loggedout")
      setLoggedIn(false)
    },6000)
  }
  //  const [search,setSearch]=useState('')

  //  const handleSearch=()=>{
  //   requestsearch(search)
  //  }
  return (

    <div className='navbar'>
        <div className='Logo'><img src={Logo} alt='notfound' id='Logo' onClick={handlehome}/></div>
        <div className='nav2'>
   {/* <div>        
    <div className='Searchbar'><input type='text' placeholder='What you are Looking for?' value={search} onChange={(e)=>setSearch(e.target.value)}/>
   <NavLink to='/search'> <img src='https://www.svgrepo.com/show/7109/search.svg' alt='search' id='searchimg' onClick={handleSearch}/></NavLink></div>
</div> */}
{/* <Search/> */}

<NavLink to='/cart'>    <div>
    <div className='cart'><img id='cartimg' src={cart} alt='Not Found' 
   /></div>

    </div>
</NavLink>

  
    {/* <NavLink to='/login'>    <div>
    <button id='loginbutton'>Login</button>
    </div>
</NavLink>
<Logout/> */}
{loggedIn?(<img src='https://cdn-icons-png.flaticon.com/512/1053/1053210.png' alt='Logout' id='logoutbutton' onClick={handlelogout}/>):(
  <NavLink to='/login'>   
   <div>
    <button id='loginbutton' onClick={handlelogin}>Login</button>
    </div>
</NavLink>
)
}



       
           {/* <Route path='/search' element={<Search/>}/> */}
           {/* <Route path='/cart' element={<Cart/>}/> */}
           {/* <Route path='/login' element={<Login/>}/> */}
           
        </div>
    </div>

    
  )
}

export default Navbar