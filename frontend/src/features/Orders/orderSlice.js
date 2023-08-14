import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "../Orders/orderService";
// import InsertProduct from "../../Components/InsertProduct";
const initialState={
    newOrder:null,
    deletedOrder:null,
    orders:[],
    isErrorOrder:false,
    isSuccessOrder:false,
    isLoadingOrder:false,
    messageOrder:''
}
export const insertNewOrder=createAsyncThunk(
    'order/insertNewOrder',
    async(order,thunkAPI)=>{
        try{
            const userToken=thunkAPI.getState().auth.user.token

            // return await orderService.insertOrder(order,adminToken)
            return await orderService.insertOrder(order,userToken)

        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const getOrderUser=createAsyncThunk(
    'order/getOrderUser',
    async(userId,thunkAPI)=>{
        try{
            const userToken=thunkAPI.getState().auth.user.token

            return await orderService.getOrderUser(userId,userToken)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const deleteOrder=createAsyncThunk(
    'order/deleteOrder',
    async(orderData,thunkAPI)=>{
        try{
            const userToken=thunkAPI.getState().auth.user.token
            console.log('orderSlice')


            return await orderService.deleteOrder(orderData,userToken)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{
        reset:(state)=>{
            // eslint-disable-next-line no-unused-expressions
            state.newOrder=null
            state.deletedOrder=null
            state.isLoadingOrder=false
            state.isErrorOrder=false
            state.isSuccessOrder=false
            state.isLoadingOrder=false
            state.message=''
            } 
        },
    extraReducers:(builder)=>{
            builder.addCase(insertNewOrder.pending,(state)=>{
                state.isLoadingOrder=true})
                .addCase(insertNewOrder.fulfilled,(state,action)=>{
                    state.isLoadingOrder=false
                    state.isSuccessOrder=true
                    state.newOrder=action.payload
                })
                .addCase(insertNewOrder.rejected,(state,action)=>{
                    state.isLoadingOrder=false
                    state.isErrorOrder=true
                    state.messageOrder=action.payload
                    state.newOrder=[]
                }).addCase(getOrderUser.pending,(state)=>{
                    state.isLoadingOrder=true})
                .addCase(getOrderUser.fulfilled,(state,action)=>{
                        state.isLoadingOrder=false
                        // state.isSuccess=true
                        state.orders=action.payload
                    })
                .addCase(getOrderUser.rejected,(state,action)=>{
                        state.isLoadingOrder=false
                        state.isErrorOrder=true
                        state.messageOrder=action.payload
                        state.orders=[]
                    })
                .addCase(deleteOrder.pending,(state)=>{
                    state.isLoadingOrder=true})
                .addCase(deleteOrder.fulfilled,(state,action)=>{
                        state.isLoadingOrder=false
                        state.isSuccessOrder=true
                        state.deletedOrder=action.payload
                    })
                .addCase(deleteOrder.rejected,(state,action)=>{
                        state.isLoadingOrder=false
                        state.isErrorOrder=true
                        state.messageOrder=action.payload
                        state.deletedOrder=[]
                    })
            },
        })
export const{reset}=orderSlice.actions
export default orderSlice.reducer