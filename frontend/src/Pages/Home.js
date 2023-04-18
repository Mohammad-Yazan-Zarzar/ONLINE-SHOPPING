import React from 'react'
import Dbox from '../Components/3Dbos'
import styled, { keyframes } from 'styled-components'
import BlobSvg from './blobanimation.svg'
import HomeImage1 from '../images/HomeBackground.jpg'
import List from '../Components/List'
import { style } from '@mui/system'
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
    height: 500px;
`

export const Home = () => {
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
            <h3>Specalist products</h3>
            <List></List>

        </Section2>

        <br></br>
        <br></br>
        
        <br></br>
        <br></br>

        <br></br>
      </HomeBody>

    </>
  )
}
export default Home

