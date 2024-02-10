// import React, { useState,useEffect } from 'react'
// import axios from 'axios'
// import Navbar from './Navbar'
// const Search = () => {
//    const [squery,setSQuery]=useState('')
//     const [data,setData]=useState([])
//     console.log(setData);
//    useEffect(()=>{
//     const fetchData=async()=>{
//       try{
//         const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
//         setSQuery(resp.data)
//       }
//       catch(err){
//      console.log(err)
//       }
//     }
//     fetchData()
//   },[squery])

//    const receiveQuery=(receiver)=>{
//       setSQuery(receiver)
//        console.log(squery);

//   }

//      const [search,setSearch]=useState('')

//    const handleSearch=()=>{
//     // requestsearch(search)
//    }

//   return (
//     <div>  
//          <div>        
//     <div className='Searchbar'><input type='text' placeholder='What you are Looking for?' value={search} onChange={(e)=>setSearch(e.target.value)}/>
//    <img src='https://www.svgrepo.com/show/7109/search.svg' alt='search' id='searchimg' onClick={handleSearch}/></div>
// </div>

//      <Navbar requestsearch={receiveQuery}/> 
//      <h2>{squery}</h2>
//       <div>
//       </div>
//       {
//         data.filter((e)=>e.squery).map((item)=>(
//           <div key={item.id}>
//           <h2>{item.Device}</h2>
//           </div>
//         ))
//       } 
  
// </div>
//   )
// }

// export default Search

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Search = () => {
  const [searchTerm,setSearchTerm]=useState('')
  const [searchResult,setSearchResult]=useState([])
const handleSearch=async()=>{
  try{
    const response=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
    setSearchResult(response.data)
  }
  catch(err){
    console.error(err,"error in fetching")
  }
}

const DataFilter=searchResult.filter((item)=>
item.Device.toLowerCase().includes(searchTerm.toLowerCase())
)
  return (
    <div>
  <div className='SearchWrapper'>
    <div>        
 <div className='Searchbar'><input type='text' placeholder='What you are Looking for?' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
   <img src='https://www.svgrepo.com/show/7109/search.svg' alt='search' id='searchimg' className='Simg' onClick={handleSearch}/></div></div>
 </div>
 <div className='searchResultWrapper'>
 <ul>
 {
  DataFilter.map((item)=>(
    <li key={item.id}>
      <div className='dataSearch'>
        <NavLink to={`/Individual/${item.id}`}>
        <div className='dsimg'>
      <img src={item.Image} alt='NotFound' className='searchimgdata'/></div></NavLink>
      <div className='dsDetails'>
      <h4>{item.Device.slice(0,30)}...</h4>
       <h5>Price:{item.sellingPrice}</h5>
       <span style={{color:'red'}}>Offer:{item.offer}</span>
      </div>
      </div>

      
      </li>
  ))
 }
 </ul>
 </div>
    </div>
    
  )
}

export default Search