import React, { Component } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import {
  onPlay,
  onPause,
  onProgress,
  onDuration,
  onEnded
} from "../../actions.js";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onPlay: () => dispatch(onPlay()),
    onPause: () => dispatch(onPause()),
    onProgress: () => dispatch(onProgress()),
    onDuration: payload => dispatch(onDuration(payload)),
    onEnded: () => dispatch(onEnded())
  };
};

class RootPlayer extends Component {
  state = {
    url: ""
  };

  componentWillReceiveProps = nextProps => {
    //console.log(nextProps, nextProps.playlist)
    if (nextProps.playlist.length >= 1) {
      const speechToPlay = nextProps.playlist[nextProps.index];
      this.setState({ url: speechToPlay.url });
    }
  };

  ref = player => {
    this.player = player;
  };

  value = this.props.played; // initiated to prevent "TypeError: The provided double value is non-finite" in method onSeekEnd()

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
    this.player.seekTo(this.value); // for visual display of progress
  };

  render() {
    const {
      playing,
      loop,
      muted,
      volume,
      onPlay,
      onPause,
      onProgress,
      onDuration
    } = this.props;

    return (
      <ReactPlayer
        ref={this.ref}
        width="100%"
        height="100%"
        url={this.state.url}
        playing={playing}
        loop={loop}
        volume={volume}
        muted={muted}
        onPlay={onPlay}
        onPause={onPause}
        onProgress={onProgress}
        onDuration={onDuration}
        onEnded={onEnded}
      />
    );
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(RootPlayer);
