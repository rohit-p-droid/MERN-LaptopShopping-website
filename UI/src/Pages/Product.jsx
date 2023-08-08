import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    margin:50px;
    padding:20px;
    background-color:lightgray;
    text-decoration: none;
`

const Image = styled.img`
    width:auto;
    height:280px;
    object:fit:cover;
    z-index:2;
`

const Title = styled.p`
    font-size:20px;
    font-weight:600;
`

const Info = styled.p`
    font-weight:400;
    margin:10px;
`

const Desc = styled.div`
    padding:10px;
    text-align:center;
`

const Product = ({item}) => {
  return (
    <Container>
        <Link to={`/productView/${item._id}`}>
        <Image src={item.image}></Image>
        </Link>
        <Desc>
        <Title>{item.name}</Title>
        <Info>({item.shortInfo})</Info>
        </Desc>
    </Container>
  )
}

export default Product