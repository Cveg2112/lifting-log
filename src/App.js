import React, { Component } from 'react';
import LiftingLog from './containers/LiftingLog/LiftingLog';
// scss base styles
import './scss/style.scss';
//router
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <LiftingLog />
      </BrowserRouter>
    );
  }
}

export default App;
