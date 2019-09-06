// react
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../contexts/PlayerContext";
import {
  PLAY_PAUSE,
  ON_PREV,
  ON_NEXT,
  TOGGLE_LOOP,
  SET_PLAYBACK_RATE,
  TOGGLE_ADD_TO_FAVLIST
} from "../../reducers/constants";

// material ui
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
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
import Duration from "./Duration";

// data
import speeches from "../../data/speeches";

//styles
import useStyles from "../../styles/customizedStyles";

const PlayControls = props => {
  const [speed, setSpeed] = useState(1);
  const [open, setOpen] = useState(false);
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, played, duration, loop, playlist, index, favlist } = player;
  const speechPlaying = speeches.find(item => item.id === playlist[index]);
  const { onSliderClick, onSeekEnd } = props;
  const classes = useStyles();

  const handleSpeedChange = e => {
    setSpeed(e.target.value);
    setOpen(false);
    dispatch({
      type: SET_PLAYBACK_RATE,
      payload: parseFloat(e.target.value)
    });
  };

  return (
    <Paper className={classes.controlsContainer}>
      <Slider
        value={played * 100}
        onChange={onSliderClick}
        onChangeCommitted={onSeekEnd}
      />
      <div className={classes.duration}>
        <Duration seconds={duration * played} />/
        <Duration seconds={duration} />
      </div>

      <div className={classes.iconWrapper}>
        <IconButton onClick={() => dispatch({ type: TOGGLE_LOOP })}>
          {loop ? <RepeatOneIcon /> : <LoopIcon />}
        </IconButton>
        <IconButton onClick={() => dispatch({ type: ON_PREV })}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            dispatch({ type: PLAY_PAUSE });
          }}
        >
          {playing ? (
            <PauseCircleOutlineIcon className={classes.playPauseIcon} />
          ) : (
            <PlayCircleOutlineIcon className={classes.playPauseIcon} />
          )}
        </IconButton>
        <IconButton onClick={() => dispatch({ type: ON_NEXT })}>
          <SkipNextIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            dispatch({
              type: TOGGLE_ADD_TO_FAVLIST,
              payload: [speechPlaying.id]
            })
          }
        >
          {favlist.indexOf(speechPlaying.id) !== -1 ? (
            <FavoriteIcon classes={{ root: classes.favIcon }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        <IconButton
          variant="outlined"
          color="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          <span className={classes.speedLabel}>{speed + "x"}</span>
        </IconButton>
        <Dialog open={open} aria-labelledby="speed-dialog">
          <DialogContent value={speed} onClick={handleSpeedChange}>
            <option value={0.75}>0.75x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </DialogContent>
        </Dialog>
        <IconButton component={Link} to="/playlist">
          <ListIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default PlayControls;
