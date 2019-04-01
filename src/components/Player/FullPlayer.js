import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import LoopIcon from "@material-ui/icons/Loop";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import CommentIcon from "@material-ui/icons/Comment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
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

const theme = createMuiTheme({
  overrides: {
    MuiSlider: {
      track: {
        backgroundColor: "RGB(202,187,143)"
      },
      thumb: {
        backgroundColor: "RGB(203,125,64)"
      }
    }
  },
  typography: { useNextVariants: true }
});

const styles = {
  root: {
    ...theme.mixins.gutters(),
    boxShadow: "none",
    background: "inherit"
  },
  playPauseIcon: {
    transform: "scale(1.5)"
  }
};

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
      <MuiThemeProvider theme={theme}>
        <Slider
          value={played}
          max={1}
          onChange={onSliderChange}
          onDragStart={onSeekStart}
          onDragEnd={onSeekEnd}
        />
      </MuiThemeProvider>
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
            <PauseCircleOutlineIcon className={classes.playPauseIcon} />
          ) : (
            <PlayCircleOutlineIcon className={classes.playPauseIcon} />
          )}
        </IconButton>
        <IconButton onClick={onNext}>
          <SkipNextIcon />
        </IconButton>
        <IconButton onClick={toggleMuted}>
          {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
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
