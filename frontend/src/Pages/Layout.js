import React from 'react'
import Navbar from '../Components/Navbar'
import Toast from '../Components/Toast';
import { Outlet} from "react-router-dom";
import Modal from '../Components/Modal';
const Layout = () => {
  return (
    <>
        
        <Navbar></Navbar>
        <Modal></Modal>

        <Toast></Toast>

        <Outlet></Outlet>
    </>
  )
}

export default Layout