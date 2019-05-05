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
import speakers from "./data/speakers.js";
import {
  onPlay,
  onPause,
  playPause,
  onDuration,
  onPrev,
  onNext,
  onEnded
} from "./redux/actions.js";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onPlay: () => dispatch(onPlay()),
    onPause: () => dispatch(onPause()),
    playPause: () => dispatch(playPause()),
    onDuration: payload => dispatch(onDuration(payload)),
    onPrev: () => dispatch(onPrev()),
    onNext: () => dispatch(onNext()),
    onEnded: () => dispatch(onEnded())
  };
};

const MediaMetadata = window.MediaMetadata;

class App extends Component {
  constructor(props) {
    super(props);
    if ("mediaSession" in navigator) {
      this.updateMetadata();

      navigator.mediaSession.setActionHandler("play", () => {
        this.props.playPause();
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        this.props.playPause();
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        this.props.onPrev();
        this.updateMetadata();
      });
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        this.props.onNext();
        this.updateMetadata();
      });
      navigator.mediaSession.setActionHandler("seekbackward", () => {
        this.seekBackward();
      });
      navigator.mediaSession.setActionHandler("seekforward", () => {
        this.seekForward();
      });
    }
  }

  updateMetadata = () => {
    let speech = speeches.find(
      ele => ele.id === this.props.playlist[this.props.index]
    );
    let speaker = speakers[speech.speakerId].name;
    let avatar = speakers[speech.speakerId].img;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: speech.title,
      artist: speaker,
      artwork: [
        { src: avatar, sizes: "96x96", type: "image/png" },
        { src: avatar, sizes: "128x128", type: "image/png" },
        { src: avatar, sizes: "192x192", type: "image/png" },
        { src: avatar, sizes: "256x256", type: "image/png" },
        { src: avatar, sizes: "384x384", type: "image/png" },
        { src: avatar, sizes: "512x512", type: "image/png" }
      ]
    });
  };

  state = {
    url: speeches[0].url,
    played: 0
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.playlist.length > 0) {
      const speechToPlay = speeches.find(
        ele => ele.id === nextProps.playlist[nextProps.index]
      );
      this.setState({ url: speechToPlay.url });
      this.updateMetadata();
    }
  };

  seekBackward = () => {
    let skipTime = 0.02;
    let played = Math.max(this.state.played - skipTime, 0);
    this.setState({ played }, () => {
      this.player.seekTo(played);
    });
  };

  seekForward = () => {
    let skipTime = 0.02;
    let played = Math.min(this.state.played + skipTime, this.props.duration);
    this.setState({ played }, () => {
      this.player.seekTo(played);
    });
  };

  played = this.state.played; // initiated to prevent "TypeError: The provided double value is non-finite" in method onSeekEnd()

  onSeekStart = e => {
    this.setState({ seeking: true });
  };

  onSeekEnd = () => {
    this.setState({ seeking: false });
    this.player.seekTo(this.played); // temp workaround for onDragEnd: getting value from onChange, see: https://stackoverflow.com/questions/47440051/get-material-ui-slider-value-in-ondragstop-event-react
  };

  onSliderClick = (e, value) => {
    this.played = value;
    this.setState({ played: value });
    this.player.seekTo(this.played);
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
      onDuration,
      onEnded
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
                onSliderClick={this.onSliderClick}
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
