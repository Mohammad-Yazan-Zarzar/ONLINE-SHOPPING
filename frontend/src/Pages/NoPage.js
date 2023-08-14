import React from 'react'
import styled from 'styled-components'
const NoPageStyle=styled.div`
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;

`
const NoPage = () => {
  return (
    <NoPageStyle>
      <h1> No page  </h1>
    </NoPageStyle>
  )
}

export default NoPage