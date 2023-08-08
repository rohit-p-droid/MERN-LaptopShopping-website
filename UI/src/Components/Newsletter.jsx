import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:smokewhite;
    height:60vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#fcf5f5
`
const Title = styled.h1`
    margin-bottom:20px;
    font-size:70px;
`
const Desc = styled.p`
    font-size:20px;
    margin-bottom:20px;
    font-weight:200;
`
const Input = styled.input`
    flex:8;
    padding-left:20px;
    border:none;
`
const Button = styled.button`
    background-color:teal;
    color:white;
    border:none;
    flex:1;
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    display:flex;
    background-color:white;
    justify-content:space-between;
    border:1px solid lightgray;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Desc>
            Get timely updates from your favorite products.
            </Desc>
            <InputContainer>
                <Input placeholder='Your Email Here' />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>

        </Container>
    )
}

export default Newsletter