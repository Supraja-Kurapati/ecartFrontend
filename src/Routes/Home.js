import React, { useEffect, useState } from 'react'
import CarouselCompo from '../CarouselCompo'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import delivery from '../Images/shipping.svg'
import support from '../Images/support.svg'
import refund from '../Images/refund.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../Redux/Slice';
// import ProductsCarousel from './ProductsCarousel';


const Home = () => {

const cartData=useSelector(state=>state.ecom.products)
const dispatch=useDispatch()
console.log(cartData);

  const notify=()=>toast("Added to Cart 🎉")
  
  const handlecart=(itemid)=>{
dispatch(addItemToCart(itemid));
notify();
  }
  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
        setData(resp.data)
      }

      catch(err){
     console.log(err,"Error in fetching Data");
      }
    }
    fetchData()
  },[])

  return (
    <div>
      <CarouselCompo/>

{/* All Categories Code */}
      <h3 style={{margin:"auto auto"}}>ALL Categories</h3>
      <div>
      <div className='parentProductDisplay' >
      {data.filter((e)=>parseInt(e.id%5)===0).map((item)=>(

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
      {/* <button className='addtocart' onClick={notify}>Add To Cart</button> */}
      <button className='addtocart' onClick={()=>handlecart(item.id)}>Add To Cart</button>

      <ToastContainer/>
      </div>
      </div>
      </div>
    ))}
    </div>
    </div>
    {/* DEALS of the Day CODE */}

      <div className='totalDealsWrapper'>
        <div className='DealsTextParent'>
          <img src='https://klovimg.com/images/2018/10/26/dealoftheday-animated.gif' alt='DEALS OF THE DAY' className='DealsText' style={{height:"100px", width:"200px"}}/>
          </div> <hr/>
          <div className='DealProductuctsWrapper'>
            
            <div>
              {/* <ProductsCarousel/> */}
            </div>
          </div>

      </div>

   {/* GIF CODE */}
      <div className='GifHomePage'>
        <img src='https://cdn.dribbble.com/users/984359/screenshots/13953281/media/469e5f4f4ed8d7b2af9b9c7478dbdc16.gif' alt='Not Found' className='gifstyling'/>
         <img src='https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif' alt='not Found' className='gifstyling'/>
         <img src='https://img.pikbest.com/png-images/20191028/dynamic-card-knows-how-to-push-the-shopping-cart-to-buy-things-gif_2515304.png!bw700' alt='not Found' className='gifstyling'/>

         
      </div>
     {/* Refund freeShipping 24/7 support ImagesCode */}
      <div className='ShippingPartWrapper'>
      <div className='detailshipping'>
        <img src={delivery} alt='Not Found' className='shipping'/>
        <p>Speed Delivery</p>
        <hr/>
        <p>We typically charge Rs.200 for Delivery including all taxes.</p>
      </div>

      <div className='detailshipping'>
        <img src={refund} alt='Not Found' className='shipping'/>
        <p>100% Refund</p>
        <hr/>
        <p>Refund will Processed to our account within a week.</p>
      </div>

      <div className='detailshipping'>
        <img src={support} alt='Not Found' className='shipping'/>
        <p>24/7 Support</p>
        <hr/>
        <p>All Issues Resolved by our customer Support</p>
      </div>




      </div>

    </div>

    
  )
}

export default Home