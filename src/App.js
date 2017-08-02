import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './header'
import BodyWrapper from './body'

class App extends Component {
  render() {
    return (
      <div className="App clearfix">
        <Header/>
        <BodyWrapper/>
      </div>
    );
  }
}

export default App;
