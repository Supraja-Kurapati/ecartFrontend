import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
const cartItems=useSelector(state=>state.ecom.cart)
 console.log(data);

//  const [cartItems,setcartItems]=useState([]);
//  useEffect(()=>{
//    const fetchData=async()=>{
//      try{
//        const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
//        setcartItems(resp.data)
//      }
//      catch(err){
//     console.log(err,"Error in fetching Data");
//      }
//    }
//    fetchData()
//  },[])

  return (
<div className='CartWrapper'>
<hr/>
<div>
  <h1> Cart ITEMS </h1>
{
 cartItems.filter((e)=>parseInt(e.id)===item.id).map(item=>{
  return(
  <h2>{item.Device}</h2>
  )
 })
 
}
{/* {
  cartItems.map(item=>(
    <div key={item.id}>
<h2>{item.Device}</h2>
    </div>
  ))
} */}
</div>
</div>
    )
}

export default Cart