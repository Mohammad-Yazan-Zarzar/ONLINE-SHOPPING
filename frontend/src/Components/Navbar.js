import React from 'react'
import styled ,{keyframes}from 'styled-components'
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

import { BiUserCircle } from "react-icons/bi";

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {reset,logout} from '../features/auth/authSlice';
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
const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)

  const onLogout=()=>{
    // console.log('logout')
    dispatch(logout())
    dispatch(reset())
    navigate('/Home')
    // console.log(user)
    // console.log(localStorage)
  }
  return ( <>
    <NavStyle className="navbar navbar-expand-lg bg-body-tertiary">
  <DivStyle className="container-fluid">
    <LinkS to="/" className="navbar-brand" >Navbar</LinkS>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <LinkS content='yazan' to='/Home' className="nav-link ">Home</LinkS>
        </li>
        <li className="nav-item">
          <LinkS to='/Products' className="nav-link "  >Products</LinkS>
        </li>
        <li className="nav-item">
          <LinkS to='/Brands' className="nav-link "  >Brands</LinkS>
        </li>
        <li className="nav-item">
          <LinkS to='/MyList' className="nav-link " >MyList</LinkS>
        </li>
         
      </ul>
      {user ? (
        <>
        <div className='Avatar'>{user.name}</div>
        <Btn className='btn' onClick={onLogout}>LogOut<BiLogOut></BiLogOut></Btn>
        </>
      ):(<><Account>
      
        <LinkS to='/Login' content='Login'>Login </LinkS>
        <BiLogIn/>
      </Account>
      <Account>
        <LinkS to='/Register' content='Login'>Register</LinkS>
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