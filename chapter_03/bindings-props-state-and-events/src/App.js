import React, { Component } from "react";
import Products from "./Products";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Rating from "./Rating";

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div>
        <h1>
          My First React App
        </h1>
        <Products />
        <Button variant="primary" disabled={!isValid}>Button</Button>
        <div>
          <Rating rating='1'/>
          <Rating rating='2'/>
          <Rating rating='3'/>
          <Rating rating='4'/>
          <Rating rating='5'/>
        </div>
      </div>
    );
  }
}

export default App;

