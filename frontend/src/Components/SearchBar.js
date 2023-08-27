import React, { useState } from 'react'
import styled from 'styled-components'
import { FcSearch } from "react-icons/fc";
import {useSelector,useDispatch}from 'react-redux';
import{reset,insertNewProduct,getProducts,deleteProduct,getProductByName, getProductByClass} from '../features/Products/productSlice'
const Barbody=styled.div`
  width: 100%;
  /* background-color: #222; */
  border-bottom-left-radius:10px ;
  border-bottom-right-radius:10px ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px 0px ;
  border: 1px solid  #83c5be;
  color:  #006d77;
  box-shadow: 0em 0 .4em #83c5be, 0em 0 .4em #83c5be;


`
const InputBar=styled.div`
  width: 80%;
  border-radius: 10px;
  border: 1px solid #83c5be;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:  #006d77;
  background-color: #eee;

`
const Input=styled.input`
  width: 90%;
  outline-style: none;
  border: none;
  background-color:transparent;
  text-align: center;
  border-radius: 10px;
`
const SelectItem=styled.select`
  width:100px;
`
const SearchBar = () => {
  const{newProduct,deletedProduct,products,isLoadingProduct,isErrorProduct,isSuccessProduct,message}=useSelector((state)=>state.product)

  const dispatch=useDispatch()
  const [classType,setClassType]=useState('Select the Product Class')
  const[productName,setProductName]=useState('')
  const submit=(e)=>{
    e.preventDefault()
    console.log(productName);

    dispatch(getProductByName(productName))
    
    console.log('product page')
    console.log(classType)
    setClassType('Product Class')
    setProductName('')
  }
  return (
    // <Barbody className='container'onSubmit={submit}>
    <Barbody className='container' >


        <InputBar>
          <Input placeholder='search' value={productName} onChange={(e)=>{
            setProductName(e.target.value)
            products.filter(item=>item.productName.includes(e.target.value))
          }}onSubmit={submit}></Input>
          <FcSearch></FcSearch>
        </InputBar>
        <SelectItem className="form-select" aria-label="Default select example" value={classType}  onChange={(e)=>{
          if(e.target.value==='All'){
            dispatch(getProducts())
          }else{
            setClassType(e.target.value)
            dispatch(getProductByClass(e.target.value))
          }
          
          // console.log('class')
        }} >
              <option > select Category</option>

              <option value ='All'> All</option>
              <option value="Cofee">Cofee</option>
              <option value="Tea">Tea</option>
              <option value="Mate">Mate</option>
              <option value="Foodstuffs">Foodstuffs</option>
              <option value="Chips">Chips</option>
              <option value="Biscuit">Biscuit</option>
              <option value="Sweets">Sweets</option>
              <option value="Nuts">Nuts</option>
              <option value="Spices">Spices</option>
              <option value="Dates">Dates</option>
              <option value="Supplies for restaurants and shops">Supplies for restaurants and shops</option>


          {/* <option value={''}>food</option> */}

        </SelectItem>
    {/* <p>{classType}</p> */}

    </Barbody>
  )
}

export default SearchBar