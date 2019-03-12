import React, { Component } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FullPlayer from "./FullPlayer";
import SpeechList from "../Speech/SpeechList.js";
import speechData from "../Speech/speechData";

const styles = theme => ({
  root: {},
  playerwrapper: {}
});

const defaultUrl = speechData[0].url;
const defaultLabel = speechData[0].speaker + " - " + speechData[0].title

const  DEFAULT_STATE = {
  url: defaultUrl,
  label: defaultLabel
}

class MiniPlayer extends Component {
  state = {
    ...DEFAULT_STATE,
    value: 0,
    playing: false,
    played: 0,
    loaded: 0,
    duration: 0,
    loop: false,
    volume: 0.8,
    muted: false,
    playbackRate: 1.0
  };

  onSelectSpeech = (url, speaker, title) => {
    this.setState({
      url: url,
      label: speaker + " - " + title
    });
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  handleTabChangeIndex = index => {
    this.setState({ value: index });
  };

  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  stop = () => {
    this.setState({ url: null, playing: false });
  };

  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  onPlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  onPause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  onPrevious = () => {};

  onNext = () => {};

  onSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  onSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  // controls display of values of seek and loaded
  onProgress = state => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  onEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { classes, theme } = this.props;
    const {
      value,
      url,
      playing,
      played,
      loaded,
      loop,
      volume,
      muted,
      playbackRate,
      label
    } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <ReactPlayer
            ref={this.ref}
            width="100%"
            height="100%"
            url={url}
            playing={playing}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            loop={loop}
            onReady={() => console.log("onReady")}
            onStart={() => console.log("onStart")}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onBuffer={() => console.log("onBuffer")}
            onSeek={e => console.log("onSeek", e)}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
            onEnded={this.onEnded}
            onError={e => console.log("onError", e)}
          />
        </div>

        <div className={classes.playerwrapper}>
          <progress max={1} value={played} />
          <progress max={1} value={loaded} />
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleTabChange}>
              <Tab
                onClick={this.playPause}
                label={playing ? "Pause" : "Play"}
              />
              <Tab label={label} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={this.handleTabChangeIndex}
          >
            <SpeechList
              dir={theme.direction}
              onSelectSpeech={this.onSelectSpeech}
            />
            <FullPlayer
              dir={theme.direction}
              url={url}
              playing={this.state.playing}
              played={this.state.played}
              loaded={this.state.loaded}
              duration={this.state.duration}
              volume={this.state.volume}
              playPause={this.playPause}
              onSeekMouseDown={this.onSeekMouseDown}
              onSeekChange={this.onSeekChange}
              onSeekMouseUp={this.onSeekMouseUp}
              toggleLoop={this.toggleLoop}
              toggleMuted={this.toggleMuted}
              setVolume={this.setVolume}
              setPlaybackRate={this.setPlaybackRate}
            />
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

MiniPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniPlayer);
