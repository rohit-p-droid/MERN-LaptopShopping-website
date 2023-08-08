import { Call, LocationOn, Mail } from '@mui/icons-material'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`

const Center = styled.div`
    flex:1;
`

const Right = styled.div`
    flex:1;
`

const SocialContainer = styled.div`
    display:flex;
`

const Desc = styled.p`
    margin:20px 0;
`

const SocialIcons = styled.div`
    display:flex;
    width:50px;
    height:50px;
    border-radius:50%;
    align-items:center;
    justify-content:center;
    color:white;
    margin-right:20px;
`
const List = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
    flex-wrap:wrap;
    margin-top:30px;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`

const ContactItem = styled.div`
    font-size:18px;
    padding-bottom:10px;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <h1>LaptopMenia.in</h1>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcons>
                        <SocialIcon url='facebook.com' />
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIcon url='instagram.com' />
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIcon url='pinterest.com' />
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIcon url='twitter.com' />
                    </SocialIcons>
                </SocialContainer>
            </Left>
            <Center>
                <br/>
                <h3>Useful Links</h3>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <br/>
                <h3>Contact us</h3>
                <br/><br/>
                <ContactItem>
                    <LocationOn/> 28A, Ashok Nagar, Mumbai West 400012
                </ContactItem>
                <ContactItem>
                    <Call/> +91-2544565558
                </ContactItem>
                <ContactItem>
                    <Mail/> officialLaptopMenia@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer