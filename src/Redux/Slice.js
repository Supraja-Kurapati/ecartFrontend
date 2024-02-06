import { createSlice } from "@reduxjs/toolkit";
import Data from "../DATA/Data";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
         products:Data,
         cart:[],
        quantity:0
    },
    reducers:{
        addItemToCart:(state,action)=>{
        //             try{
        //  axios.get('http://localhost:5132/api/store')
        // //axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
        // .then(res=>{

            const itemstoADD=state.products.find(item=>item.id===action.payload.id)

                        if(itemstoADD>0){
                itemstoADD.quantity++;
            }
            else{
                        // const tempvar = {...action.payload,quantity:1}
                        // state.cart.push(tempvar)

               //state.cart.push({...action.payload.id,quantity:1});
              //  const temp=state.cart.push({
              //   id:action.payload.id,
              //   Device:action.payload.Device,
              //   Price:action.payload.Price,
              //   quantity:1
              //  })
              //  console.log(temp.id);
         //state.cart.push(action.payload)  
        //--------- state.cart.push(itemstoADD) 
        state.cart.push("payload",action.payload)
        }
//     })
    
// }
// catch(err){
//     console.error(err)    
// }

        },
        incrementQuantity: (state,action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item.quantity+=1;
          },
          decrementQuantity: (state,action) => {
            const item = state.cart.find((item)=> item.id === action.payload.id);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity-=1;
            }
          },
      
          removeItem: (state, action) => {
            const removeItem = state.cart.filter(item=> item.id !== action.payload?.id);
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
// import Data from './../DATA/Data';

// const cartSlice=createSlice({
//     name: 'cart',
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addItemToCart: (state, action) => {
//       const itemstoADD = state.cart.find((item) => item.id === action.payload.id);
//       if (itemstoADD) {
//         itemstoADD.quantity++;
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


