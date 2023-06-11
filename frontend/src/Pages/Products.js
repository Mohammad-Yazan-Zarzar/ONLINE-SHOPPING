import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import Card from '../Components/Card'
import {useSelector,useDispatch}from 'react-redux';
import{reset,insertNewProduct,getProducts,deleteProduct} from '../features/Products/productSlice'
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelect } from '@react-three/drei';

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
const Products = () => {
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

  return (
    <>
      <SearchBar></SearchBar>
      {isLoadingProduct?(<h1>Loading</h1>):(
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
  )
}

export default Products