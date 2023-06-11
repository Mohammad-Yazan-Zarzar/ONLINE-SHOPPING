import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../Products/productsService";
// import InsertProduct from "../../Components/InsertProduct";
const initialState={
    newProduct:null,
    deletedProduct:null,
    products:[],
    isErrorProduct:false,
    isSuccessProduct:false,
    isLoadingProduct:false,
    message:''
}
export const insertNewProduct=createAsyncThunk(
    'product/insertNewProduct',
    async(product,thunkAPI)=>{
        try{
            const adminToken=thunkAPI.getState().authAdmin.admin.adminToken

            return await productService.insertProduct(product,adminToken)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const getProducts=createAsyncThunk(
    'product/getProducts',
    async(product,thunkAPI)=>{
        try{
            return await productService.getProducts()
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const getProductByName=createAsyncThunk(
    'product/getProductByName',
    async(productName,thunkAPI)=>{
        try{
            return await productService.getProductByName(productName)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const getProductByClass=createAsyncThunk(
    'product/getProductByClass',
    async(productClass,thunkAPI)=>{
        try{
            return await productService.getProductByClass(productClass)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const deleteProduct=createAsyncThunk(
    'product/deleteProduct',
    async(_id,thunkAPI)=>{
        try{
            const adminToken=thunkAPI.getState().authAdmin.admin.adminToken

            return await productService.deleteProduct(_id,adminToken)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const updateProduct=createAsyncThunk(
    'product/updateProduct',
    async(product,thunkAPI)=>{
        try{
            const adminToken=thunkAPI.getState().authAdmin.admin.adminToken
            console.log('slice',product)
            return await productService.updateProduct(product,adminToken)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        reset:(state)=>{
            // eslint-disable-next-line no-unused-expressions
            state.newProduct=null
            state.deletedProduct=null
            state.isLoadingProduct=false
            state.isErrorProduct=false
            state.isSuccessProduct=false
            state.isLoadingProduct=false
            state.message=''
            } 
        },
    extraReducers:(builder)=>{
            builder.addCase(insertNewProduct.pending,(state)=>{
                state.isLoadingProduct=true})
                .addCase(insertNewProduct.fulfilled,(state,action)=>{
                    state.isLoadingProduct=false
                    state.isSuccessProduct=true
                    state.newProduct=action.payload
                })
                .addCase(insertNewProduct.rejected,(state,action)=>{
                    state.isLoadingProduct=false
                    state.isErrorProduct=true
                    state.message=action.payload
                    state.newProduct=[]
                })
                .addCase(getProducts.pending,(state)=>{
                    state.isLoadingProduct=true})
                .addCase(getProducts.fulfilled,(state,action)=>{
                        state.isLoadingProduct=false
                        // state.isSuccess=true
                        state.products=action.payload
                    })
                .addCase(getProducts.rejected,(state,action)=>{
                        state.isLoadingProduct=false
                        state.isErrorProduct=true
                        state.message=action.payload
                        state.products=[]
                    })
                .addCase(deleteProduct.pending,(state)=>{
                    state.isLoadingProduct=true})
                .addCase(deleteProduct.fulfilled,(state,action)=>{
                        state.isLoadingProduct=false
                        state.isSuccessProduct=true
                        state.deletedProduct=action.payload
                    })
                .addCase(deleteProduct.rejected,(state,action)=>{
                        state.isLoadingProduct=false
                        state.isErrorProduct=true
                        state.message=action.payload
                        state.deletedProduct=[]
                    })
                .addCase(getProductByName.pending,(state)=>{
                    state.isLoadingProduct=true})
                .addCase(getProductByName.fulfilled,(state,action)=>{
                        state.isLoadingProduct=false
                        // state.isSuccess=true
                        state.products=action.payload
                    })
                .addCase(getProductByName.rejected,(state,action)=>{
                        state.isLoadingProduct=false
                        state.isErrorProduct=true
                        state.message=action.payload
                        state.products=[]
                    })
                .addCase(getProductByClass.pending,(state)=>{
                    state.isLoadingProduct=true})
                .addCase(getProductByClass.fulfilled,(state,action)=>{
                        state.isLoadingProduct=false
                        // state.isSuccess=true
                        state.products=action.payload
                    })
                .addCase(getProductByClass.rejected,(state,action)=>{
                        state.isLoadingProduct=false
                        state.isErrorProduct=true
                        state.message=action.payload
                        state.products=[]
                    })
                .addCase(updateProduct.pending,(state)=>{
                    state.isLoadingProduct=true})
                .addCase(updateProduct.fulfilled,(state,action)=>{
                        state.isLoadingProduct=false
                        state.isSuccessProduct=true
                        // state.products=action.payload
                    })
                .addCase(updateProduct.rejected,(state,action)=>{
                        state.isLoadingProduct=false
                        state.isErrorProduct=true
                        state.message=action.payload
                        state.products=[]
                    })

},
})
export const{reset}=productSlice.actions
export default productSlice.reducer