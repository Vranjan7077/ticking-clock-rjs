import React, { Component } from 'react';
import Clock from './Component/Clock/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="clock">
          <Clock />
        </div>
      </div>
    );
  }
}
export default App;
