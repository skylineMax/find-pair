import React, { Component } from 'react';
import './App.css';
import Settings from './components/Settings/Settings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-main">
          <Settings />
        </div>
        <footer className="App-footer">

        </footer>
      </div>
    );
  }
}

export default App;
