import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Settings from './components/Settings/Settings';
import StopWatch from './components/StopWatch/StopWatch'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StopWatch />
        </header>
       
        <Settings/>
      </div>
    );
  }
}

export default App;
