import React, { Component } from "react";
import Products from "./Products";
import JumboTronComponent from './JumboTronComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserForm from "./UserForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
        <JumboTronComponent />
        <UserForm/>
      </div>
    );
  }
}

export default App;