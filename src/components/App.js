import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import {
  updateDuration,
  updatePlayed,
  playPause,
  onPrev,
  onNext
} from "../redux/actions.js";

import ReactPlayer from "react-player";

import Explore from "./Explore.js";
import Favorites from "./Favorites.js";
import Settings from "./Settings.js";
import PlayList from "./PlayList.js";
import Text from "./Text.js";
import BottomBar from "./BottomBar.js";

import speeches from "../data/speeches.js";
import speakers from "../data/speakers.js";

const mapStatetoProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    playPause: () => dispatch(playPause()),
    updateDuration: payload => dispatch(updateDuration(payload)),
    updatePlayed: payload => dispatch(updatePlayed(payload)),
    onPrev: () => dispatch(onPrev()),
    onNext: () => dispatch(onNext())
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
    if ("mediaSession" in navigator) {
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
    }
  };

  // seek methods for media session
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

  state = {
    url: speeches.find(ele => ele.id === this.props.playlist[this.props.index])
      .url
  };

  componentWillReceiveProps = nextProps => {
    const speechToPlay = speeches.find(
      ele => ele.id === nextProps.playlist[nextProps.index]
    );
    this.setState({ url: speechToPlay.url });
    this.updateMetadata();
  };

  // player slider methods
  onSeekStart = () => {
    this.setState({ seeking: true });
  };
  onSeekEnd = () => {
    this.setState({ seeking: false });
    this.player.seekTo(this.props.played);
  };

  onSliderClick = (e, value) => {
    this.props.updatePlayed(value);
    this.player.seekTo(value);
  };

  // update ui values with values from player
  onProgress = status => {
    if (!this.state.seeking) {
      this.props.updatePlayed(status.played);
    }
  };

  render() {
    const { playing, played, loop, playbackRate, onNext, updateDuration } = this.props;

    return (
      <Fragment>
        <ReactPlayer
          ref={player => (this.player = player)} // for seekTo method
          height="0px" // required
          url={this.state.url}
          playing={playing}
          played={played}
          loop={loop}
          playbackRate={playbackRate}
          onEnded={onNext}
          onDuration={updateDuration} // updates audio duration
          onProgress={this.onProgress}
        />

        <Router>
          <Switch>
            <Route exact path="/" component={Explore} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/settings" component={Settings} />
            <Route path="/playlist" component={PlayList} />
            <Route
              path="/text"
              render={() => (
                <Text
                  onSeekStart={this.onSeekStart}
                  onSeekEnd={this.onSeekEnd}
                  onSliderClick={this.onSliderClick}
                />
              )}
            />
          </Switch>
          <BottomBar />
        </Router>
      </Fragment>
    );
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
