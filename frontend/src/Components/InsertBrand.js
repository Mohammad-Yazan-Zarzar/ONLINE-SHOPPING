import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import {useSelector,useDispatch}from 'react-redux';
import{reset,insertBrand,getBrands,deleteBrand} from '../features/Brands/brandsSlice'
import {toast } from 'react-toastify';
// import { set } from 'mongoose';
import { FcDeleteDatabase } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";

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
  max-width: 500px;
  /* width: 0px; */
  height: 3px;
  opacity: 0;
  background-color: #006d77;

  transition: all .30s linear;

`
const InsertBrand = () => {
  const imgUrl='http://localhost:5000/public/'
  const brandData=new FormData();
    const [imgField,setImg]=useState('')
    const [formData,setFormData]=useState({
        'brandName':'',
        'BrandLogo':'',
        'contactNumber':'',
        'brandClass':''
    
    })
  const[brandCategory,setBrandCategory]=useState('')
  const{brandName,BrandLogo,contactNumber,brandClass}=formData
  const dispatch=useDispatch()
  const{newBrand,deletedBrand,brands,isLoading,isError,isSuccess,message}=useSelector((state)=>state.brand)

  const onChange=(e)=>{
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
    // console.log(e.target.files);
    // console.log(e.target.files[0]);
    brandData.append('BrandLogo',e.target.files[0])

  }
  const deleteBrandBtn=(_id)=>{
    console.log('deleteBrand2',_id);
    dispatch(deleteBrand(_id))
    // dispatch(reset())
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    brandData.append('brandName',brandName)
    brandData.append('BrandLogo',BrandLogo)
    brandData.append('contactNumber',contactNumber)
    brandData.append('brandClass',brandCategory)

    // console.log('brandData',brandData)
    // console.log('formData',formData)


    dispatch(insertBrand(brandData))
    setBrandCategory('')
  }
  useEffect(()=>{
    dispatch(getBrands())

  },[])
  useEffect(()=>{
    // console.log(user,isError,isSuccess,message)
    if(isError){
      toast.error(message)
    }
    if(isSuccess){
      dispatch(getBrands())
      // console.log('brand',brands)
      setFormData({
        'brandName':'',
        'BrandLogo':'',
        'contactNumber':'',
        'brandClass':''
    
    })
    setImg('')
      
    }
    dispatch(reset())
  },[newBrand,deletedBrand,brands,isError,isSuccess,message,dispatch])
  
  return (
    <BrandForm onSubmit={onSubmit}>
        <h3>Inserte New Brand To database</h3>
        <Form enctype="multipart/form-data">
            <label>Name Of Brand</label>
            <InputForm type='text' name='brandName' value={brandName} onChange={onChange} ></InputForm>
            <Separator></Separator>

            <label>Logo </label>
            <InputForm type='file' name='BrandLogo' value={imgField}  onChange={handleImg} ></InputForm>
            {/* <button type='file'>+</button> */}
            <Separator></Separator>

            <label>Contact Number </label>
            <InputForm type='number' name='contactNumber' value={contactNumber} onChange={onChange} ></InputForm>
            <Separator></Separator>
            {/* <label>Classification Of Brand</label>
            <InputForm type='text' name='brandClass' value={brandClass} onChange={onChange} ></InputForm>
            <Separator></Separator> */}
            <select class="form-select" aria-label="Default select example" value={brandCategory} onChange={(t)=>{
              setBrandCategory(t.target.value)
            
              
            }}>
              <option selected> select Brand Category</option>
              <option value="Cofee">Cofee</option>
              <option value="Tea">Tea</option>
              <option value="Chips">Chips</option>
              <option value="Sweets">Sweets</option>
              <option value="Nuts">Nuts</option>
              <option value="Dates">Dates</option>

              <option value="Supplies for restaurants and shops">Supplies for restaurants and shops</option>


          </select>
          <Separator></Separator>
          {brandCategory}

            <button type='submit'className='btn btn-primary' > Inserte </button>


        </Form>
        {isLoading?(<h1>Loading</h1>):(
          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Logo</th>
              <th scope="col">Class</th>

              <th scope="col">contactNumber</th>
              <th scope='col'>createdAt</th>
              <th scope='col'>Update</th>
              <th scope='col'>Delete</th>

            </tr>
          </thead>
          <tbody>
            {brands.map((item,index)=>{
              return(
                <tr  key={item._id}>
                  <td>{index}</td>

                  <td>{item.brandName}</td>
                  <td><ImgStyle src={imgUrl+item.brandName+'/'+item.brandLogo}></ImgStyle></td>
                  <td>{item.brandClass}</td>

                  <td>{item.brandContacts}</td>
                  <td>{item.createdAt}</td>
                  

                  <td> <button className='btn btn-outline-info'><FcRefresh></FcRefresh></button> </td>
                  
                  <td> <button className='btn btn-outline-danger'onClick={()=>deleteBrandBtn(item._id)}>
                    <FcDeleteDatabase></FcDeleteDatabase></button> </td>

                </tr>
              )
            })}
          </tbody>
          </table>

        )
          
        }
  
        
    </BrandForm>  
  )
}

export default InsertBrand