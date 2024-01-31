import React,{useState,useEffect} from 'react'
 import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'


const Tablet = () => {
  const notify=()=>toast("Added to Cart 🎉")

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
      <div className='parentProductDisplay' >
      {data.filter((e)=>e.category==="Tablet").map((item)=>(

      <div className='ProductDetailsDisplay'>
        <div className='Productstructure'>
        <div className='ProductDisplayimg'>
        <NavLink to={`/Individual/${item.id}`}>
   
        <img src={item.Image} alt='Not found' className='productImg' ></img></NavLink>
        </div>
      <div className='details'>
      <NavLink to={`/Individual/${item.id}`} >

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

export default Tablet