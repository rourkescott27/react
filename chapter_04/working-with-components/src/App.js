import React, { Component } from "react";
import Products from "./Products";
// import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Rating from "./Rating";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Products/>
      </div>
    );
  }
}

export default App;
