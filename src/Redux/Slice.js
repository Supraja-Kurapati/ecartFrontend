import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Slice=createSlice({
    name:'ecom',
initialState:{products:[],cart:[]},
reducers:{
    addItemToCart:(state,action)=>{
        axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
        .then(res=>{
            const addItem=res.data.find(item=>item.id===action.payload)
            if(addItem){
                state.cart.push(addItem)
                console.log("payload",action.payload);
            }
        })
        .catch(err=>{
            console.log(err,"error in Fetching");
        })
    }
}
})

export const {addItemToCart}=Slice.actions;
export default Slice.reducer