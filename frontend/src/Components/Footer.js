import React from 'react'
import styled from 'styled-components'
import { BsFacebook } from "react-icons/bs";
import { BsTelephoneForward } from "react-icons/bs";
import { GrMail } from "react-icons/gr";



const FooterStyle=styled.div`
  background-color: var(--secondeColor);
  color: var(--mainColor);
  padding: 5px;
  text-align: center;
  position: static;
  width: 100%;
  bottom: 0px;
`
const Links=styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`
const Link=styled.a`
    text-decoration: none;
    color: var(--mainColor);

    :hover{
      cursor: pointer;
      color: var(--mainColor);
      
    }
`
const Footer = () => {
  return (
    <FooterStyle>
      <div className='row container'>
        <div className='col-12 col-md-6'>
          <h5>contact us</h5>
          <Links>
            <Link href='https://www.facebook.com/yzane.zarzar'><BsFacebook></BsFacebook></Link>
            <Link href="mailto:yazanzarzar98@gmail.com?subject='subject text'"><GrMail></GrMail></Link>
            <Link href="tel:+491787603259"><BsTelephoneForward></BsTelephoneForward></Link>
          </Links>
        </div>
        <div className='col-12 col-md-6'>
          <h5>We hope you have a great experience</h5>
        </div>

      </div>
    </FooterStyle>
  )
}

export default Footer