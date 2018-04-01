import React, { Component } from 'react';
import './App.css';
import ProductPage from "./components/ProductPage.jsx";
import data from "./developer_task/data/phones.json";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Vodafone</h1>
        </header>
        <ProductPage data = { data[1] }/>
      </div>
    );
  }
}

export default App;
