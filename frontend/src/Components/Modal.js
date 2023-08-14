import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { UserContext } from '../App'
import { SetMeal } from '@mui/icons-material'
const ModalBodyStyle=styled.div`
    background-color: #eefeee;
    width:80%;
    top: ${props => props.prim ? '20vh' : '-1000px'};
    display: flex;
    position: fixed;
    margin: auto auto;
    flex-direction: column;
    /* bottom: 10px; */

    border-radius: 10px;
    z-index:9999;
    padding: 5px 5px;

    

`
const CardImg=styled.img`
  width: 100%;
  /* height: 100%; */
  max-height: 250px;


`
const Modal = () => {
  const primary = useContext(UserContext);
  const imgUrl='https://mila-ecommerce-iwnm.onrender.com/public/'


  return (
    <div className='d-flex justify-content-center' >
        <ModalBodyStyle prim={primary.modal} className='container' id='modal'>
        <div className='d-flex justify-content-end'>
            <button  type="button" className="btn-close" aria-label="Close"onClick={()=>{
            primary.setModal(false)
            }}  ></button>

        </div>
            
        {/* {primary.modal?(<h2>Modal</h2>):(<h2>No</h2>)} */}
        <div className='row justify-content-center'>
            <div className='col-sm-12 col-md-4'>
                <CardImg src={imgUrl+primary.item.brandName+'/'+primary.item.productImage} className='img-fluid' alt='..'></CardImg>

            </div>
            <div className='col-sm-12 col-md-8 text-center'>
                <h4>{primary.item.productName}</h4>
                {primary.item.price?(<p><span className='fw-bold'>Price</span>: {primary.item.price} $</p>):(null)}
                <p>{primary.item.productDescription}</p>
            </div>
            
        </div>
    </ModalBodyStyle>

    </div>
    
  )
}

export default Modal