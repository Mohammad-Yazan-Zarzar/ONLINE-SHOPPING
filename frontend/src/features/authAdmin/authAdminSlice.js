import {createSlice,createAsyncThunk}from '@reduxjs/toolkit'
import authAdminService from './authAdminService'
// Get User from localStorage
const admin=JSON.parse(localStorage.getItem('admin'))
// console.log(user)
const initialState={
    admin:admin?admin:null,
    isErrorAdmin:false,
    isSuccessAdmin:false,
    isLoadingAdmin:false,
    message:''
}
// console.log('initial',initialState)
// Register User
export const register=createAsyncThunk(
    'authAdmin/registerAdmin',
    async(admin,thunkAPI)=>{
        try{
            return await authAdminService.register(admin)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
// Login User
export const login=createAsyncThunk(
    'authAdmin/loginAdmin',
    async(admin,thunkAPI)=>{
        try{
            return await authAdminService.login(admin)
        }catch(error){
            const message=(error.response&&error.response.data && error.response.data.message)||
                error.message||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
// logout User
export const logout=createAsyncThunk(
    'authAdmin/logoutAdmin',
    async()=>{
        await authAdminService.logout()
    }
)
export const authAdminSlice=createSlice({
    name:'authAdmin',
    initialState,
    reducers:{
        reset:(state)=>{
            // eslint-disable-next-line no-unused-expressions
            state.isLoadingAdmin=false,
            state.isErrorAdmin=false,
            state.isSuccessAdmin=false,
            state.isLoadingAdmin=false,
            state.message=''} 
        },
    extraReducers:(builder)=>{
        builder.addCase(register.pending,(state)=>{
            state.isLoadingAdmin=true})
            .addCase(register.fulfilled,(state,action)=>{
                state.isLoadingAdmin=false
                state.isSuccessAdmin=true
                state.admin=action.payload
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoadingAdmin=false
                state.isErrorAdmin=true
                state.message=action.payload
                state.admin=null
            })
            .addCase(login.pending,(state)=>{
                state.isLoadingAdmin=true
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoadingAdmin=false
                state.isSuccessAdmin=true
                state.admin=action.payload

            })
            .addCase(login.rejected,(state,action)=>{
                state.isLoadingAdmin=false
                state.isErrorAdmin=true
                state.message=action.payload
                state.admin=null
            })
            .addCase(logout.fulfilled,(state)=>{
                state.admin=null
            })
    },
})

export const{reset}=authAdminSlice.actions
export default authAdminSlice.reducer