import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import brandReducer from '../features/Brands/brandsSlice';
import productReducer from'../features/Products/productSlice'
import authAdminReducer from '../features/authAdmin/authAdminSlice';
import orderReducer from'../features/Orders/orderSlice'

const store=configureStore({
    reducer:{
        auth:authReducer,
        brand:brandReducer,
        product:productReducer,
        authAdmin:authAdminReducer,
        order:orderReducer

    }
})
export default store