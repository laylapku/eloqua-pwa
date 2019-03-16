import React, { Component } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import Slider from "@material-ui/lab/Slider";
import FullPlayer from "./FullPlayer";
import SpeechList from "../Speech/SpeechList.js";
import speechData from "../Speech/speechData";

const styles = theme => ({
  root: {},
  sliderContainer: {
    padding: "0 8px"
  },
  sliderThumb: {
    height: "0px",
    width: "0px"
  },
  appBar: {
    background: "purple",
    position: "static"
  },
  tabsIndicator: {
    display: "none"
  },
  tabLabelContainer: {
    padding: "0 0"
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
    tabValue: 0,
    playing: false,
    played: 0,
    duration: 0,
    loop: false,
    random: false,
    muted: false,
    volume: 0.8,
    playbackRate: 1.0,
    style: ""
  };

  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  handleTabChangeIndex = index => {
    this.setState({ tabValue: index });
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

  toggleLoopRandom = () => {
    if (this.state.loop === false) {
      if (this.state.random === false) {
        this.setState({ loop: true, random: false });
      } else {
        this.setState({ loop: false, random: false });
      }
    } else {
      this.setState({ loop: false, random: true });
    }
  };

  onPlay = () => {
    this.setState({ playing: true });
  };

  onPause = () => {
    this.setState({ playing: false });
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

  onSeekStart = e => {
    this.setState({ seeking: true, playing: true });
  };
  onSeekChange = (e, value) => {
    this.value = value;
    this.setState({ played: value });
  };
  onSeekEnd = () => {
    this.setState({ seeking: false });
    this.player.seekTo(this.value); // temp workaround for onDragEnd: getting value from handleChange, see: https://stackoverflow.com/questions/47440051/get-material-ui-slider-value-in-ondragstop-event-react
  };

  render() {
    const { classes, theme } = this.props;
    const {
      tabValue,
      url,
      label,
      playing,
      played,
      loop,
      muted,
      volume,
      playbackRate
    } = this.state;

    return (
      <div classes={classes.root}>
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
            onPlay={this.onPlay}
            onPause={this.onPause}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
            onEnded={this.onEnded}
          />
        </div>

        <div>
          <Slider
            classes={{
              container: classes.sliderContainer,
              thumb: classes.sliderThumb
            }}
            value={played}
            max={1}
            onChange={this.onSeekChange}
            onDragStart={this.onSeekStart}
            onDragEnd={this.onSeekEnd}
          />
          <AppBar className={classes.appBar}>
            <Tabs
              classes={{ indicator: classes.tabsIndicator }}
              value={tabValue}
              onChange={this.handleTabChange}
            >
              <Tab
                onClick={this.playPause}
                label={
                  playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />
                }
              />
              <Tab
                classes={{ labelContainer: classes.tabLabelContainer }}
                label={label}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            slideStyle={{ overflow: "visible" }}
            index={tabValue}
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
              muted={this.state.muted}
              loop={this.state.loop}
              random={this.state.random}
              playPause={this.playPause}
              onPrev={this.onPrev}
              onNext={this.onNext}
              onSeekStart={this.onSeekStart}
              onSeekChange={this.onSeekChange}
              onSeekEnd={this.onSeekEnd}
              toggleLoopRandom={this.toggleLoopRandom}
              toggleMuted={this.toggleMuted}
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
