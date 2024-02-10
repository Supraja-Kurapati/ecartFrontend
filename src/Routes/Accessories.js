import React,{useState,useEffect} from 'react'
 import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../Redux/Slice'
const Accessories = () => {
  const notify=()=>toast("Added to cart 🎉")
    const [data,setData]=useState([])
    const dispatch=useDispatch();
    const handlecart=(item)=>{
      //dispatch(addItemToCart());
      dispatch(addItemToCart({
         ...item,
        quantity:1,
        sellingPrice:item.sellingPrice
      }))
      notify();
      console.log("cart clicked",item);
        }

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
      {data.filter((e)=>e.category==="Accesories").map((item)=>(

      <div className='ProductDetailsDisplay'>
        <div className='Productstructure'>
        <div className='ProductDisplayimg'>
        <NavLink to={`/Individual/${item.id}`}>
 
        <img src={item.Image} alt='Not found' className='productImg' ></img></NavLink>
        </div>
      <div className='details'>
      <NavLink to={`/Individual/${item.id}`}>

      <h4 className='navlink'>{item.Device.slice(0,30)}</h4></NavLink>
      <h5>Sale Price: {item.sellingPrice}</h5>
      <h5 className='linethrough'>M.R.P.:{item.Price}</h5>
      <button className='addtocart' onClick={()=>handlecart(item)}>Add To Cart</button>
      <ToastContainer autoClose={1000}/>

      </div>
      </div>
      </div>
    ))}
    </div>

    </div>
  )
}

export default Accessories