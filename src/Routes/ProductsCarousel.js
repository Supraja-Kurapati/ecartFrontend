import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const ProductsCarousel = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
          // const resp=await axios.get('http://localhost:5132/api/store')
          setData(resp.data)
        }
        catch(err){
       console.log(err,"Error in fetching Data");
        }
      }
      fetchData()
    },[])
    
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }   
 return(
    <div>
        <Carousel swipeable={true}
  draggable={false} autoPlay={true}
  showDots={true} responsive={responsive} autoPlaySpeed={1000} keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500} itemClass="carousel-item-padding-40-px">
      {
      data.filter((e)=>parseInt(e.id%4)===0).map((item)=>(
<div className='dealsproducts'>
<NavLink to={`/Individual/${item.id}`}>
     <img src={item.Image} alt='Not Found' style={{height:'100px',borderRadius:'5px'}} />
     </NavLink>
     <h4>{item.Device.slice(0,30)}</h4>  
     <h5>Offer:{item.offer}  || SellingPrice: {item.sellingPrice}</h5>
     <br/>
</div>
    ))
}
</Carousel>

    </div>
 )
    
}
export default ProductsCarousel