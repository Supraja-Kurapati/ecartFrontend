import { createSlice } from "@reduxjs/toolkit";
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
            const itemstoADD=state.cart.find(item=>item.id===action.payload.id) //finds whether item exist or not
            // console.log(action.payload.id);
                        if(itemstoADD){
               itemstoADD.quantity+=action.payload.quantity
               const sellingPrice=parseInt(action.payload.sellingPrice)
       
               if(isFinite(sellingPrice)){
                //correct
               itemstoADD.sellingPrice=parseInt(action.payload.sellingPrice)*itemstoADD.quantity
               console.log(itemstoADD.quantity,"fromarray");
               }

            }
            else{
        state.cart.push({...action.payload,quantity:1})
        }
        state.totalquantity+=action.payload.quantity;
        console.log(state.totalquantity);
        state.totalPrice+=parseInt(action.payload.sellingPrice)
        console.log(state.totalPrice);

        //totalPrice neeed to dispatchin cartItem.js
        // state.totalPrice+=1
        // console.log(state.totalPrice);

        // itemstoADD.sellingPrice=action.payload.sellingPrice*itemstoADD.quantity   
        // const totalItemPriceIncrement=parseInt(action.payload.sellingPrice) //gets actualsellingprice
        // if(isFinite(totalItemPriceIncrement)){
        // state.totalPrice+=totalItemPriceIncrement
        // }
        // else{
        //   console.log("Adding Error");
        // }
        },

        incrementQuantity:(state,action)=>{
          const itemstoADD=state.cart.find(item=>item.id===action.payload.id) //finds whether item exist or not
          // console.log(action.payload.id);
                      if(itemstoADD){
                      itemstoADD.quantity+=action.payload.quantity
                      console.log(itemstoADD.quantity);
                      // const sellingPrice=parseInt(action.payload.sellingPrice)

                    }
                      else{
                        state.cart.push({...action.payload,quantity:1})
                        console.log(action.payload.sellingPrice,"price");
                        }
                        state.totalquantity+=action.payload.quantity;
                        console.log(state.totalquantity);

                        const priceChange=parseInt(action.payload.sellingPrice)*action.payload.quantity


                        state.totalPrice+=priceChange
                        console.log(state.totalPrice);
                        console.log(state.totalPrice,"incrrrr");
        },

          decrementQuantity: (state,action) => {
            const decrement = state.cart.findIndex((item)=> item.id === action.payload.id);
            if (decrement !==-1 && state.cart[decrement].quantity>1){
              state.cart[decrement].quantity--;
            
              action.payload.quantity--
              state.totalquantity--
              console.log(state.totalquantity);
              const priceChange=parseInt(action.payload.sellingPrice)
             state.totalPrice-=priceChange
             console.log(state.totalPrice,"decreee");
          }
          },
      
          removeItem: (state, action) => {
            const itemIndex = state.cart.findIndex(item=> item.id !== action.payload.id);
          if(itemIndex!== -1){
            const quantitytoRemove=state.cart[itemIndex][1]?.quantity||0
            state.cart.splice(itemIndex,1);
            state.totalquantity-=quantitytoRemove
            const priceChange=action.payload.sellingPrice
             state.totalPrice -=priceChange;
             console.log(state.totalPrice,"remove");      
              }
              state.totalPrice=parseInt(action.payload.sellingPrice)*state.totalquantity
            //state.cart = itemIndex;
          }

          // updateQuantity:(state,action)=>{
          //   const itemIndex=state.cart.findIndex(item=>item.id===action.payload.id)

          //   if(itemIndex!==-1){
          //     const newQuantity=Math.max(2,action.payload.quantity)
          //     const quantityChange=newQuantity-state.cart[itemIndex].quantity

          //     state.cart[itemIndex].quantity=newQuantity;
          //     state.totalquantity+=quantityChange;
          //     state.totalPrice+=quantityChange*state.cart[itemIndex].sellingPrice

          //   }
          // },
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


