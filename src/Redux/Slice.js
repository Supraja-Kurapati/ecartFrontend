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
        },

        incrementQuantity:(state,action)=>{
          const itemstoADD=state.cart.find(item=>item.id===action.payload.id) //finds whether item exist or not
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
            const itemIndex = state.cart.findIndex((item)=> item.id !== action.payload.id);
          if(itemIndex!==-1){
            const quantitytoRemove=state.cart[itemIndex][1]?.quantity||0
            state.cart.splice(itemIndex,1);
            state.totalquantity-=quantitytoRemove
            state.totalquantity--

            // let priceChange=parseInt(action.payload.sellingPrice)
            //  state.totalPrice -=priceChange;
            //  console.log(priceChange,"remove");   
            //  state.totalPrice=parseInt(action.payload.sellingPrice)*state.totalquantity
            // const pricetoRemove=state.cart[itemIndex][1]?.sellingPrice||0
            // state.cart.splice(itemIndex, 1);
            // state.totalquantity -= quantitytoRemove;

            console.log(state.totalPrice);
            let totalP=   state.totalPrice - state.cart[itemIndex]?.sellingPrice;
          console.log(totalP);    
            state.totalPrice-=totalP
  
      }
          },


        removeAll:(state,action)=>{
          console.log("removeAll reducer called");
          const itemIndex = state.cart.findIndex(item=> item.id !== action.payload.id);
          console.log(itemIndex);
          // if(state.cart.length!==-1){
          //   const quantitytoRemove=state.cart[itemIndex][1]?.quantity||0
          //   state.cart.splice(itemIndex);
          //   state.totalquantity-=quantitytoRemove

          //  }
          if(state.cart.cart.length!==-1){
            state.cart=[]
            state.totalquantity-=action.payload.quantity;
            state.cart.totalPrice=0
          }
        }
        },



      }
      );
      export const cartReducer = cartSlice.reducer;
      export const {
        addItemToCart,
        removeItem,
        updateQuantity,
        incrementQuantity,
        decrementQuantity,
        removeAll
      }=cartSlice.actions


