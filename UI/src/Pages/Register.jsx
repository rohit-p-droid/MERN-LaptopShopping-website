import React, { useState } from 'react'
import styled from 'styled-components'
import register from '../Images/register.jpeg'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
      url(${register})
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
    margin:20px 10px 0 0;
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
    margin-top:20px;
`

const Lnk = styled.a`
    margin:5px 0;
    font-size:15px;
    text-decoration:underline;
    cursor:pointer;
`

const Register = () => {
    // const [user, setUser] = useState({ username: "", mobile: "", email: "", address: "", password: "" })

    // let name, value;
    // const handleInput = (event) => {
    //     console.log(event)
    //     name = event.target.name;
    //     value = event.target.value;
    //     setUser({ ...user, [name]: value })
    // }

    // console.log(user);

    // const submit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post("http://localhost:5000/api/auth/register",{
    //             user
    //         })
    //         console.log(user)
    //     } catch{
    //         console.log("User Registration Error!!", e)
    //     }
    // }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form action='http://localhost:5000/api/auth/register' method='POST'>
                    <Input placeholder='Your Name' name='username'/>
                    <Input placeholder='Your Mobile Number' name='mobile'/>
                    <Input placeholder='Email Here' type='email' name='email'/>
                    <Input placeholder='Your Address' name='address'/>
                    <Input placeholder='Password Here' type='password' name='password'/>
                    <Button type='submit'>CREATE</Button>
                    <Lnk>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></Lnk>
                    <Link to="/login">
                        <Lnk>ALREADY HAVE ACCOUNT? LOG IN?</Lnk>
                    </Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register