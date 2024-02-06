import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
const Search = () => {
   const [squery,setSQuery]=useState('')
    const [data,setData]=useState([])
    console.log(setData);
   useEffect(()=>{
    const fetchData=async()=>{
      try{
        const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
        setSQuery(resp.data)
      }
      catch(err){
     console.log(err)
      }
    }
    fetchData()
  },[squery])

   const receiveQuery=(receiver)=>{
      setSQuery(receiver)
       console.log(squery);

  }

  return (
    <div>  
     <Navbar requestsearch={receiveQuery}/> 
     <h2>{squery}</h2>
      <div>
      </div>
      {
        data.filter((e)=>e.squery).map((item)=>(
          <div key={item.id}>
          <h2>{item.Device}</h2>
          </div>
        ))
      } 
  
</div>
  )
}

export default Search