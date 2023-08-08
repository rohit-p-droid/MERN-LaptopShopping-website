import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Products from './Products'
import { useLocation } from 'react-router'


const Container = styled.div``

const FilterContainer = styled.div`
    margin:10px;
    display:flex;
    justify-content:space-seperated;
`

const FilterText = styled.h2`
    font-size:20px;
    margin:20px;
    font-weight:600;
`

const Select = styled.select`
    padding:10px;
    margin-right:20px;
    font-size:15px;
`
const Option = styled.option`
    font-size:15px;
`

const ProductList = () => {
    const location = useLocation();
    const brand = location.pathname.split("/")[2];
    const [filter, setFilter] = useState({});

    const handleFilters = (eve) => {
        const value = eve.target.value;
        setFilter({
            ...filter,
            [eve.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar />
            <FilterContainer>
                <FilterText>Filter Products : </FilterText>
                <Select name="Processor" onChange={handleFilters}>
                    <Option >Processor</Option>
                    <Option>Intel core i3</Option>
                    <Option>Intel core i5</Option>
                    <Option>Intel core i7</Option>
                    <Option>Intel core i9</Option>
                    <Option>AMD Ryzen 3</Option>
                    <Option>AMD Ryzen 5</Option>
                    <Option>AMD Ryzen 7</Option>
                    <Option>AMD Ryzen 9</Option>
                </Select>
                <Select name="Ram" onChange={handleFilters}>
                    <Option >RAM</Option>
                    <Option>4GB</Option>
                    <Option>8GB</Option>
                    <Option>16GB</Option>
                    <Option>32GB</Option>
                </Select>
                <Select name="SSD" onChange={handleFilters}>
                    <Option >Storage SSD</Option>
                    <Option>128GB</Option>
                    <Option>256GB</Option>
                    <Option>512GB</Option>
                    <Option>1TB</Option>
                    <Option>2TB</Option>
                </Select>
                <Select name="HDD" onChange={handleFilters}>
                    <Option >Storage HDD</Option>
                    <Option>512GB</Option>
                    <Option>1TB</Option>
                </Select>
                <Select name="Graphics" onChange={handleFilters}>
                    <Option >Graphica Card</Option>
                    <Option>2GB</Option>
                    <Option>4GB</Option>
                    <Option>6GB</Option>
                </Select>
            </FilterContainer>
            <Products brand={brand} filter={filter}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList