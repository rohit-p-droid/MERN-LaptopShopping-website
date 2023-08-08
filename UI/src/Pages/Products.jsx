import styled from 'styled-components'
import Product from './Product'
import { items } from './Laptops'
import Navbar from '../Components/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Battery0Bar } from '@mui/icons-material'
import {LaptopBrands} from "../Components/data"




const Container = styled.div`
  display:flex;
  padding:20px;
  align-item:center;
  justify-content:center;
  flex-wrap:wrap;
`

const Products = (brand) => {
  const [data, setData] = useState([])
  const brandName = brand.brand;

  useEffect(() => {
    fetch(`http://localhost:5000/api/product/get/${brandName}`, {
      method:"GET"
    })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
  })

  return (
    <div>
      <Container>
        {data.map((value) => <Product item={value} key={value._id}/>)}
      </Container>
    </div>
  );
};

export default Products