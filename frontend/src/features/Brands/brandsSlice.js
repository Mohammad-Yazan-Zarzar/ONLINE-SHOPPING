import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandsService";
const initialState={
    newBrand:null,
    deletedBrand:null,
    brands:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}
export const insertBrand=createAsyncThunk(
    'brand/insertBrand',
    async(brand,thunkAPI)=>{
        try{
            const adminToken=thunkAPI.getState().authAdmin.admin.adminToken
            return await brandService.insertBrand(brand,adminToken)
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
export const deleteBrand=createAsyncThunk(
    'brand/deleteBrand',
    async(_id,thunkAPI)=>{
        try{
            const adminToken=thunkAPI.getState().authAdmin.admin.adminToken

            return await brandService.deleteBrand(_id,adminToken)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const updateBrand=createAsyncThunk(
    'brand/updateBrand',
    async(brand,thunkAPI)=>{
        try{
            const adminToken=thunkAPI.getState().authAdmin.admin.adminToken
            console.log('slice',brand)
            return await brandService.updateBrand(brand,adminToken)
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
            state.newBrand=null
            state.deletedBrand=null
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
                    state.newBrand=action.payload
                })
                .addCase(insertBrand.rejected,(state,action)=>{
                    state.isLoading=false
                    state.isError=true
                    state.message=action.payload
                    state.newBrand=[]
                })
                .addCase(getBrands.pending,(state)=>{
                    state.isLoading=true})
                .addCase(getBrands.fulfilled,(state,action)=>{
                        state.isLoading=false
                        // state.isSuccess=true
                        state.brands=action.payload
                    })
                .addCase(getBrands.rejected,(state,action)=>{
                        state.isLoading=false
                        state.isError=true
                        state.message=action.payload
                        state.brands=[]
                    })
                .addCase(deleteBrand.pending,(state)=>{
                    state.isLoading=true})
                .addCase(deleteBrand.fulfilled,(state,action)=>{
                        state.isLoading=false
                        state.isSuccess=true
                        state.deletedBrand=action.payload
                    })
                .addCase(deleteBrand.rejected,(state,action)=>{
                        state.isLoading=false
                        state.isError=true
                        state.message=action.payload
                        state.deletedBrand=[]
                    })
                .addCase(updateBrand.pending,(state)=>{
                    state.isLoading=true})
                .addCase(updateBrand.fulfilled,(state,action)=>{
                        state.isLoading=false
                        state.isSuccess=true
                        // state.deletedBrand=action.payload
                    })
                .addCase(updateBrand.rejected,(state,action)=>{
                        state.isLoading=false
                        state.isError=true
                        state.message=action.payload
                        state.brands=[]
                    })


},
})
export const{reset}=brandSlice.actions
export default brandSlice.reducer