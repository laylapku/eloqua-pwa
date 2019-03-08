import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Speaker from "./components/Speaker/Speaker.js";
import Text from "./components/Speech/Text.js";
import SoundPlayer from "./components/SoundPlayer/SoundPlayer.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      showText: false
    };
  }

  onRouteChange = route => {
    if (route === "home") {
      this.setState({ showText: false });
    }
    this.setState({ route: route });
  };

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Navbar onRouteChange={this.onRouteChange} />
        {route === "home" ? (
          <Speaker onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <SoundPlayer />
            <Text />
          </div>
        )}
      </div>
    );
  }
}

export default App;
