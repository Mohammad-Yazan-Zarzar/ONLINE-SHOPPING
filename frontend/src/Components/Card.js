import React from 'react'
import styled from 'styled-components'
import cardImg from '../images/HomeBackground.jpg'
const CardStyle=styled.div`
    min-width: 18rem;


`
const CardImg=styled.img`

`
const Card = () => {
  return (
    <CardStyle className="card text-dark bg-light mb-3" >
        <div className="card-header">Header</div>
        <CardImg src={cardImg} className="card-img-top"></CardImg>

        <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </CardStyle>
  )
}

export default Card