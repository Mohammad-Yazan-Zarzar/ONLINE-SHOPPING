import React from 'react'
import InsertBrand from '../Components/InsertBrand'
import InsertProduct from '../Components/InsertProduct'
import { useState } from 'react'
import {useSelector,useDispatch}from 'react-redux';
import {toast } from 'react-toastify';
import { useEffect } from 'react';
import {login, reset} from '../features/authAdmin/authAdminSlice'

import styled from 'styled-components'


const Page=styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    /* justify-content: space-around; */
`
const Group=styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    /* background-color: #222; */
    display: flex;
    gap: 5px;
`
const AdminPage = () => {
    const [formData,setFormData]=useState({
        'adminEmail':'',
        'adminPassword':''
    
      })
    const{adminEmail,adminPassword}=formData
    const dispatch=useDispatch()
    const{admin,isLoadingAdmin,isErrorAdmin,isSuccessAdmin,message}=useSelector((state)=>state.authAdmin)  
    const [showInsertBrand,setShowInsertBrand]=useState(true)
    const [showInsertProduct,setShowInsertProduct]=useState(false)
    const[productBtn,setProductBtn]=useState('#ffff')
    const[brandBtn,setbrandBtn]=useState('#3B71CA')
    const[isLogin,setIsLogin]=useState(false)

    const onChange=(e)=>{
        setFormData((prevState)=>({
          ...prevState,
    
          [e.target.name]:e.target.value,
        }))
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        const adminData={adminEmail,adminPassword}
        console.log(adminData)
        dispatch(login(adminData))

        
      }
      useEffect(()=>{
        // console.log(user,isError,isSuccess,message)
        if(isErrorAdmin){
          toast.error(message)
        }
        if(isSuccessAdmin||admin){
        //   navigate('/Home')
            setIsLogin(true)

        }
        dispatch(reset())
      },[admin,isErrorAdmin,isSuccessAdmin,message,dispatch])
      if(isLoadingAdmin){
        return <h1>loading</h1>
      }
    

  return (
    <>

    {isLogin?<Page className='container'>
    <h1>AdminPage</h1>
    
   
    <Group>
        <button className='btn' style={{background:brandBtn}} onClick={()=>{
            setShowInsertBrand(true)
            setShowInsertProduct(false)
            setbrandBtn('#3B71CA')
            setProductBtn('#ffff')

        }}>insert Brand</button>
        <button className='btn' style={{background:productBtn}} onClick={()=>{
            setShowInsertBrand(false)
            setShowInsertProduct(true)
            setbrandBtn('#fff')
            setProductBtn('#14A44D')

        }} >insert Product</button>

    </Group>
    {showInsertBrand? <InsertBrand/>:null}
    {showInsertProduct? <InsertProduct/>:null}

</Page>: <form className='container ' onSubmit={onSubmit} >
        {/* <h1>AdminPage{localStorage.admin.adminName}</h1> */}

        <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='adminEmail' onChange={onChange} ></input>

        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='adminPassword' onChange={onChange}></input>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
}
   
       
        
        
    </>
  )
}

export default AdminPage