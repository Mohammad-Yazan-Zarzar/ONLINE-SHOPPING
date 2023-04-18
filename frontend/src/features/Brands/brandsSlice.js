import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandsService";
const initialState={
    brands:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}
export const insertBrand=createAsyncThunk(
    'brand/insertBrand',
    async(brand,thunkAPI)=>{
        try{
            return await brandService.insertBrand(brand)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const getBrands=createAsyncThunk(
    'brand/getBrands',
    async(brand,thunkAPI)=>{
        try{
            return await brandService.getBrands()
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const brandSlice=createSlice({
    name:'brand',
    initialState,
    reducers:{
        reset:(state)=>{
            // eslint-disable-next-line no-unused-expressions
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.isLoading=false
            state.message=''
            } 
        },
    extraReducers:(builder)=>{
            builder.addCase(insertBrand.pending,(state)=>{
                state.isLoading=true})
                .addCase(insertBrand.fulfilled,(state,action)=>{
                    state.isLoading=false
                    state.isSuccess=true
                    state.brands=action.payload
                })
                .addCase(insertBrand.rejected,(state,action)=>{
                    state.isLoading=false
                    state.isError=true
                    state.message=action.payload
                    state.brands=null
                })
                .addCase(getBrands.pending,(state)=>{
                    state.isLoading=true})
                .addCase(getBrands.fulfilled,(state,action)=>{
                        state.isLoading=false
                        state.isSuccess=true
                        state.brands=action.payload
                    })
                .addCase(getBrands.rejected,(state,action)=>{
                        state.isLoading=false
                        state.isError=true
                        state.message=action.payload
                        state.brands=null
                    })


},
})
export const{reset}=brandSlice.actions
export default brandSlice.reducer