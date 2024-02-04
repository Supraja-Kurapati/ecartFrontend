

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
        cart:[],
        quantity:0
    },
    reducers:{
        addItemToCart:(state,action)=>{
                

            // const itemInCart=state.cart.find((item)=>item.id===action.payload.id);
            // if(itemInCart){
            //     itemInCart.quantity++;
            // }
            // else{
            //     // state.cart.push({...action.payload.id,quantity:1});
            //    state.cart.push({
            //     id:action.payload.id,
            //     Device:action.payload.Device,
            //     Price:action.payload.Price,
            //     quantity:1
            // })
            // }

            const itemInCart=state.cart.findIndex(item=>item.id===action.payload.id)

                        if(itemInCart){
                itemInCart.quantity++;
            }
            else{
                // state.cart.push({...action.payload.id,quantity:1});
               state.cart.push({
                id:action.payload.id,
                Device:action.payload.Device,
                Price:action.payload.Price,
                quantity:1
               })
            }

        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item.quantity++;
          },
          decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
      
          removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
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

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice=createSlice({
//     name: 'cart',
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addItemToCart: (state, action) => {
//       const itemInCart = state.cart.find((item) => item.id === action.payload.id);
//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     // Add other cart-related actions (increment, decrement, remove) if needed
//   },
// });

// export const {addItemToCart}=cartSlice.actions
// export default cartSlice.reducer;




// const initialState = {
//   Cart:[],
//   Quantity:0
// }
// const CartSlice = createSlice({
//   name: "Cart",
//   initialState,
//   reducers:{
//       AddCart:(state,action)=>{
//         const find = state.Cart.findIndex(item=>item.id===action.payload.id)
//         if(find>=0){
//           state.Cart[find].Quantity+=1
//         }
//         else{
//         const tempvar = {...action.payload,Quantity:1}
//         state.Cart.push(tempvar)
//         }
//       }
//   }
// })
// export const {AddCart} =CartSlice.actions;
// export default CartSlice.reducer;


