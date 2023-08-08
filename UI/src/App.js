import Navbar from "./Components/Navbar";
import React from 'react';
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductList from "./Pages/ProductList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductView from "./Pages/ProductView";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products/:category" element={<ProductList/>}/>
        <Route exact path="/products/:category" element={<Products/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/productView/:id" element={<ProductView/>}/>
      </Routes>
    </Router>
  );
};

export default App;