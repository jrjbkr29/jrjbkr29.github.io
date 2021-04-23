import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from "./components/navBar";
import Footer from './components/footer';
import Product from './components/product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <h1>Hello React World!</h1>

        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>

        <Footer></Footer>
      </div>
    );
  }


}

export default App;
