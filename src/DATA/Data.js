// import React, { createContext,useState,useEffect } from 'react'
// import axios from 'axios'
// export const DataContext = createContext() ;

// function DataFetch(props){
//   const [data,setData]=useState([])
//   useEffect(()=>{
//     const fetchData=async()=>{
//       try{
//         const resp=await axios.get('http://localhost:5132/api/store')
//       setData(resp.data)
//       }
//       catch(err){
// console.error(err,"error in Fetching the data")
//       }
//     }
//     fetchData()
//   },[])
//   return (
//    <DataContext.Provider value={[data]}>
//     {props.children}
//    </DataContext.Provider>
//     // <div>
//     //   {data.map((item)=>(
//     //   <div key={item.id}>
//     //   <h1>  {item.Device}
//     //   </h1>
//     //   <img src={item.Image} alt='Not found'></img>
//     //   </div>
//     // ))}
     

//     // </div>
    
//   )
// }

// export default DataFetch

import React,{useState,useEffect} from 'react'
 import axios from 'axios'

const Data = () => {
    const [data,setData]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const resp=await axios.get('http://localhost:5132/api/store')
      setData(resp.data)
      }
      catch(err){
console.error(err,"error in Fetching the data")
      }
    }
    fetchData()
  },[])

  return (
    <div>
      {data.map((item)=>(
      <div key={item.id}>
      <h1>  {item.Device}
      </h1>
      <img src={item.Image} alt='Not found'></img>
      </div>
    ))}
    </div>
  )
}

export default Data