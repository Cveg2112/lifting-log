import React, { Component } from 'react';
import LiftingLog from './containers/LiftingLog/LiftingLog';
// scss base styles
import './scss/style.scss';

class App extends Component {
  render(){
    return (
      <LiftingLog />
    );
  }
}

export default App;
