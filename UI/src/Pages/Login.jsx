import React from 'react'
import styled from 'styled-components'
import login from '../Images/login.jpg'
import {Link} from 'react-router-dom'


const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url(${login})
        center;
`

const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:white;
`

const Title = styled.h1`
        font-size:24px;
`

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0;
    padding:10px;
`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
    background-color:teal;
`

const Lnk = styled.p`
    margin:5px 0;
    font-size:15px;
    text-decoration:underline;
    cursor:pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form action='http://localhost:5000/api/auth/login' method='POST'>
                <Input placeholder='Email Here' type='email' name='email'/>
                <Input placeholder='Password Here' type='password' name='password'/>
                <Button>LOG IN</Button>
                <Lnk>FORGOT PASSWORD ??</Lnk>
                <Link to="/register">
                <Lnk>NEW USER? CREATE A NEW ACCOUNT</Lnk>
                </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login