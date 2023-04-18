import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const ListBody=styled.div`
    width:100%;
    /* background-color:#006d77 ; */
    min-height: 400px;
    padding:5px;
    color:#edf6f9;
    border:solid #83c5be 1px;
    flex-wrap:nowrap;
    display: flex;
    gap:8px;
    overflow-x: scroll;
`

const List = () => {
  return (
    <ListBody className='container'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

    </ListBody>
  )
}

export default List