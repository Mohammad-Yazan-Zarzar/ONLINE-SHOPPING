import axios from 'axios';
const API_URL='/api/products/';
const insertProduct=async(productData,adminToken)=>{
    console.log('axios',productData)
    const config={
        headers:{
            Authorization:`Bearer ${adminToken}`
        }
    }

    const response=await axios.post(API_URL,productData,config)
    if(response.data){
        console.log(response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const getProducts=async()=>{
    // console.log('axios',brandData)

    const response=await axios.get(API_URL)
    if(response.data){
        console.log('getProducts:',response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const deleteProduct=async(_id,adminToken)=>{
    // console.log('axios',brandData)
    const config={
        headers:{
            Authorization:`Bearer ${adminToken}`
        }
    }

    const response=await axios.delete(API_URL+_id,config)
    if(response.data){
        console.log('deleteProduct:',response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const getProductByName=async(productName)=>{
    // console.log('axios',brandData)

    const response=await axios.get(API_URL+productName)
    if(response.data){
        console.log('getProductsByName:',response.data)
        console.log(API_URL+productName)
        console.log(productName)

        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const getProductByClass=async(productClass)=>{
    // console.log('axios',brandData)

    const response=await axios.get(API_URL+'class/'+productClass)
    if(response.data){
        console.log('getProductsByClass:',response.data)
        console.log(API_URL+productClass)
        console.log(productClass)

        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const updateProduct=async(product,adminToken)=>{
    console.log('service',product)
    const config={
        headers:{
            Authorization:`Bearer ${adminToken}`
        }
    }
    console.log('Yazan',product)
    console.log(product.productId)

    const response=await axios.put(API_URL+product.productId,product,config)
    if(response.data){
        console.log('updateProduct:',response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const productService={
    insertProduct,
    getProducts,
    deleteProduct,
    getProductByName,
    getProductByClass,
    updateProduct
    
}
export default productService