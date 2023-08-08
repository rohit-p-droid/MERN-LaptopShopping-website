import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    border:solid red;
    margin:20px 10px;
`

const Image = styled.img`
    width:auto;
    height:250px;
    object:fit:cover;
`

const Info = styled.div`
    position:absolute;
    align-items:center;
    justify-content:center;
    padding:20px;
    margin-left:150px;
    margin-top:-190px;
`

const Title = styled.h1`
    color:white;
    Margin-bottom:20px;
`

const Button = styled.button`
    border:none;
    padding:10px;
    color:gray:
    background-color:transperant;
    cursor:pointer;
    font-weight:600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.name}`}>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.name}</Title>
            <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem