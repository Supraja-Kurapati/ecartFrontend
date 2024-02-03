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


import { configureStore } from "@reduxjs/toolkit";

import ecomReducer from './Slice'

export const ReduxStore =configureStore({
    reducer:{
        ecom:ecomReducer,
    }
})