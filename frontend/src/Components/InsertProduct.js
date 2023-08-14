import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import {useSelector,useDispatch}from 'react-redux';
import{reset,insertNewProduct,getProducts,deleteProduct,updateProduct} from '../features/Products/productSlice'
import {toast } from 'react-toastify';
// import { set } from 'mongoose';
import { FcDeleteDatabase } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";
import Loading from '../Components/Loading';
import SearchBar from './SearchBar';

// import img from '../../../public/Test Company 11/'
// import { italic } from 'colors';
const BrandForm=styled.div`
    /* background-color: #222; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
`
const Form=styled.form `
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const InputForm=styled.input`
  width:100%;
  /* max-width: 500px; */
  outline: none;
  border-radius: 5px;
  border: none;
  text-align: center;
  /* border-bottom:1px solid #fff; */
  background-color: #fff;
  padding: 5px;

  :focus + span{
    transform: scaleX(1) translateY(-2px);
    opacity: 1;
    /* width: 80%;
    max-width: 500px; */
  }
`
const ImgStyle=styled.img`
  width: 70px;
  height: 100px;
`
const Separator=styled.span`
  width:100%;
  /* max-width: 500px; */
  /* width: 0px; */
  height: 3px;
  opacity: 0;
  background-color: #006d77;

  transition: all .30s linear;

`
const Nav=styled.div`
  width: 100%;
  display: flexbox;
  justify-content: center;
