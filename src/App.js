/* import React, { Component } from "react";
import Nav from "./components/Nav/Nav.js";
import SpeakerList from "./components/Speaker/SpeakerList.js";
import SpeechList from "./components/Speech/SpeechList.js";
import SpeechPlayer from "./components/Player/SpeechPlayer.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      displayText: false,
      speaker: ""
    };
  }

  selectSpeaker = speaker => {
    this.setState({ speaker: speaker, route: "speechList" });
  };

  onRouteChange = route => {
    if (route === "home") {
      this.setState({ displayText: false });
    }
    this.setState({ route: route });
  };

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Nav onRouteChange={this.onRouteChange} />
        {route === "home" ? (
          <SpeakerList
            selectSpeaker={this.selectSpeaker}
          />
        ) : route === "speechList" ? (
          <SpeechList
            speaker={this.state.speaker}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <SpeechPlayer speaker={this.state.speaker} />
        )}
      </div>
    );
  }
}

export default App;
 */


import React from "react";
import SpeakerList from './components/Speaker/SpeakerList.js';
import SpeechList from './components/Speech/SpeechList.js';
import SpeechPlayer from'./components/Player/SpeechPlayer.js';
import Nav from './components/Nav/Nav.js';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SpeakerList} />
          <Route path="/speechlist" component={SpeechList} />
          <Route path="/speechplayer" component={SpeechPlayer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
