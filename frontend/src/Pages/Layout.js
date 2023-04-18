import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
  )
}

export default Layout