import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import {sldImages} from './data'

const Container = styled.div`
    height:80vh;
    width:100%;
    display:flex;
    overflow:hidden;
    position:relative;
`;
const Wrapper = styled.div`
    display:flex;
    height:100%;
    transition:all 1.5s ease;
    transform:translateX(${(props)=>props.sldIndx * -100}vw)
`;
const Slid = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    align-items:center;
`;

const ImgContainer = styled.div`
    height:100%;
`;

const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`;

const Button = styled.button`
    cursor:pointer;
    font-size:20px;
    padding:10px;
`

const Image = styled.img`
    height:80%;
`;

const Title = styled.h1`
    font-size:40px;
`;

const Desc = styled.div`
    letter-spacing:3px;
    margin:40px 0;
    font-size:20px;
    font-weight:500;
`;

const Slider = () => {

    const [sldIndx, setSldIndx] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSldIndx(sldIndx > 0 ? sldIndx - 1 : 2);
        } else {
            setSldIndx(sldIndx < 2 ? sldIndx + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <KeyboardArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper sldIndx={sldIndx}>
                {
                    sldImages.map((v) => { 
                        return <Slid key={v.id}>
                            <ImgContainer>
                                <Image  src={v.img}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{v.title}</Title>
                                <Desc>{v.desc}</Desc>
                                <Button>Shop no{v.id}</Button>
                            </InfoContainer>
                        </Slid>
                    })
                }
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <KeyboardArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider;