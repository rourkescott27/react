import React, { Component } from "react";
import Products from "./Products";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          My First React App
        </h1>
        <Products />
      </div>
    );
  }
}

export default App;
