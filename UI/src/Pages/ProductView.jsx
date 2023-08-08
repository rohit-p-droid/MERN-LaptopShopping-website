import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import img1 from '../Images/sld2.jpg'
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'

const Container = styled.div`
    display:flex;
`

const ImageContainer = styled.div`
    display:flex;
    flex:1;
`

const InfoContainer = styled.div`
    flex:1;
    padding:20px;
    margin-top:50px;
    font-size:20px;
    line-height:2;
`

const Image = styled.img`
    height:100%;
    width:100%;

`

const Button = styled.button`
    border:none;
    padding:10px;
    font-size:30px;
    color:black;
    background-color:blue;
    cursor:pointer;
    font-weight:600;
`

const ProductView = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/product/find/${id}`, {
          method:"GET"
        })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
      })

  return (
    <div>
    <Navbar/>
    <Container>
       <ImageContainer>
            <Image src={data.image}></Image>
        </ImageContainer> 
       <InfoContainer>
           <b>Processor : </b>{data.processor}<br/>
           <b>RAM : </b> {data.ram}<br/>
           <b>Storage : </b>{data.storage}<br/>
           <b>Graphics : </b>{data.graphics}<br/>
           <b>Display : </b>{data.display}<br/>
           <br></br>
           <b>Price : {data.price}₹ </b><br/><br/>
           <b>Discription : </b><p>{data.desc}</p>
           <br/><br/>
           <Button>Add To Cart</Button><br/><br/>
           <Button>Buy Now</Button>
           
       </InfoContainer>
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default ProductView