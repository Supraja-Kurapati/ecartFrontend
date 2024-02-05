import React, { useState } from 'react'

import Navbar from './Navbar'
const Search = () => {
   const [query,setQuery]=useState('')
  // const [search,setSearch]=useState('')
  // const handleSearch=()=>{
  
  // }
  const receiveQuery=(receiver)=>{
    
      setQuery(receiver)
       console.log(query);

  }

  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     try{
  //       const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
  //       setSearch(resp.data)
  //     }
  //     catch(err){
  //    console.log(err)
  //     }
  //   }
  //   fetchData()
  // },[search])
  return (
    <div style={{display:"none"}}>  
    <Navbar requestSearch={receiveQuery}/>
{query}
      <div>
      </div>
      {/* {
        data.filter((data)=>d)
      }       */}
    {/* <div className='Searchbar'><input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='What you are Looking for?'/>
    <img src='https://www.svgrepo.com/show/7109/search.svg' alt='notFound' id='searchimg' onClick={handleSearch}/></div> */}
</div>
  )
}

export default Search