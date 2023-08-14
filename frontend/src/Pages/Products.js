import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import Card from '../Components/Card'
import {useSelector,useDispatch}from 'react-redux';
import{reset,insertNewProduct,getProducts,deleteProduct} from '../features/Products/productSlice'
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelect } from '@react-three/drei';
import Toast from '../Components/Toast';
import Loading from '../Components/Loading';
import { UserContext } from '../App'
import { useContext } from 'react'
const ProductsBody=styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  /* background-color: #222; */
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`
const CardProduct=styled(Card)`
  width: 18rem !important;
`
const Nav=styled.div`
  width: 100%;
  display: flexbox;
  justify-content: center;
`
const MyStyle=styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Products = () => {
  const primary = useContext(UserContext);
 
  const dispatch=useDispatch()
  const{newProduct,deletedProduct,products,isLoadingProduct,isErrorProduct,isSuccessProduct,message}=useSelector((state)=>state.product)
  // useEffect(()=>{
    
  // },[cardNumber])
  const[cardNumber,setCardNuber]=useState(5)
  const[linkNumber,setLinkNumber]=useState(1)
  useEffect(()=>{
    if(products.length===0){
      dispatch(getProducts())

    }
    setLinkNumber(products.length/10)

  },[])
  // useEffect(()=>{
  //   if(isErrorProduct){
  //     // toast.error(message)
  //     // console.log('test toast',messageOrder)

  //     primary.setSee(true)
  //     primary.setNote(message)
  //     primary.setMode('failed')
  //   }
  //   if(isSuccessProduct){
  //     primary.setSee(true)
  //     primary.setNote('done successfully')
  //     primary.setMode('success') 
  //   }
    
  //   dispatch(reset())
  // },[newProduct,products,isErrorProduct,isSuccessProduct,message,dispatch])
  return (
    <>
      <SearchBar></SearchBar>
      
      {isLoadingProduct?(
      <MyStyle><Loading></Loading></MyStyle>):(
        
        <>
        {isErrorProduct?(<MyStyle><h1>{message}</h1></MyStyle>):(
          <>
            <ProductsBody className='container'>
            {
              products.slice(0,cardNumber).map((item,index)=>{
                return   <CardProduct key={index} item={item} isProduct={true}  ></CardProduct>
                })
    
            }
            
           
            
            </ProductsBody>
            <Nav>
              <button className="btn btn-primary" disabled={(cardNumber>=products.length) ?'disapled':''} onClick={()=>{
                setCardNuber(cardNumber+10)
                console.log('Next',products.length)
                console.log('Next2',cardNumber)
    
              }}>More...</button>
    
            </Nav>
            <br></br>
          </>

        )}
     
          
      </>
      )}
      {/* <Toast></Toast> */}
   
        
    </>
  )
}

export default Products