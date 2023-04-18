import axios from 'axios';
const API_URL='/api/brands/';
const insertBrand=async(brandData)=>{
    console.log('axios',brandData)

    const response=await axios.post(API_URL,brandData)
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
const brandService={
    insertBrand,
    getBrands
    
}
export default brandService
