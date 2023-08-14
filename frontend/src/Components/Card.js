import React, { useState } from 'react'
import styled from 'styled-components'
import cardImg from '../images/HomeBackground.jpg'
import { useSelector,useDispatch } from 'react-redux'
import {MdPlaylistAdd} from "react-icons/md"
import{FcViewDetails} from "react-icons/fc"
import{CgDetailsMore} from "react-icons/cg"
import { UserContext } from '../App'
import { useContext } from 'react'
import { useEffect } from 'react'
import {toast } from 'react-toastify';


// import { useState } from 'react'
import { getOrderUser,insertNewOrder,deleteOrder,reset } from '../features/Orders/orderSlice'

const CardStyle=styled.div`
    
    width: 18rem;
   
    /* height: fit-content; */
    min-height: 450px;
    max-height: 450px;
   
    overflow: hidden;
    /* overflow-y: ; */
    /* ------------ */
    transition: transform .5s;


  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
    content: '';
    opacity: 0;
    z-index: -1;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.009, 1.009, 1);
    /* background-color: aqua; */

    &::after {
      opacity: 1;
    }
  }
    /* ------------ */


`
const GroupBtn=styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const CardImg=styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;

`
const CardHeade=styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`
const ImgHeadCard=styled.img`
  max-width: 20px;
  max-height: 20px;
  border-radius: 2px;
`
const Card = (props) => {
  const primary = useContext(UserContext);

  const imgUrl='https://mila-ecommerce-iwnm.onrender.com/public/'
  const{newOrder,deletedOrder,orders,isLoadingOrder,isErrorOrder,isSuccessOrder,messageOrder}=useSelector((state)=>state.order)

  const{newBrand,deletedBrand,brands,isLoading,isError,isSuccess,message}=useSelector((state)=>state.brand)
  //  let brandLogo=''
  const {user}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  let imgP
  const[imgH,setImgH]=useState('')
  const getImg= async()=>{
    console.log('card')
    return imgUrl+props.item.brandName+'/'+( await brands.find(x=>x.brandName===props.item.brandName).brandLogo)
  }
  const deleteOrder1=(productId)=>{
    console.log('order delete id:',productId)
    let orderData={'userId':user._id,'productId':productId}
    dispatch(deleteOrder(orderData))
    
  }
  const insertNewOrder1=(productId)=>{
    console.log('order new id:',productId)
    let orderData={'userId':user._id,'productId':productId}
    dispatch(insertNewOrder(orderData))


  }
  useEffect(()=>{
    if(isErrorOrder){
      toast.error(message)
      // console.log('test toast',messageOrder)

      primary.setSee(true)
      primary.setNote(messageOrder)
      primary.setMode('failed')
    }
    if(isSuccessOrder){
      primary.setSee(true)
      primary.setNote('done successfully')
      primary.setMode('success') 
    }
    
    dispatch(reset())
  },[newOrder,orders,isErrorOrder,isSuccessOrder,messageOrder,dispatch])
  return (
    <CardStyle className="card text-dark bg-light mb-3" >
        {props.brand?(
          <>
            
            <div>
              <CardImg src={imgUrl+props.item.brandName+'/'+props.item.brandLogo} className="card-img-top"></CardImg>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.item.brandName}</h5>
                <p className="card-text">{props.item.brandClass}</p>
                <p className="card-text">{props.item.brandContacts}</p>
    
            </div>
          </>

        ):(
          
          <>
          <CardHeade className="card-header">
           
            {/* {brands?(
            //  {()=> getImg}
            //  <ImgHeadCard src={()=>getImg}></ImgHeadCard>

              <ImgHeadCard src={imgUrl+props.item.brandName+'/'+(brands.find(x=>x.brandName===props.item.brandName).brandLogo)}></ImgHeadCard>
              ):''} */}
                <div>{props.item.brandName}</div>

              {props.isOrder?(
                <button type="button" className="btn-close" aria-label="Close" onClick={()=>deleteOrder1(props.item._id)}></button>

              ):(null)}

          </CardHeade>
          <CardImg src={imgUrl+props.item.brandName+'/'+props.item.productImage} className="card-img-top"></CardImg>

          <div className="card-body">
              <h5 className="card-title">{props.item.productName}</h5>
              {props.item.price?(<p className="card-text">{props.item.price} $</p>):(null)}
              <p className="card-text">{props.item.brandContacts}</p>
              {/* <p className="card-text">{props.item.productDescription}</p> */}
              {props.isProduct?(
                <GroupBtn>
                {/* <button className='btn'><FcViewDetails></FcViewDetails> more</button> */}
               <a href='#modal'><button className='btn btn-outline-primary'onClick={()=>{
                  primary.setModal(true)
                  primary.setItem(props.item)
                }}><CgDetailsMore></CgDetailsMore> more</button></a> 


                <button className='btn btn-outline-success' onClick={()=>{
                  if(user===undefined||user===null){
                    primary.setMode('failed')
                    primary.setNote('please signIn first and try again')
                    primary.setSee(true)
                    setTimeout(()=>{primary.setSee(false)},5000)
                    


                  }else{

                    insertNewOrder1(props.item._id)
                    // primary.setMode('success')

                    // primary.setNote('It is save in your list')
                    // primary.setSee(true)
                    setTimeout(()=>{primary.setSee(false)},3000)


                  }

                }} >save <MdPlaylistAdd></MdPlaylistAdd></button>
              </GroupBtn>
              ):(null)}
              
          </div>
          {/* <div class="card-footer bg-transparent border-success">Footer</div> */}

          </>

        )}
       
    </CardStyle>
  )
}

export default Card