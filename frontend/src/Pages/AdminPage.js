import React from 'react'
import InsertBrand from '../Components/InsertBrand'
import InsertProduct from '../Components/InsertProduct'
import { useState } from 'react'
import styled from 'styled-components'


const Page=styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
    /* justify-content: space-around; */
`
const Group=styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    /* background-color: #222; */
    display: flex;
    gap: 5px;
`
const AdminPage = () => {
    const [showInsertBrand,setShowInsertBrand]=useState(true)
    const [showInsertProduct,setShowInsertProduct]=useState(false)
    const[productBtn,setProductBtn]=useState('#ffff')
    const[brandBtn,setbrandBtn]=useState('#3B71CA')

    

  return (
    <>
        <Page className='container'>
            <h1>AdminPage</h1>
           
            <Group>
                <button className='btn' style={{background:brandBtn}} onClick={()=>{
                    setShowInsertBrand(true)
                    setShowInsertProduct(false)
                    setbrandBtn('#3B71CA')
                    setProductBtn('#ffff')

                }}>insert Brand</button>
                <button className='btn' style={{background:productBtn}} onClick={()=>{
                    setShowInsertBrand(false)
                    setShowInsertProduct(true)
                    setbrandBtn('#fff')
                    setProductBtn('#14A44D')

                }} >insert Product</button>

            </Group>
            {showInsertBrand? <InsertBrand/>:null}
            {showInsertProduct? <InsertProduct/>:null}

        </Page>
        
    </>
  )
}

export default AdminPage