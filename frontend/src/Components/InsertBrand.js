import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import {useSelector,useDispatch}from 'react-redux';
import{reset,insertBrand,getBrands} from '../features/Brands/brandsSlice'
import {toast } from 'react-toastify';
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
const Separator=styled.span`
  width:80%;
  max-width: 500px;
  /* width: 0px; */
  height: 3px;
  opacity: 0;
  background-color: #006d77;

  transition: all .30s linear;

`
const InsertBrand = () => {
  const brandData=new FormData();

    const [formData,setFormData]=useState({
        'brandName':'',
        'BrandLogo':'',
        'contactNumber':''
    
    })
  const{brandName,BrandLogo,contactNumber}=formData
  const dispatch=useDispatch()
  const{brand,isLoading,isError,isSuccess,message}=useSelector((state)=>state.brand)

  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,

      [e.target.name]:e.target.value,
    }))
  }
  const handleImg=(e)=>{
    // e.preventDefault()
    setFormData((prevState)=>({
      ...prevState,

      [e.target.name]:e.target.files[0],
    }))
    console.log(e.target.files);
    console.log(e.target.files[0]);
    brandData.append('BrandLogo',e.target.files[0])

  }
  const onSubmit=(e)=>{
    e.preventDefault()
    brandData.append('brandName',brandName)
    brandData.append('BrandLogo',BrandLogo)
    brandData.append('contactNumber',contactNumber)
    console.log('brandData',brandData)
    console.log('formData',formData)


    dispatch(insertBrand(brandData))
  }
  useEffect(()=>{
    // console.log(user,isError,isSuccess,message)
    if(isError){
      toast.error(message)
    }
    if(isSuccess|| brand){
      dispatch(getBrands)
    }
    dispatch(reset())
  },[brand,isError,isSuccess,message,dispatch])
  return (
    <BrandForm onSubmit={onSubmit}>
        <h3>Inserte New Brand To database</h3>
        <Form enctype="multipart/form-data">
            <label>Name Of Brand</label>
            <InputForm type='text' name='brandName' value={brandName} onChange={onChange} ></InputForm>
            <Separator></Separator>

            <label>Logo </label>
            <InputForm type='file' name='BrandLogo'  onChange={handleImg} ></InputForm>
            {/* <button type='file'>+</button> */}
            <Separator></Separator>

            <label>Contact Number </label>
            <InputForm type='number' name='contactNumber' value={contactNumber} onChange={onChange} ></InputForm>
            <Separator></Separator>
            <button type='submit'className='btn btn-primary' > Inserte </button>
            

        </Form>
        {brandData[0]}
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Logo</th>
            <th scope="col">contactNumber</th>
          </tr>
        </thead>
        <tbody></tbody>
        </table>
    </BrandForm>  
  )
}

export default InsertBrand