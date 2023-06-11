import React from 'react'
import Dbox from '../Components/3Dbos'
import styled, { keyframes } from 'styled-components'
import BlobSvg from './blobanimation.svg'
import HomeImage1 from '../images/HomeBackground.jpg'
import List from '../Components/List'
import {useSelector,useDispatch}from 'react-redux';
import{reset,insertBrand,getBrands,deleteBrand} from '../features/Brands/brandsSlice'
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import { getProducts,getProductByClass } from '../features/Products/productSlice'
import { useState } from 'react'

// import { style } from '@mui/system'
// const HomeImage='../'
const HomeBody=styled.div`
  margin:0px;
  min-height:50vh;
  /* background-color:#222; */
  /* display:flex; */
  align-items:center;
  /* left:20px; */
  width: 100%;
  background-image: url(${HomeImage1});
  background-size:cover ;
  /* background-position:center ; */
  justify-content:center;
  /* height: fit-content; */
  
  


`
const Section1=styled.div`
  width:100%;
  font-size:20px;
  min-height:50vh;
  /* justify-content:space-around; */
  /* background-color:#222 ; */
  padding:10px;


`
const Blob=styled.img`
  position: absolute;
  left: 0px;
  top: -30px;
  z-index: 0;
  width: 100%;
  height: 300px;
`
const Right=styled.div`
  position: relative;
  max-height:600px;
  /* z-index:1; */
  /* overflow:hidden; */
  /* background-image: url('./blobanimation.svg'); */


`
const RightModel=styled(Dbox)`
  position: relative;
  /* z-index:20; */
  width: 100%;
  /* background-image: url(${BlobSvg}); */
  

`
const movText=keyframes`
   
    to{
      width: 100%;
      color: #006d77;
    }
  
`
const H2=styled.h2`
  position: relative;
  color:transparent;
  -webkit-text-stroke:1px #006d77 ;
  /* font-weight:bold; */
  font-size:26px;
  ::after{
    content:"Welcome To Shop";
    position: absolute;
    top:0px;
    left:0px;
    color: transparent;
    /* width:0px; */
    /* overflow: hidden; */
    animation:${movText} 2s linear both;
    animation-iteration-count: infinite;
  }

 
`
const Section2=styled.div`
    /* background-color:#222 ; */
    width:100%;
    text-align:center;
    min-height: 400px;
`

export const Home = () => {
  const[tea,setTea]=useState('')
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getBrands())
    dispatch(getProducts())
    setTea(products.filter(x=>x.productClass==='Tea'))
    console.log('tea',tea)


  },[])
  const{newProduct,deletedProduct,products,isLoadingProduct,isErrorProduct,isSuccessProduct,messageP}=useSelector((state)=>state.product)
  const{newBrand,deletedBrand,brands,isLoading,isError,isSuccess,message}=useSelector((state)=>state.brand)

  return (
    <>
      <HomeBody className='' >
        <Section1 className='row'>
          <div className='col-12 col-lg-6 order-first align-self-center'> 
            <H2>Welcome To Shop</H2>
            <p>Your favorite markets are now on your phone</p> 
          </div>
          <Right className='col-12 col-lg-6 align-self-center  justify-content-center'>
            {/* <Blob src={BlobSvg} alt='ttt' ></Blob> */}
            
            <RightModel></RightModel>
          </Right>

        </Section1>
        <Section2>
            <h3> Tea </h3>
            {/* <h4>++{products.find(x=>x.productClass==='Cofee').productName}</h4> */}
            <List items={products.filter(x=>x.productClass==='Tea').slice(0,9)} isLoading={isLoadingProduct} isBrand={false}></List>
            <Link to='/Products'onClick={()=> dispatch(getProductByClass('Tea')) }>
              <button className='btn btn-primary' >All Tea Products</button>

            </Link>
        </Section2>

        <br></br>
        <Section2>
            <h3> Cofee </h3>
            {/* <h4>++{products.find(x=>x.productClass==='Cofee').productName}</h4> */}
            <List items={products.filter(x=>x.productClass==='Cofee').slice(0,9)} isLoading={isLoadingProduct} isBrand={false}></List>
          
            <Link to='/Products' onClick={()=> dispatch(getProductByClass('Cofee')) }>
              <button className='btn btn-primary' >All Cofee Products</button>

            </Link>
        </Section2>
        <br></br>
        <Section2>
            <h3> Nuts </h3>
            {/* <h4>++{products.find(x=>x.productClass==='Cofee').productName}</h4> */}
            <List items={products.filter(x=>x.productClass==='Nuts').slice(0,9)} isLoading={isLoadingProduct} isBrand={false}></List>
            <Link to='/Products'onClick={()=> dispatch(getProductByClass('Nuts')) }>
              <button className='btn btn-primary' >All Nuts Products</button>

            </Link>
        </Section2>
        <br></br>
        <Section2>
            <h3> Chips </h3>
            {/* <h4>++{products.find(x=>x.productClass==='Cofee').productName}</h4> */}
            <List items={products.filter(x=>x.productClass==='Chips').slice(0,9)} isLoading={isLoadingProduct} isBrand={false}></List>
            <Link to='/Products'onClick={()=> dispatch(getProductByClass('Chips')) }>
              <button className='btn btn-primary' >All Chips Products</button>

            </Link>
        </Section2>
        <br></br>
        <Section2>
            <h3> Sweets </h3>
            {/* <h4>++{products.find(x=>x.productClass==='Cofee').productName}</h4> */}
            <List items={products.filter(x=>x.productClass==='Sweets').slice(0,9)} isLoading={isLoadingProduct} isBrand={false}></List>
            <Link to='/Products'onClick={()=> dispatch(getProductByClass('Sweets')) }>
              <button className='btn btn-primary' >All Sweets Products</button>

            </Link>
        </Section2>
        <br></br>
        <Section2>
            <h3> Dates </h3>
            {/* <h4>++{products.find(x=>x.productClass==='Cofee').productName}</h4> */}
            <List items={products.filter(x=>x.productClass==='Dates').slice(0,9)} isLoading={isLoadingProduct} isBrand={false}></List>
            <Link to='/Products'onClick={()=> dispatch(getProductByClass('Dates')) }>
              <button className='btn btn-primary' >All Dates Products</button>

            </Link>
        </Section2>
        <br></br>
        <Section2>
            <h3> Supplies for restaurants and shops </h3>
            {/* <h4>++{products.find(x=>x.productClass==='Cofee').productName}</h4> */}
            <List items={products.filter(x=>x.productClass==='Supplies for restaurants and shops').slice(0,9)} isLoading={isLoadingProduct} isBrand={false}></List>
            <Link to='/Products'onClick={()=> dispatch(getProductByClass('Supplies for restaurants and shops')) }>
              <button className='btn btn-primary' >All Supplies for restaurants and shops Products</button>

            </Link>
        </Section2>
        <br></br>
        <Section2>
            <h3>Brands</h3>
            <List items={brands.slice(0,9)} isLoading={isLoading} isBrand={true} ></List>
            <Link to='/Brands'>
              <button className='btn btn-primary' >All Brands</button>

            </Link>
        </Section2>

        <br></br>
        <br></br>
        
       
      </HomeBody>

    </>
  )
}
export default Home

