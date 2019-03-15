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
  playercontainer: {},
  playedbar: {
    width: "100%",
    height: "5px",
  }
});

/* const shuffledPlaylist = speechData => {
  for (let i = speechData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [speechData[i], speechData[j]] = [speechData[j], speechData[i]];
  }
}; */

const DEFAULT_STATE = {
  index: 0,
  url: speechData[0].url,
  label: speechData[0].speaker + " - " + speechData[0].title
};

class MiniPlayer extends Component {
  state = {
    ...DEFAULT_STATE,
    value: 0,
    playing: false,
    played: 0,
    duration: 0,
    loop: false,
    random: false,
    volume: 0.8,
    muted: false
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

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  toggleLoopRandom = () => {
    if(this.state.loop === false) {
      if(this.state.random === false) {
        this.setState({ loop: true, random: false })
      } else {
        this.setState({ loop: false, random: false })
      }
    } else {
      this.setState({ loop: false, random: true })
    }
  };

  onPlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  onPause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

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

  // controls display of values of seek
  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  onSelectSpeech = index => {
    this.setState({
      index: index,
      url: speechData[index].url,
      label: speechData[index].speaker + " - " + speechData[index].title
    });
  };

  generateRandomIndex = () => {
    return Math.floor(Math.random() * speechData.length);
  };

  switchUrl = () => {
    if (this.state.random === false) {
      if (this.state.index < speechData.length - 1) {
        this.setState({
          playing: true,
          index: this.state.index + 1,
          url: speechData[this.state.index + 1].url,
          label:
            speechData[this.state.index + 1].speaker +
            " - " +
            speechData[this.state.index + 1].title
        });
      }
    } else {
      const randomIndex = this.generateRandomIndex();
      this.setState({
        playing: true,
        index: randomIndex,
        url: speechData[randomIndex].url,
        label:
          speechData[randomIndex].speaker +
          " - " +
          speechData[randomIndex].title
      });
    }
  };

  onNext = () => {
    this.switchUrl();
  };

  onEnded = () => {
    if (this.state.loop === false) {
      this.switchUrl();
    } else {
      this.setState({ playing: this.state.loop });
    }
  };

  onPrev = () => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
        url: speechData[this.state.index - 1].url,
        label:
          speechData[this.state.index - 1].speaker +
          " - " +
          speechData[this.state.index - 1].title
      });
    }
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { classes, theme } = this.props;
    const {
      value,
      url,
      label,
      playing,
      played,
      loop,
      volume,
      muted
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
            volume={volume}
            muted={muted}
            loop={loop}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
            onEnded={this.onEnded}
          />
        </div>

        <div className={classes.playercontainer}>
          <progress max={1} value={played} className={classes.playedbar} />
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
            slideStyle={{ overflow: 'visible'}}
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
              duration={this.state.duration}
              volume={this.state.volume}
              muted={this.state.muted}
              loop={this.state.loop}
              random={this.state.random}
              playPause={this.playPause}
              onPrev={this.onPrev}
              onNext={this.onNext}
              onSeekMouseDown={this.onSeekMouseDown}
              onSeekChange={this.onSeekChange}
              onSeekMouseUp={this.onSeekMouseUp}
              toggleLoopRandom={this.toggleLoopRandom}
              toggleMuted={this.toggleMuted}
              setVolume={this.setVolume}
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
