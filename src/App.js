import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Speaker from './components/Speaker/Speaker.js';
import Speech from './components/Speech/Speech.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      showSpeech: false,
    }
  }

  onRouteChange = (route) => {
    if(route === 'home') {
      this.setState({showSpeech: false});
    } this.setState({route: route})
  }

  render() {
    const { route } = this.state;
    return (
      <div className='App'>
        <Navbar onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <Speaker onRouteChange={this.onRouteChange} /> 
          : <Speech />
        }
      </div>
    );
  }
}

export default App;
