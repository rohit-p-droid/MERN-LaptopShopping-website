import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import Register from "../Pages/Register";

const Container = styled.div`
  height: 60px;
  background-color:whitesmoke;
`;

const Wrapper = styled.div`
  display:flex;
  padding:10px 20px;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display:flex;
  flex:1;
  align-items:center;
`;

const Center = styled.h1`
  flex:1;
  text-align:center;
`;

const Right = styled.div`
  display:flex;
  flex:1;
  justify-content:flex-end;
`;

const Language = styled.span`
  font-size:18px;
  cursor:pointer;
  background-color:white;
  border-radius:50%;
  padding:8px;
`

const SearchContainer = styled.div`
  display:flex;
  border:0.5px solid gray;
  margin-left:25px;
  align-items:center;
`
const Input = styled.input`
  border:none;
  padding:8px;
`
const MenuItem = styled.div`
  margin-left:24px;
  cursor:pointer;
  text-decoration: none;
  color:black;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search here" />
                        <Search style={{ fontSize: 25 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    LaptopMenia.in
                </Center>
                <Right>
                    <h2>UserName</h2>
                    <MenuItem>
                        <ShoppingCartOutlinedIcon />
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar