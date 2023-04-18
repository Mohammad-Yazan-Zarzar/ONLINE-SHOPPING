import React from 'react'
import { BiLogIn } from "react-icons/bi";
import styled from 'styled-components';
import { useState } from 'react';
import {useSelector,useDispatch}from 'react-redux';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';
import {login, reset} from '../features/auth/authSlice'
const RegisterBody=styled.div`
    height: 80vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

`
const RegisterForm=styled.form`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-top: 10px;
    /* border: 1px solid #333; */

`
const InputForm=styled.input`
  width:80%;
  max-width: 500px;
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
const Field=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
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
function Login() {
  const [formData,setFormData]=useState({
    'email':'',
    'password':''

  })
  const{email,password}=formData
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const{user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth)
  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,

      [e.target.name]:e.target.value,
    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    const userData={email,password}
    dispatch(login(userData))
    
  }
  useEffect(()=>{
    // console.log(user,isError,isSuccess,message)
    if(isError){
      toast.error(message)
    }
    if(isSuccess||user){
      navigate('/Home')
    }
    dispatch(reset())
  },[user,isError,isSuccess,message,dispatch])

  if(isLoading){
    return <h1>loading</h1>
  }
  return (
    <RegisterBody>
      <h2><BiLogIn></BiLogIn>Login</h2>
      <RegisterForm onSubmit={onSubmit}>
        {/* <Field>
          <label>User Name</label>
          <InputForm type='text' placeholder='please input your Name'></InputForm>
          <Separator className="separator"> </Separator>

        </Field> */}
        <Field>
          <label>Email</label>
          <InputForm type='email' placeholder='please input your Email'
            name='email' value={email} onChange={onChange}
          ></InputForm>
          <Separator className="separator"> </Separator>
        </Field>
        <Field>
          <label>Password</label>
          <InputForm type='password'placeholder='please input complex password'
            name='password' value={password} onChange={onChange}
          
          ></InputForm>
          <Separator className="separator"> </Separator>
        </Field>
        <button type='submit' className='btn btn-primary'>Login</button>
        

      </RegisterForm>
      
    </RegisterBody>
  )
}

export default Login