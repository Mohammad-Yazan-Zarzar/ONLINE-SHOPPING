import axios from 'axios';
const API_URL='/api/orders/';
const insertOrder=async(orderData,userToken)=>{
    console.log('axios myList inserte',orderData)
    const config={
        headers:{
            Authorization:`Bearer ${userToken}`
        }
    }

    const response=await axios.post(API_URL+'addOrder',orderData,config)
    if(response.data){
        console.log(response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const getOrderUser=async(userId,userToken)=>{
    console.log('axiosMylist',userId)
    const config={
        headers:{
            Authorization:`Bearer ${userToken}`
        }
    }

    const response=await axios.post(API_URL+'getOrder',{'userId':userId},config)
    if(response.data){
        console.log(response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data

}
const deleteOrder=async(orderData,userToken)=>{
    console.log('axiosMylistDelete',orderData.userId)
    const config={
        headers:{
            Authorization:`Bearer ${userToken}`
        }
    }

    const response=await axios.post(API_URL+'deleteOrder',orderData,config)
    if(response.data){
        console.log(response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}


const orderService={
    insertOrder,
    getOrderUser,
    deleteOrder
    // deleteProduct,
    // getProductByName,
    // getProductByClass,
    // updateProduct
    
}
export default orderService