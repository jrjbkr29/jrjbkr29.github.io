import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from './components/catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
       <Catalog></Catalog>
        <Footer></Footer>
      </div>
    );
  }

  increase = () => {
    console.log("Increase!!");
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decrease = () => {
    console.log("Decrease!!");
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

}

export default App;
