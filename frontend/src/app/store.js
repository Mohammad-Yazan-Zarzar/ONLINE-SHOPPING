import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import brandReducer from '../features/Brands/brandsSlice';
const store=configureStore({
    reducer:{
        auth:authReducer,
        brand:brandReducer
    }
})
export default store