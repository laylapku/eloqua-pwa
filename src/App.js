import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactPlayer from "react-player";
import Search from "./components/Search.js";
import Favorites from "./components/Favorites.js";
import Settings from "./components/Settings.js";
import About from "./components/About.js";
import PlayList from "./components/Speech/PlayList.js";
import Text from "./components/Text.js";
import speeches from "./data/speeches.js";
import { onPlay, onPause, onDuration, onEnded } from "./redux/actions.js";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onPlay: () => dispatch(onPlay()),
    onPause: () => dispatch(onPause()),
    onDuration: payload => dispatch(onDuration(payload)),
    onEnded: () => dispatch(onEnded())
  };
};

class App extends Component {
  state = {
    url: speeches[0].url,
    played: 0
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.playlist.length >= 1) {
      const speechToPlay = nextProps.playlist[nextProps.index];
      this.setState({ url: speechToPlay.url });
    }
  };

  value = this.state.played; // initiated to prevent "TypeError: The provided double value is non-finite" in method onSeekEnd()

  onSeekStart = e => {
    this.setState({ seeking: true });
  };

  onSeekEnd = () => {
    this.setState({ seeking: false });
    this.player.seekTo(this.value); // temp workaround for onDragEnd: getting value from onChange, see: https://stackoverflow.com/questions/47440051/get-material-ui-slider-value-in-ondragstop-event-react
  };

  onSliderChange = (e, value) => {
    this.value = value;
    this.setState({ played: value });
    this.player.seekTo(this.value);
  };

  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  render() {
    const {
      playing,
      loop,
      muted,
      volume,
      onPlay,
      onPause,
      onDuration
    } = this.props;

    return (
      <Router>
        <ReactPlayer
          ref={player => (this.player = player)}
          width="100%"
          height="100%"
          url={this.state.url}
          played={this.state.played}
          playing={playing}
          loop={loop}
          volume={volume}
          muted={muted}
          onPlay={onPlay}
          onPause={onPause}
          onDuration={onDuration}
          onEnded={onEnded}
          onProgress={this.onProgress}
        />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/settings" component={Settings} />
          <Route path="/about" component={About} />
          <Route path="/playlist" component={PlayList} />
          <Route
            path="/text"
            render={() => (
              <Text
                played={this.state.played}
                onSeekStart={this.onSeekStart}
                onSeekEnd={this.onSeekEnd}
                onSliderChange={this.onSliderChange}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
