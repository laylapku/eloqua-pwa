// react
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../contexts/player/player.context";
import {
  updatePlayed,
  playPause,
  onPrev,
  onNext,
  toggleLoop,
  setSeekingTrue,
  setSeekingFalse,
  setPlaybackRate,
  toggleAddToFavlist
} from "../contexts/player/player.actions";

// material ui
import {
  Slider,
  Container,
  Dialog,
  DialogContent,
  IconButton
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import LoopIcon from "@material-ui/icons/Loop";
import ListIcon from "@material-ui/icons/List";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

// components
import Duration from "./PlayerControlsDuration";

// data
import speeches from "../data/speeches";

//styles
import useStyles from "../styles/customizedStyles";

const PlayerControls = () => {
  const { player, playerRef, dispatch } = useContext(PlayerContext);
  const { playing, played, loop, duration, playlist, index, favlist } = player;

  // seek methods for player slider
  const onSeekEnd = (e, value) => {
    playerRef.current.seekTo(parseFloat(value / 100)); //ref fix
    dispatch(setSeekingFalse());
  };

  const onSliderClick = (e, value) => {
    dispatch(setSeekingTrue());
    dispatch(updatePlayed(parseFloat(value / 100)));
  };

  //switch play speed
  const [speed, setSpeed] = useState(1);
  const [open, setOpen] = useState(false);
  const handleSpeedChange = e => {
    setSpeed(e.target.value);
    setOpen(false);
    dispatch(setPlaybackRate(parseFloat(e.target.value)));
  };

  const speechPlaying = speeches.find(item => item.id === playlist[index]);
  const classes = useStyles();

  return (
    <Container className={classes.controlsContainer}>
      <Slider
        value={played * 100}
        onChange={onSliderClick}
        onChangeCommitted={onSeekEnd}
      />
      <div className={classes.duration}>
        <Duration seconds={duration * played} />/
        <Duration seconds={duration} />
      </div>

      <Container className={classes.controlsFlex}>
        <IconButton onClick={() => dispatch(toggleLoop())}>
          {loop ? <RepeatOneIcon /> : <LoopIcon />}
        </IconButton>
        <IconButton onClick={() => dispatch(onPrev())}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={() => dispatch(playPause())}>
          {playing ? (
            <PauseCircleOutlineIcon className={classes.playPauseIcon} />
          ) : (
            <PlayCircleOutlineIcon className={classes.playPauseIcon} />
          )}
        </IconButton>
        <IconButton onClick={() => dispatch(onNext())}>
          <SkipNextIcon />
        </IconButton>
        <IconButton
          onClick={() => dispatch(toggleAddToFavlist([speechPlaying.id]))}
        >
          {favlist.indexOf(speechPlaying.id) !== -1 ? (
            <FavoriteIcon classes={{ root: classes.favIcon }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <span className={classes.speedBtn}>{speed + "x"}</span>
        </IconButton>
        <Dialog open={open} aria-labelledby="speed-dialog">
          <DialogContent
            value={speed}
            onClick={handleSpeedChange}
            classes={{ root: classes.speedDialog }}
          >
            <option value={0.75}>0.75x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </DialogContent>
        </Dialog>
        <IconButton component={Link} to="/playlist">
          <ListIcon />
        </IconButton>
      </Container>
    </Container>
  );
};

export default PlayerControls;
