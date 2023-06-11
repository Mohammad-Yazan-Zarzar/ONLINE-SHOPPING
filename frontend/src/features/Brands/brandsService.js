import axios from 'axios';
const API_URL='/api/brands/';
const insertBrand=async(brandData,adminToken)=>{
    console.log('axios',brandData)
    const config={
        headers:{
            Authorization:`Bearer ${adminToken}`
        }
    }

    const response=await axios.post(API_URL,brandData,config)
    if(response.data){
        console.log(response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const getBrands=async()=>{
    // console.log('axios',brandData)

    const response=await axios.get(API_URL)
    if(response.data){
        console.log('getBrands:',response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const deleteBrand=async(_id,adminToken)=>{
    // console.log('axios',brandData)
    const config={
        headers:{
            Authorization:`Bearer ${adminToken}`
        }
    }

    const response=await axios.delete(API_URL+_id,config)
    if(response.data){
        console.log('deleteBrand:',response.data)
        // localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const brandService={
    insertBrand,
    getBrands,
    deleteBrand
    
}
export default brandService
