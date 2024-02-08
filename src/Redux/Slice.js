import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
//import Data from "../DATA/Data";
const     initialState={
   cart:[],
  totalquantity:0,
  totalPrice:0
};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart:(state,action)=>{
            const itemstoADD=state.cart.find(item=>item.id===action.payload.id)
            console.log(action.payload.id);

                        if(itemstoADD){
               itemstoADD.quantity+=action.payload.quantity
              //  itemstoADD.IPrice+=action.payload.sellingPrice
              //  console.log(action.payload.sellingPrice);

            }
            else{
        state.cart.push({...action.payload,quantity:1})
        // console.log(action.payload.IPrice,"Iprice");
        }
        state.totalquantity+=action.payload.quantity;
        console.log(state.totalquantity);
        state.totalPrice+=action.payload.quantity*action.payload.sellingPrice
        },

          decrementQuantity: (state,action) => {
            const decrement = state.cart.findIndex((item)=> item.id === action.payload.id);
            if (decrement !==-1 && state.cart[decrement].quantity>1){
              state.cart[decrement].quantity--;
            }
          },
      
          removeItem: (state, action) => {
            const itemIndex = state.cart.findIndex(item=> item.id !== action.payload.id);
          if(itemIndex!== -1){
            const quantitytoRemove=state.cart[itemIndex]?.quantity||0
            state.cart.splice(itemIndex,1);
            state.totalquantity-=quantitytoRemove
            // state.totalPrice -= quantitytoRemove.quantity*state.cart[itemIndex].sellingPrice      
              }

            //state.cart = itemIndex;
          },

           CartTotalPrice:(state,action)=>{
            state=produce(state,(draftState)=>{
              draftState.totalPrice=draftState.cart.reduce((acc,item)=>{
            //  const itemPrice=item.sellingPrice||0
             const totalPrice=item*item.quantity

             return acc+totalPrice
              },0)
            })
           }
,
          updateQuantity:(state,action)=>{
            const itemIndex=state.cart.findIndex(item=>item.id===action.payload.id)

            if(itemIndex!==-1){
              const newQuantity=Math.max(2,action.payload.quantity)
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
        updateQuantity,
        incrementQuantity,
        decrementQuantity
      }=cartSlice.actions


