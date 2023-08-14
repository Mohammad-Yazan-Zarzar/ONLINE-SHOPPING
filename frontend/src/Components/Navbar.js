import React, { useState } from 'react'
import styled ,{keyframes}from 'styled-components'
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

import { BiUserCircle } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";


import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {reset,logout} from '../features/auth/authSlice';
import img from '../images/photo.jpg'
import Bs from '../images/basket.png' 


const NavStyle=styled.nav`
    background:#83c5be !important;
    color:red;
    /* position:absolute; */
    top:0px;

`
const DivStyle=styled.div`
    background:#83c5be;
    color:#006d77;
    font-weight: bold;
    /* max-height: 40px; */
    /* overflow: hidden; */
`
const movText=keyframes`
   
    to{
      width: 100%;
      color: #006d77;
    }
  
`
const LinkS=styled(Link)`
  position: relative;
  color:#83c5be;
  -webkit-text-stroke:1px #006d77 ;

  text-decoration: none;
  color: ${props => props.active===1 ? '#006d77': '#83c5be'};

  

  /* font-weight:bold; */
  /* font-size:26px; */
  ::after{
    content: ${props=>props.content};
    /* content:'zar'; */
    position: absolute;
    top:0px;
    left:0px;
    color: transparent;
    /* width:0px; */
    /* overflow: hidden; */
    
  }
  &:hover{
    color: #006d77;
    ::after{
      animation:${movText} 0.5s linear both;
      /* animation-iteration-count: infinite; */

    }
  }

 
`
const Account=styled.div`
  display:flex;
  /* justify-content:center; */
  align-items: center;
  width:100px;
  color:#006d77;
  -webkit-text-stroke:1px #006d77 ;
  /* background-color:#006d77 ; */
`
const Btn=styled.div`
  color:#006d77;
  font-weight: border;
  -webkit-text-stroke:1px #006d77 ;
  background-color: transparent;
  border: none;
`
const Logo=styled.img`
  max-width:50px;
  max-height: 50px;
  border-radius: 50%;
  /* background-image: url('../../images/mila2.png'); */
  /* background-size:cover ; */
  /* background-image: url('../../p'); */
`
const LiH=styled.li`
  background-color: ${props => props.active===1 ? '#fff' : 'transparent'};

`
const Avatar=styled.div`
  width: 40px;
  height: 40px;
  /* padding: 5px 5px; */
  background-color: #006d77;
  color: #83c5be;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

`
const Basket=styled(BsCart4)`
  color: #006d77;
  font-size: 20px;
  font-weight: bold;
  -webkit-text-stroke:1px #006d77 ;
  &:hover{
    /* border: #006d77 1px solid; */
    /* padding: 5px; */
    font-size: 25px;
  }
 

`

const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)
  const [active,setActive]=useState({
    activeH:0,
    activeP:0,
    activeM:0,
    activeL:0,
    activeR:0,

  })
  // const [activeH,setActiveH]=useState(false)
  // const [activeP,setActiveP]=useState(false)
  // const [activeM,setActiveM]=useState(false)
  // const [activeL,setActiveL]=useState(false)
  // const [activeR,setActiveR]=useState(false)
  
  const onLogout=()=>{
    // console.log('logout')
    dispatch(logout())
    dispatch(reset())
    navigate('/Home')
    // console.log(user)
    // console.log(localStorage)
  }
  const handleClick = (x) => {
    console.log('click')
    if(x==='h'){
      setActive({ 
        activeH:1,
        activeP:0,
        activeM:0,
        activeL:0,
        activeR:0})
    }
    else if(x==='p'){
      setActive({ 
        activeH:0,
        activeP:1,
        activeM:0,
        activeL:0,
        activeR:0})
    }
    else if(x==='m'){
      setActive({ 
        activeH:0,
        activeP:0,
        activeM:1,
        activeL:0,
        activeR:0})
    }
    else if(x==='l'){
      setActive({ 
        activeH:0,
        activeP:0,
        activeM:0,
        activeL:1,
        activeR:0})
    }
    else if(x==='r'){
      setActive({ 
        activeH:0,
        activeP:0,
        activeM:0,
        activeL:0,
        activeR:1})
    }
  
    }

  return ( <>
    <NavStyle className="navbar navbar-expand-lg bg-body-tertiary">
  <DivStyle className="container-fluid">
    <LinkS to="/" className="navbar-brand" ><Logo src={img} alt='n' ></Logo></LinkS>
    {/* <img src={img} alt='' ></img> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <LiH  className="nav-item active">
          <LinkS active={active.activeH} content='yazan' to='/Home' className="nav-link " onClick={()=>{
            handleClick('h')
            }}>Home</LinkS>
        </LiH>
        <li className="nav-item">
          <LinkS active={active.activeP} to='/Products' className="nav-link " onClick={()=>handleClick('p')} >Products</LinkS>
        </li>
        {/* <li className="nav-item">
          <LinkS active={activeB} to='/Brands' className="nav-link "  >Brands</LinkS>
        </li> */}
        <li className="nav-item">
          <LinkS active={active.activeM} to='/MyList' className="nav-link " onClick={()=>handleClick('m')}><Basket></Basket></LinkS>
        </li>
         
      </ul>
      {user ? (
        <>
        <Avatar className='Avatar'>{user.name[0]}</Avatar>
        <Btn className='btn' onClick={onLogout}>LogOut<BiLogOut></BiLogOut></Btn>
        </>
      ):(<><Account>
      
        <LinkS active={active.activeL} to='/Login' content='Login'onClick={()=>handleClick('l')}>Login </LinkS>
        <BiLogIn/>
      </Account>
      <Account>
        <LinkS active={active.activeR} to='/Register' content='Login'onClick={()=>handleClick('r')}>Register</LinkS>
        <BiUserCircle/>
      </Account></>)}
      
      {/* <div>
      </div> */}
    </div>
  </DivStyle>
</NavStyle>
{/* <Outlet/> */}
</>
  )
}

export default Navbar