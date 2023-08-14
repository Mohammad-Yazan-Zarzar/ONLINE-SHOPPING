import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { useSelector } from 'react-redux'
import Loading from './Loading'
const H3=styled.p`
  color:#006d77;
  text-align: center;
  margin: auto auto;
  word-break: keep-all;
  font-weight: bold;


`
const ListBody=styled.div`
    width:100%;
    /* background-color:#006d77 ; */
    min-height: 400px;
    padding:5px;
    color:#edf6f9;
    /* border:solid #83c5be 1px; */
    flex-wrap:nowrap;
    display: flexbox;
    gap:8px;
    overflow-x: scroll;
    margin-bottom: 5px;
    /* ........ */
    ::-webkit-scrollbar {
      width: 1px;
      height: 1px;
    }
    
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
}
/* ........ */
`

const List = (props) => {
  const{newBrand,deletedBrand,brands,isLoading,isError,isSuccess,messageP}=useSelector((state)=>state.brand)
  const{newProduct,deletedProduct,products,isLoadingProduct,isErrorProduct,isSuccessProduct,message}=useSelector((state)=>state.product)
  
  // console.log('props.items',props.items) 
  if(isLoadingProduct){
    return(
      <Loading></Loading>
    )
  }
  if(isErrorProduct){
    return(
      <>
      <h1>{message}</h1>
      <h1>{messageP}</h1>
    </>
      
    )
  }
  if(props.items.length>0){
    return (
      <ListBody className='container'>
         
          {props.items.map((item,index)=>{
            return(<Card key={index} item={item} brand={props.isBrand} isProduct={true}   ></Card>)
          })}
  
      </ListBody>
    )
  }
  if(props.items.length===0){
    return (
      <ListBody className='container'>
         <H3> There are no products available now </H3>
  
      </ListBody>
    )
  }
  return(
    <ListBody className='container'>
      <Card   item={props.items} brand={props.isBrand} isProduct={true}  ></Card>
      {/* <p>pr {props.items.productName}</p> */}

    </ListBody>
    
  )
  
}

export default List