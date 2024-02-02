import { configureStore } from "@reduxjs/toolkit";
import ecomreducer from './Slice'

export const ReduxStore=configureStore({
    reducer:{
        ecom:ecomreducer
    }
})