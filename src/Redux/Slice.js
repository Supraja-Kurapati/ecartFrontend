import { createSlice } from "@reduxjs/toolkit";
//import Data from "../DATA/Data";
const     initialState={
  // products:Data,
   cart:[],
  totalquantity:1,
  totalPrice:0
};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart:(state,action)=>{
        //             try{
        //  axios.get('http://localhost:5132/api/store')
        // //axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
        // .then(res=>{

            const itemstoADD=state.cart.find(item=>item.id===action.payload.id)
            console.log(action.payload.id);

                        if(itemstoADD){
               //immerError //state.cart.quantity+=action.payload.quantity;
  //              state.cart = state.cart.map((item, index) =>
  //   index === itemstoADD ? { ...item, quantity: item.quantity + action.payload.quantity } : item
  // );
  itemstoADD.quantity+=action.payload.quantity
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
        state.cart.push({...action.payload,quantity:1})
        }
        state.totalquantity+=action.payload.quantity;
        state.totalPrice+=action.payload.quantity*action.payload.sellingPrice
//     })
    
// }
// catch(err){
//     console.error(err)    
// }

        },
        // incrementQuantity: (state,action) => {
        //     const item = state.cart.find((item) => item.id === action.payload.id);
        //     item.quantity+=1;
        //   },
        //   decrementQuantity: (state,action) => {
        //     const item = state.cart.find((item)=> item.id === action.payload.id);
        //     if (item.quantity === 1) {
        //       item.quantity = 1
        //     } else {
        //       item.quantity-=1;
        //     }
        //   },
      
          removeItem: (state, action) => {
            const itemIndex = state.cart.findIndex(item=> item.id === action.payload.id);
          if(itemIndex!== -1){
            state.cart.splice(itemIndex,1);
            state.totalquantity-=state.cart[itemIndex].quantity
            state.totalPrice -= state.cart[itemIndex].quantity*state.cart[itemIndex].sellingPrice
          }

            //state.cart = itemIndex;
          },
          updateQuantity:(state,action)=>{
            const itemIndex=state.cart.findIndex(item=>item.id===action.payload.id)

            if(itemIndex!==-1){
              const newQuantity=Math.max(1,action.payload.quantity)
              const quantityChange=newQuantity-state.cart[itemIndex].quantity

              state.cart[itemIndex].quantity=newQuantity;
              state.totalquantity+=quantityChange;
              state.totalPrice+=quantityChange*state.cart[itemIndex].sellingPrice
            }
          }
        },
      });
      
      export const cartReducer = cartSlice.reducer;
      export const {
        addItemToCart,
        removeItem,
        updateQuantity
      }=cartSlice.actions
      // export const {
      //   addItemToCart,
      //   incrementQuantity,
      //   decrementQuantity,
      //   itemIndex,
      // } = cartSlice.actions;
//export default cartSlice.actions
      // const {actions,reducer}= cartSlice

      // export const {addItemToCart}=actions

      //export default reducer

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


