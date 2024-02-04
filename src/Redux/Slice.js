

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const Slice=createSlice({
//     name:'ecom',
// initialState:{products:[],cart:[]},
// reducers:{
//     addItemToCart:(state,action)=>{
//         try{
//         // axios.get('http://localhost:5132/api/store')
//         axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
//         .then(res=>{
//             const addItem=res.data.find(item=>item.id===action.payload)
//             if(addItem){
//                 return(
//                     state.cart=[...state.cart,addItem]
//                 // state.cart.push(addItem)
//                 // console.log("payload",action.payload);
            
//                 )
// // return{                    ...state,
// //                     cart:[...state.cart,addItem]
// // }


//             }
//         })
//     }
//     catch(err){
// console.log(err);
//     }

//     }
// }
// })

// export const {addItemToCart}=Slice.actions;
// export default Slice.reducer



import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addItemToCart:(state,action)=>{
            const itemInCart=state.cart.find((item)=>item.id===action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            }
            else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
          },
          decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
          },
        },
      });
      
      export const cartReducer = cartSlice.reducer;
      export const {
        addItemToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
      } = cartSlice.actions;