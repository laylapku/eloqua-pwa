import React from "react";
import { connect } from "react-redux";
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
import {
  playPause,
  onDuration,
  onPrev,
  onNext,
  toggleLoopRandom,
  toggleMuted
} from "../../actions.js";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    playPause: () => dispatch(playPause()),
    onDuration: payload => dispatch(onDuration(payload)),
    onPrev: () => dispatch(onPrev()),
    onNext: () => dispatch(onNext()),
    toggleLoopRandom: () => dispatch(toggleLoopRandom()),
    toggleMuted: () => dispatch(toggleMuted())
  };
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    boxShadow: "none",
    background: "inherit"
  },
  sliderTrack: {
    background: "RGB(202,187,143)"
  },
  sliderThumb: {
    background: "RGB(203,125,64)"
  },
  svgIcons: {
    transform: "scale(1.5)"
  }
});

const FullPlayer = props => {
  const {
    classes,
    playing,
    played,
    loop,
    random,
    muted,
    duration,
    playPause,
    onPrev,
    onNext,
    onSliderChange,
    onSeekStart,
    onSeekEnd,
    toggleLoopRandom,
    toggleMuted
  } = props;

  return (
    <Paper className={classes.root}>
      <Slider
        classes={{ track: classes.sliderTrack, thumb: classes.sliderThumb }}
        value={played}
        max={1}
        onChange={onSliderChange}
        onDragStart={onSeekStart}
        onDragEnd={onSeekEnd}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Duration seconds={duration * played} />/
        <Duration seconds={duration} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <IconButton onClick={toggleLoopRandom}>
          {loop ? <RepeatOneIcon /> : random ? <ShuffleIcon /> : <LoopIcon />}
        </IconButton>
        <IconButton onClick={onPrev}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={playPause}>
          {playing ? (
            <PauseCircleFilledIcon className={classes.svgIcons} />
          ) : (
            <PlayCircleFilledIcon className={classes.svgIcons} />
          )}
        </IconButton>
        <IconButton onClick={onNext}>
          <SkipNextIcon />
        </IconButton>
        <IconButton onClick={toggleMuted}>
          {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </div>
    </Paper>
  );
};

FullPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(FullPlayer)
);
