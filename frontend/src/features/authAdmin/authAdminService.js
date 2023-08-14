import axios from 'axios';
const API_URL='https://mila-ecommerce-iwnm.onrender.com/api/admin/';

// Register User
const register=async(adminData)=>{
    // console.log('service',userData)
    const response=await axios.post(API_URL,adminData)
    if(response.data){
        console.log(response.data)
        localStorage.setItem('admin',JSON.stringify(response.data))
    }
    return response.data
}
// Logout User
const logout=()=>{
    localStorage.removeItem('admin')
}
// Login User
const login=async(adminData)=>{
    // console.log('service',userData)
    const response=await axios.post(API_URL+'login',adminData)
    if(response.data){
        console.log(response.data)
        localStorage.setItem('admin',JSON.stringify(response.data))
    }
    return response.data
}

const authAdminService={
    register,
    logout,
    login
}
export default authAdminService