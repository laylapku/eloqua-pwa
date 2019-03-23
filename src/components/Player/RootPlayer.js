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
  value = this.props.played; // initiated to prevent "TypeError: The provided double value is non-finite" in method onSeekEnd()

  ref = player => {
    this.player = player;
  };

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
      url,
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
      <div>
        <ReactPlayer
          ref={this.ref}
          width="100%"
          height="100%"
          url={url}
          playing={playing}
          volume={volume}
          muted={muted}
          loop={loop}
          onPlay={onPlay}
          onPause={onPause}
          onProgress={onProgress}
          onDuration={onDuration}
          onEnded={onEnded}
        />
      </div>
    );
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(RootPlayer);
