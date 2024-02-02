import React,{useState,useEffect} from 'react'
 import axios from 'axios'
import { NavLink } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Mobiles = () => {

  const notify=()=>toast("Added to Cart 🎉")

    const [data,setData]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
      setData(resp.data)
      }
      catch(err){
console.error(err,"error in Fetching the data")
      }
    }
    fetchData()
  },[])


  return (
    <div >
      <div className='parentProductDisplay' >
      {data.filter((e)=>e.category==="Mobile").map((item)=>(

      <div className='ProductDetailsDisplay'>
        <div className='Productstructure'>
          
          <NavLink to={`/Individual/${item.id}`}>
        <div className='ProductDisplayimg'>
        <img src={item.Image} alt='Not found' className='productImg'></img>
        </div></NavLink>

      <div className='details'>
      <NavLink to={`/Individual/${item.id}`}>
      <h4 className='navlink'>{item.Device.slice(0,50)}</h4></NavLink>
      <h5>Sale Price: {item.sellingPrice}</h5>
      <h5 className='linethrough'>M.R.P.:{item.Price}</h5>
      <button className='addtocart' onClick={notify}>Add To Cart</button>
      <ToastContainer/>
      </div>
      </div>
      </div>
    ))}
    </div>

    </div>
  )
}

export default Mobiles