import React from 'react'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Slider from '../Components/Slider'
import LoginNavbar from '../Components/LoginNavbar'

const Home = () => {
  return (
    <div>
        <LoginNavbar/>
        <Slider/>
        <Categories/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home