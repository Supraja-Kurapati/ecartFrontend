import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import '../App.css'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/Slice';
const Individual = () => {
  const notify=()=>toast("Added to Cart 🎉")
  
    const individualid=useParams().id;
    const [data,setData]=useState([])
    const dispatch=useDispatch()
    const handlecart=(item)=>{
      //dispatch(addItemToCart());
      dispatch(addItemToCart({
         ...item,
        quantity:1,
        sellingPrice:item.sellingPrice
      }))
      notify();
    }      

    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
          setData(resp.data)
        }
        catch(err){
          console.error(err,"error")
        }
      }
      fetchData()
    },[])

    useEffect(()=>{
      console.log(data);
    },[data])
  return (
  <div style={{height:"auto"}}>
      
   {data.filter((data)=>data.id===individualid).map((item,index)=>{
   return(
    <>
    <div className='IndividualPagestructure'>
      <div className='individualImg'>
        <img src={item.Image} alt='notFound' className='individualimg'/>
        <div style={{marginTop:"10px"}}>
          <button className='indicart' onClick={()=>handlecart(item)}>ADD to Cart</button>
          <ToastContainer autoClose={1000}/>
        </div>
      </div>
      <div className='individualDetails'>
        <h2 style={{fontFamily:"cursive",marginTop:"0px"}}>{item.Device}</h2>
      <div style={{display:"flex"}}>
       <p style={{fontFamily:"cursive"}}>|| Rating: {item.Rating} <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdP1P4S9jEQDRT3Ccix1TLyVYdYfmjAUFBQ&usqp=CAU' alt='notFound' style={{height:"20px", width:"20px"}}/> | </p>  
       <p style={{fontFamily:"cursive"}}>|  Reviews: {item.Reviews}  ||</p></div>

       <p style={{fontFamily:"cursive"}}>Sale Price : {item.sellingPrice}</p>
      <p style={{fontFamily:"cursive"}}>Offer:  {item.offer}</p>
      <p className='linethrough' style={{fontFamily:"cursive"}}>Price: {item.Price}</p>
      <p style={{fontFamily:"cursive"}}>Warrenty: {item.warrenty}</p>
      </div>  
    </div>
    <h5 style={{fontFamily:"cursive",fontSize:"large"}}>About this Item:</h5>
    {item.Description}
    </>
     )
  })}
 </div>
  )
}

export default Individual