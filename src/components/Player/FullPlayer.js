import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
  sliderContainer: {
    marginTop: '10px',
    padding: "0px 6px"
  },
});

/* const divStyle = {
  WebkitAppearance: "none",
  width: "100%",
  height: "10px",
  background: "#d3d3d3",
  outline: "none",
  opacity: 0.7,
  WebkitTransition: ".2s",
  transition: "opacity .2s"
}; */

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
    onSeekChange,
    onSeekEnd,
    toggleLoopRandom,
    toggleMuted
  } = props;

  return (
    <div>
      <SpeechText url={url} />
      <div>
        <Slider
          classes={{ container: classes.sliderContainer }}
          value={played}
          max={1}
          onChange={onSeekChange}
          onDragStart={onSeekStart}
          onDragEnd={onSeekEnd}
        />
        <span style={{ display: "flex", justifyContent: "flex-end" }}>
          <Duration seconds={duration * played} />/
          <Duration seconds={duration} />
        </span>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton onClick={toggleLoopRandom}>
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
      </div>
    </div>
  );
};

FullPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullPlayer);
