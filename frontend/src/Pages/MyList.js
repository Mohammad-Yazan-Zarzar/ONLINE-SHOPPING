import React from 'react'
import {useSelector,useDispatch}from 'react-redux';
import { useEffect } from 'react'
// import { Link } from "react-router-dom";
import{reset,insertNewProduct,getProducts,deleteProduct} from '../features/Products/productSlice'

import { getOrderUser,insertNewOrder } from '../features/Orders/orderSlice'
import { useState } from 'react'
import Card from '../Components/Card';
import Loading from '../Components/Loading';
import styled from 'styled-components';
const MyListBody=styled.div`
  min-height: 90vh;

`
const CardProduct=styled(Card)`
  width: 18rem !important;
`
const MyListCards=styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const MyListNote=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`

const MyList = () => {
  const {user}=useSelector((state)=>state.auth)
  const{newProduct,deletedProduct,products,isLoadingProduct,isErrorProduct,isSuccessProduct,messageP}=useSelector((state)=>state.product)

  const dispatch=useDispatch()
  const{newOrder,deletedOrder,orders,isLoadingOrder,isErrorOrder,isSuccessOrder,messageOrder}=useSelector((state)=>state.order)

  useEffect(()=>{
    // console.log('userId',localStorage.getItem("user")._id)
   if(user!==undefined && user!==null){
    // console.log('user',user)
    dispatch(getOrderUser(user._id))
    console.log('myList 1')
    if(products.length===0){
      dispatch(getProducts())

    }

    }
    
    
    // dispatch(getProducts())
  


  },[deletedOrder])
  // useEffect(()=>{
  //   dispatch(getOrderUser(user._id))
  //   console.log('when delet order')


  // },[newOrder,deletedOrder])

  return (
    (user===null?(
      <MyListNote>
          <h2> Please sign in and try again </h2>
        </MyListNote>
    ):(

    <MyListBody>
      <h2>MyList </h2>

    {isLoadingOrder?(
      <Loading></Loading>
    ):(
      <MyListCards className='container' >
      {orders.map((item,index)=>{
        // console.log('item.product',item.product)
        // console.log('products._id',products[0]._id)
        // console.log('products.filter', products.find(x=>x._id===item.product))

        if(products.find(x=>x._id===item.product)!==undefined){
          return( 
            <>
          {/* <p key={index} > {item.product} </p> */}
         <CardProduct key={index} item= { products.find( x=>x._id===item.product)} isOrder={true}  ></CardProduct> 
         {/* {products.filter(x=>x._id===item.product).productName} */}
         </>
  
          )

        }else{
          return(
            <MyListNote>
              <h2> No Any Product Add yet </h2>
            </MyListNote>
          )
        }
        
        

      })}

    </MyListCards>
    )}
     
    </MyListBody>
    ))

  )
}

export default MyList