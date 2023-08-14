import React, { useEffect } from 'react'
import { BiUserCircle } from "react-icons/bi";
import styled from 'styled-components';
import { useState } from 'react';
import {useSelector,useDispatch}from 'react-redux';

import {useNavigate} from 'react-router-dom';
import {toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';
import {register, reset} from '../features/auth/authSlice'
import Loading from '../Components/Loading';
// import { reset } from 'nodemon';
const RegisterBody=styled.div`
    height: 85vh;
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
  background-color: transparent;
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
function Register() {
  const [formData,setFormData]=useState({
    'name':'',
    'email':'',
    'password1':'',
    'password2':''

  })
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const{name,email,password1,password2}=formData
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const{user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth)
  const[ErrorEmail,setErrorEmail]=useState('')
  const[ErrorLength,setErrorLength]=useState('')
  const[ErrorMatch,setErrorMatch]=useState('')
  const[Error,setError]=useState('')

  // const[ErrorEmail,setErrorEmail]=useState('')

  // console.log('1',user)
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setErrorEmail('Please enter a valid email address');
    } else {
      setErrorEmail('');
    }
  
  }
  const validLength=(password)=>{
    if(password.length<8){
      setErrorLength('please enter password > 8 charecter')
    }else{
      setErrorLength('')
    }

  }
  const validMatch=(password1,password2)=>{
    if(password1!==password2){
      setErrorMatch('the passwords do not match')
    }else{
      setErrorMatch('')
    }

  }
  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,

      [e.target.name]:e.target.value,
    }))
    
    
    

    // console.log(email)
    // console.log(isValidEmail(email))
    
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    // console.log(formData)
    
    if(password1!==password2){
      setErrorMatch('passwords do not match')
    }
    else if(!emailRegex.test(email)){
      setErrorEmail('Please enter a valid email address');
    }
    else if(password1.length<8){
      setErrorLength('please enter password > 8 charecter')


    }
    else{
      const userData={name,email,'password':password1}
      // console.log(userData)
      setErrorEmail('')
      setErrorLength('')
      setErrorMatch('')
      dispatch(register(userData))
    }
  }
  useEffect(()=>{
    // console.log(user,isError,isSuccess,message)
    if(isError){
      toast.error(message)
      setError(message+': maype the user already exist or error in network')
    }
    if(isSuccess||user){
      navigate('/Home')
    }
    dispatch(reset())
  },[user,isError,isSuccess,message,dispatch])

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <RegisterBody>
      <h2><BiUserCircle></BiUserCircle>Register</h2>
      {Error!==''?(<div className="alert alert-danger" role="alert">
          {Error}
      </div>):null}
      <RegisterForm onSubmit={onSubmit}>
        <Field>
          <h4>User Name</h4>
          <InputForm 
          type='text' placeholder='Your Name'
          name='name' value={name} onChange={onChange}
          ></InputForm>
          <Separator className="separator"> </Separator>

        </Field>
        <Field>
          <h4>Email</h4>
          <InputForm type='email' placeholder='Like:xxxx@yyy.com'
            name='email' value={email} onChange={onChange}
          ></InputForm>
          <Separator className="separator"> </Separator>
        </Field>
        {ErrorEmail}
        <Field>
          <h4>Password</h4>
          <InputForm type='password'placeholder='Your Password'
            name='password1' value={password1} onChange={onChange}
          ></InputForm>
          <Separator className="separator"> </Separator>
        </Field>
        {ErrorLength}
        <Field>
          <h4>Confirm Password</h4>
          <InputForm type='password'placeholder='Confirm'
            name='password2' value={password2} onChange={onChange}
          
          ></InputForm>
          <Separator className="separator"> </Separator>
        </Field>
        {ErrorMatch}
        {/* {password2} */}

        <button type='submit' className='btn btn-primary' disabled={(name==='' || password1==='' || password2==='' || email==='') ?'disapled':''}>Register</button>
        
        <h4>{message}</h4>

      </RegisterForm>
      
    </RegisterBody>
  )
}

export default Register