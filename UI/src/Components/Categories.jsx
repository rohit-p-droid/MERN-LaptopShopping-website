import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { LaptopBrands } from './data'

const Container = styled.div`
    display:flex;
    padding:20px;
    align-item:center;
    justify-content:center;
    flex-wrap:wrap;
`

const Heading = styled.h1`
    margin:20px;
    font-size:60px;
    text-align:center;
`

const Categories = () => {
    return (
        <div>
            <Heading>Choose Your Favorate Brand</Heading>
            <Container>
                {
                    LaptopBrands.map((value) => {
                        return <CategoryItem item={value} key={value.id} />
                    })
                }
            </Container>
        </div>
    )
}

export default Categories