import axios from 'axios';
const API_URL='/api/users/';

// Register User
const register=async(userData)=>{
    // console.log('service',userData)
    const response=await axios.post(API_URL,userData)
    // await response.JSON
    // console.log('response',response)
    // if(response.)
    if(response.status){
        console.log('the response status')
    }
    
    if(response.data){
        console.log(response.data)
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
// Logout User
const logout=()=>{
    localStorage.removeItem('user')
}
// Login User
const login=async(userData)=>{
    // console.log('service',userData)
    const response=await axios.post(API_URL+'login',userData)
    if(response.status===400){
        console.log('the response is',response.messages)
    }
    if(response.data){
        console.log(response.data)
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const authService={
    register,
    logout,
    login
}
export default authService