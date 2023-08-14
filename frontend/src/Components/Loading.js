import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';
import styled from 'styled-components';
const LoadingStyle=styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
`
const Loading = () => {
  return (
    <LoadingStyle>
      <MDBSpinner role='status'>
      <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
    </LoadingStyle>
    
    // <h1>Loading</h1>
  )
}

export default Loading