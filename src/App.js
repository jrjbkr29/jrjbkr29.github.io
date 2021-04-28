import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from './components/catalog';
import Todo from './components/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
       <Catalog></Catalog>

       <hr />
      <Todo></Todo>
      <hr />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
