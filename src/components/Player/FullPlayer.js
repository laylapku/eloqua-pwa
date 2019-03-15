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
import Duration from "./Duration.js";
import SpeechText from "../Speech/SpeechText";

const styles = theme => ({
  playercontainer: {

  },
  playedbar: {
    width: '100%'
  }
 
});

const DetailedPlayer = props => {
  const {
    classes,
    url,
    playing,
    played,
    loop,
    random,
    volume,
    muted,
    duration,
    playPause,
    toggleLoopRandom,
    onPrev,
    onNext,
    onSeekMouseDown,
    onSeekChange,
    onSeekMouseUp,
    toggleMuted,
    setVolume
  } = props;

  return (
    <div>
      <SpeechText url={url} />
      <div className={classes.playercontainer}>
        <div>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={onSeekMouseDown}
            onChange={onSeekChange}
            onMouseUp={onSeekMouseUp}
            className={classes.playedbar}
          />
          <Duration seconds={duration * played} />/
          <Duration seconds={duration} />
        </div>

        <div>
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
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={setVolume}
          />

         {/*  <form className={classes.root} autoComplete="off">
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-speed-simple">Speed</InputLabel>
              <Select
                value={playbackRate}
                onChange={setPlaybackRate}
                input={<FilledInput name="age" id="filled-speed-simple" />}
              >
                <MenuItem value={1}>
                  <em>Normal</em>
                </MenuItem>
                <MenuItem value={1.5}>1.5x</MenuItem>
                <MenuItem value={2}>2x</MenuItem>
              </Select>
            </FormControl>
          </form> */}
          {/*  <button onClick={onPrev}>Previous</button> */}
          {/* <button onClick={playPause}>{playing ? "Pause" : "Play"}</button> */}
          {/* <button onClick={onNext}>Next</button> */}
          {/* <button onClick={toggleLoopRandom}>{loop ? "Random" : "Loop"}</button> */}
          {/* <button onClick={setPlaybackRate} value={1}>
            normal
          </button>
          <button onClick={setPlaybackRate} value={2}>
            2x
          </button> */}
          {/* <button onClick={toggleMuted}>Mute</button> */}
        </div>
      </div>
    </div>
  );
};

DetailedPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedPlayer);
