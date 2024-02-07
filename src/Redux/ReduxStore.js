// import { configureStore } from "@reduxjs/toolkit";
// import ecomreducer, { productsFetch } from './Slice'

// import { productsApi } from "./productsAPI";

// export const ReduxStore=configureStore({
//     reducer:{
//         ecom:ecomreducer,
//         [productsApi.reducerPath]:productsApi.reducer,
//     },
//     middleware:(getDefaultMiddleware)=>{
//       return  getDefaultMiddleware().concat(productsApi.middleware)
//     }
// })

// ReduxStore.dispatch(productsFetch())


// import { configureStore } from "@reduxjs/toolkit";

// import ecomReducer from './Slice'

// export const ReduxStore =configureStore({
//     reducer:{
//         ecom:ecomReducer,
//     }
// })



// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./Slice";
// import storage from "redux-persist/lib/storage";
//  import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'



// const persistConfig = {
//     key: 'root',
//     storage,
//   }

//    const persistedReducer = persistReducer(persistConfig, cartReducer)

//  export const store = configureStore({
//   reducer:  persistedReducer,
  
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     })
// })

// export const persistor = persistStore(store)


// import { configureStore } from "@reduxjs/toolkit";
// import CartSlice from "./Slicing"
// export const Store = configureStore({
//   reducer:{
//     Cart:CartSlice
//   }
// }

import { configureStore } from "@reduxjs/toolkit";
 import { cartReducer } from "./Slice";
//import cartReducer from './Slice'

// const rootReducer={
//     cart:cartReducer
// }

export const store=configureStore({
    reducer:{
        cart:cartReducer
    }
   // reducer: rootReducer
})