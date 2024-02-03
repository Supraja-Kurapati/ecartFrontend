import {createSlice} from '@reduxjs/toolkit'
import Data from '../DATA/Data'
const Slice=createSlice({
    name:'ecom',
    initialState:{products:Data,cart:[]},
    reducers:{
        addItemToCart:(state,action)=>{
            const itemToAdd =state.products.find(item=>item.id===action.payload)
            if(itemToAdd)
            state.cart.push(itemToAdd)
        console.log("payload",action.payload);
        }
    }
})
export const {addItemToCart}=Slice.actions
export default Slice.reducer

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const Slice=createSlice({
//     name:'ecom',
// initialState:{products:[],cart:[]},
// reducers:{
//     addItemToCart:(state,action)=>{
//         axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
//         .then(res=>{
//             const addItem=res.data.find(item=>item.id===action.payload)
//             if(addItem){
//                 state.cart.push(addItem)
//                 console.log("payload",action.payload);
//             }
//         })
//         .catch(err=>{
//             console.log(err,"error in Fetching");
//         })
//     }
// }
// })

// export const {addItemToCart}=Slice.actions;
// export default Slice.reducer

// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState={
//     products:[],
//     status:null
// }

// //Fetch data from API
// export const productsFetch=createAsyncThunk(
//     "ecom/productsFetch",
//     async()=>{
//      const res=   await axios.get("https://ecartbackend-qtwf.onrender.com/api/store")

//      return res?.data
    
//     }
// )
// const Slice=createSlice({
//     name:"ecom",
//     initialState,
//     reducers:{},
//     extraReducers:{
//         [productsFetch.pending]:(state,action)=>{
//             state.status="pending"
//         },
//         [productsFetch.fulfilled]:(state,action)=>{
//             state.status="Success"
//             state.products=action.payload
//         },
//         [productsFetch.rejected]:(state,action)=>{
//             state.status="Rejected"
//         }

//     }
// })

// export default Slice.reducer