`
const InsertProduct = () => {
  const imgUrl='http://localhost:5000/public/'
  const productData=new FormData();
  const [imgField,setImg]=useState('')
  const [imgField2,setImg2]=useState('')
  const [updateDisabled,setUpdateDisabled]=useState(false)
  const [formData,setFormData]=useState({
        'productId':'',
        'productName':'',
        'productClass':'',
        'price':'',
        'brandName':'',
        'productImg':''
        
    
    })
  const[updateFormData,setUpdateFormData]=useState({})
  const [btnType,setBtnType]=useState(true) 
  const [brandNameValue,setBrandNameValue]=useState()
  const [brandIdValue,setBrandIdValue]=useState('')
  const[brandValue,setBrandValue]=useState('')
  const[brandValueArray,setBrandValueArray]=useState([])
  // -----------------
  const[productCategory,setProductCategory]=useState('')
  const[productDescription,setProductDescription]=useState('')
  
  // -----------------


  const{productName,productClass,price,brandName,productImg}=formData
  const{newBrand,deletedBrand,brands,isLoading,isError,isSuccess}=useSelector((state)=>state.brand)
  const{newProduct,deletedProduct,products,isLoadingProduct,isErrorProduct,isSuccessProduct,message}=useSelector((state)=>state.product)

  const dispatch=useDispatch()

  const[cardNumber,setCardNuber]=useState(10)
 
  const onChange=(e)=>{
    // console.log('productClass',productClass)
    setFormData((prevState)=>({
      ...prevState,

      [e.target.name]:e.target.value,
    }))
  }
  const handleImg=(e)=>{
    setImg(e.target.value)
    // e.preventDefault()
    setFormData((prevState)=>({
      ...prevState,

      [e.target.name]:e.target.files[0],
    }))
    
    setImg2(e.target.files[0])
    
    

  }

  const deleteProductBtn=(_id)=>{
    console.log('deleteProduct',_id);
    dispatch(deleteProduct(_id))
    // dispatch(reset())
  }
  const updateProductBtn=(item)=>{
    setFormData({
      'productName':'',
      'productClass':'',
      'price':'',
      'brandName':'',
      'productImg':''
  
    })
    setBrandValue('')
    setFormData({
      'productId':item._id,
      'productName':item.productName,
      'productClass':item.productClass||'',
      'price':item.price,
      'brandName':item.brandName,
      'productImg':''
  
    })
    setProductDescription(item.productDescription)
    setBrandIdValue(item._id)
    setUpdateDisabled(true)
    setBrandValue(item.brandName)
    setBrandNameValue(item.brandName)
    setBtnType(false)
  }
  const onSubmit=()=>{
    // e.preventDefault()
    setBrandNameValue(brandValue.split('/')[0])
    setBrandIdValue(brandValue.split('/')[1])
    // productData.append('productId',formData.productId)

    productData.append('productName',productName)
    productData.append('productClass',productCategory)

    productData.append('brandId',brandValue.split('/')[1])
    productData.append('price',price)
    productData.append('productDescription',productDescription)

   
    productData.append('brandName',brandValue.split('/')[0])
    productData.append('productImg',imgField2)
  
    // console.log('submit',brandNameValue)
    // console.log('submit',brandValue.split('/')[0])


    // console.log('brandData',brandData)
    console.log('formData Add',formData)


    dispatch(insertNewProduct(productData))
    setProductDescription('')
  }
  const updateSubmit=()=>{
  
    console.log(productName,productClass,brandName,brandIdValue,price)
 
  setUpdateFormData({
    'productId':formData.productId,
    'productName':productName,
    'productClass':productClass||'',
    'price':price,
    'brandName':brandName,
    'brandId':brandIdValue

  })
  console.log(updateFormData)
  dispatch(updateProduct({
    'productId':formData.productId,
    'productName':productName,
    'productClass':productClass||'',
    'price':price,
    'brandName':brandName,
    'brandId':brandIdValue,
    'productDescription':productDescription

  }))
  setProductDescription('')
  setUpdateDisabled(false)
  }

useEffect(()=>{
  dispatch(getProducts())

},[])
useEffect(()=>{
  // console.log(user,isError,isSuccess,message)
  if(isErrorProduct){
    toast.error(message)
  }
  if(isSuccessProduct){
    dispatch(getProducts())
    // console.log('brand',brands)
    // dispatch(getProducts())

    setFormData({
      'productName':'',
      'productClass':'',
      'price':'',
      'brandName':'',
      'productImg':''
  
  })
  setImg('')
    
  }
  dispatch(reset())
},[newProduct,deleteProduct,products,isErrorProduct,isSuccessProduct,message,dispatch])

  
  
  return (
    <BrandForm >
        <h3>Inserte New Product To database</h3>
        <Form enctype="multipart/form-data" id='FormInserte' onSubmit={(e)=>e.preventDefault()}>
            <label>Name Of Product</label>
            <InputForm type='text' name='productName' value={productName} onChange={onChange} ></InputForm>
            <Separator></Separator>
            {/* <label>Product Category</label>
            <InputForm type='text' name='productClass' value={productClass} onChange={onChange} ></InputForm> */}
            <select className="form-select" aria-label="Default select example" value={productCategory} onChange={(t)=>{
              setProductCategory(t.target.value)
            
              
            }}>
              <option  > select Product Category</option>
              <option value="Cofee">Cofee</option>
              <option value="Tea">Tea</option>
              <option value="Mate">Mate</option>
              <option value="Foodstuffs">Foodstuffs</option>
              <option value="Chips">Chips</option>
              <option value="Biscuit">Biscuit</option>
              <option value="Sweets">Sweets</option>
              <option value="Nuts">Nuts</option>
              <option value="Spices">Spices</option>
              <option value="Dates">Dates</option>
              <option value="Supplies for restaurants and shops">Supplies for restaurants and shops</option>


            </select>
            <Separator></Separator>
            {/* {productCategory} */}
            <label>Image for Product </label>
            <InputForm type='file' name='productImg' disabled={(updateDisabled) ?'disapled':''} value={imgField}    onChange={handleImg} ></InputForm>
            {/* <button type='file'>+</button> */}
            <Separator></Separator>

            <label>The Price </label>
            <InputForm type='number' name='price' value={price} onChange={onChange} ></InputForm>
            <Separator></Separator>
            {/* <label>The Brand</label>
            <InputForm type='text' name='brandName'  onChange={onChange} ></InputForm> */}
            

            <select className="form-select" aria-label="Default select example" value={brandValue} onChange={(e)=>{
              setBrandValue(e.target.value)

              setBrandNameValue(brandValue.split('/')[0])
              }}>
                <option >Select the Brand </option>
              
                {brands.map((item,index)=>{
                  return(
                    <option key={index} value={item.brandName+'/'+item._id}>{item.brandName}</option>


                  )
                })}
                
            </select>
            <Separator></Separator>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Product Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={productDescription} onChange={(z)=>{
              setProductDescription(z.target.value)
            }}></textarea>
            <Separator></Separator>
            {/* {productDescription} */}
            {/* <button type='submit'className='btn btn-success' > {btnName} </button> */}
            {btnType ?
              <button className='btn btn-success'onClick={()=>onSubmit()} > Add Product </button>

              : <button className='btn btn-success' onClick={()=>{
                console.log('update')
                updateSubmit()
                
              }} > Update Product </button>

            }


        </Form>
        <SearchBar></SearchBar>
        {isLoadingProduct?(<Loading></Loading>):(<>
          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>

              <th scope="col">Brand</th>
              <th scope='col'>createdAt</th>
              <th scope='col'>Update</th>
              <th scope='col'>Delete</th>

            </tr>
          </thead>
          <tbody>
            {products.slice(0,cardNumber).map((item,index)=>{
              return(
                <tr  key={index}>
                  <td>{index}</td>

                  <td>{item.productName}</td>
                  <td><ImgStyle src={imgUrl+item.brandName+'/'+item.productImage}></ImgStyle></td>
                  <td>{item.price}</td>
                  <td>{item.productClass}</td>


                  <td>{item.brandName}</td>
                  <td>{item.createdAt}</td>
                  

                  <td> <a href='#FormInserte'><button className='btn btn-outline-info' onClick={()=>updateProductBtn(item)} ><FcRefresh></FcRefresh></button></a> </td>
                  
                  <td> <button className='btn btn-outline-danger'onClick={()=>deleteProductBtn(item._id)}>
                    <FcDeleteDatabase></FcDeleteDatabase></button> </td>

                </tr>
              )
            })}
          </tbody>
          </table>
            <Nav>
            <button className="btn btn-primary" disabled={(cardNumber>=products.length) ?'disapled':''} onClick={()=>{
              setCardNuber(cardNumber+10)
              // console.log('Next',products.length)
              // console.log('Next2',cardNumber)
  
            }}>More...</button>
  
          </Nav>
          <br></br>
          </>

        )
          
        }
  
        
    </BrandForm>  
  )
}

export default InsertProduct