import React, { useEffect,useState } from 'react'


const Search = () => {
  const [search,setSearch]=useState('')
  const handleSearch=()=>{
  
  }
  // useEffect(()=>{
  //   console.log("search");
  // })
  return (
    <div>        
    <div className='Searchbar'><input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='What you are Looking for?'/>
    <img src='https://www.svgrepo.com/show/7109/search.svg' alt='notFound' id='searchimg' onClick={handleSearch}/></div>
</div>
  )
}

export default Search