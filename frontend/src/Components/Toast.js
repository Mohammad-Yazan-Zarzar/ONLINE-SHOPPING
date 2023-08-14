import React from 'react'
import styled from 'styled-components'
import { useState, createContext, useContext } from "react";
import { useSelector } from 'react-redux';
import { UserContext } from '../App';
const ToastStyle=styled.div`
    z-index: 11;
   
    word-break: keep-all;
    position: fixed;
    bottom:100px;
    /* right: -1000px; */
    right: ${props => props.primary ? '10px' : '-1000px'};
    /* opacity: 0.5; */
    padding: 20px 20px;
    border: 5px;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`
const Toast = () => {
  const primary = useContext(UserContext);
  const{newOrder,deletedOrder,orders,isLoadingOrder,isErrorOrder,isSuccessOrder,messageOrder}=useSelector((state)=>state.order)
// if(isErrorOrder){
//   return(
//     <ToastStyle primary={primary.see} className="alert alert-warning" role="alert" >
//     <div>{messageOrder}</div>

//     <button type="button" class="btn-close" aria-label="Close" onClick={()=>{
//       primary.setSee(false)
//     }} ></button>
  
//   </ToastStyle>  

//   )
// }

  return (
    <>
        {/* <button type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button> */}
{
  primary.mode==='failed'?(
    <ToastStyle primary={primary.see} className="alert alert-warning" role="alert" >
    <div>{primary.note}</div>

    <button type="button" className="btn-close" aria-label="Close" onClick={()=>{
      primary.setSee(false)
    }} ></button>
  
  </ToastStyle>  
  ):(
    <ToastStyle primary={primary.see} className="alert alert-success" role="alert" >
    <div>{primary.note}</div>

    <button type="button" className="btn-close" aria-label="Close" onClick={()=>{
      primary.setSee(false)
    }} ></button>
  
  </ToastStyle>  
  )
}
  


    </>
  
  )
}

export default Toast