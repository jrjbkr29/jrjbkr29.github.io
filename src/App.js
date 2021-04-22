import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navBar";
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <h1>Hello React World!</h1>

        <QuantityPicker></QuantityPicker>


        <Footer></Footer>
      </div>
    );
  }


}

export default App;
