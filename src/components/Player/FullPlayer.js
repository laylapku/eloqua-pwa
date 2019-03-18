import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import LoopIcon from "@material-ui/icons/Loop";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import Slider from "@material-ui/lab/Slider";
import Duration from "./Duration.js";
import SpeechText from "../Speech/SpeechText";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    boxShadow: "none",
    background: 'inherit'
  },
  sliderTrack: {
    background: 'RGB(162,146,102)'
  },
  sliderThumb: {
    background: 'RGB(111,77,57, .7)'
  },
  iconButton: {
    color: 'RGB(230,184,117)' 
  } 
});

const FullPlayer = props => {
  const {
    classes,
    url,
    playing,
    played,
    loop,
    random,
    muted,
    duration,
    playPause,
    onPrev,
    onNext,
    onSeekStart,
    onProgressChange,
    onSeekEnd,
    toggleLoopRandom,
    toggleMuted
  } = props;

  return (
    <div>
      <Paper className={classes.root}>
        <Slider
          classes={{ track: classes.sliderTrack, thumb: classes.sliderThumb }}
          value={played}
          max={1}
          onChange={onProgressChange}
          onDragStart={onSeekStart}
          onDragEnd={onSeekEnd}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Duration seconds={duration * played} />/
          <Duration seconds={duration} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton  classes={{root: classes.iconButton}} onClick={toggleLoopRandom} >
            {loop ? <RepeatOneIcon /> : random ? <ShuffleIcon /> : <LoopIcon />}
          </IconButton>
          <IconButton onClick={onPrev}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton onClick={playPause}>
            {playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
          </IconButton>
          <IconButton onClick={onNext}>
            <SkipNextIcon />
          </IconButton>
          <IconButton onClick={toggleMuted}>
            {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </div>
      </Paper>
      <SpeechText url={url} />
    </div>
  );
};

FullPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullPlayer);
