import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { useSelector } from 'react-redux'

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
  const{newBrand,deletedBrand,brands,isLoading,isError,isSuccess,message}=useSelector((state)=>state.brand)
  console.log('props.items',props.items) 
  
  if(props.items.length>0){
    return (
      <ListBody className='container'>
         
          {props.items.map((item,index)=>{
            return(<Card key={index} item={item} brand={props.isBrand} isProduct={true}   ></Card>)
          })}
  
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