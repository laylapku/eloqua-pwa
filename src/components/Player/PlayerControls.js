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
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

// components
import Duration from "./Duration.js";

// data
import speeches from "../../data/speeches";

const theme = createMuiTheme({
  overrides: {
    MuiSlider: {
      root /* thumb */: {
        color: "RGB(203,125,64)",
        padding: 0
      },
      /* track */ rail: {
        backgroundColor: "RGB(202,187,143)",
        height: "3px"
      }
    },
    MuiIconButton: {
      root: {
        padding: "12px 20px",
        color: "red"
      }
    },
    MuiSvgIcon: {
      root: {
        fill: "RGB(111,134,131)",
        transform: "scale(1.2)"
      }
    },
    MuiDialogContent: {
      root: {
        padding: "18px 18px",
        position: "fixed",
        bottom: "30px",
        borderRadius: "5px",
        background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
        "&:first-child": {
          paddingTop: 0
        }
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

const styles = {
  root: {
    ...theme.mixins.gutters(),
    boxShadow: "none",
    background: "inherit",
    overflowX: "hidden",
    paddingTop: "10px",
    position: "fixed",
    top: "auto",
    bottom: 0,
    touchAction: "none" // to fix slider error "Unable to preventDefault inside passive event listener due to target being treated as passive."
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  playPauseIcon: {
    transform: "scale(1.8)"
  },
  favIcon: {
    fill: "RGB(206,32,41,0.8)"
  },
  label: {
    height: "20px",
    minWidth: "30px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "2px solid RGB(111,134,131)"
  }
};

const PlayControls = props => {
  const [speed, setSpeed] = useState(1);
  const [open, setOpen] = useState(false);
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, played, duration, loop, playlist, index, favlist } = player;
  const speechPlaying = speeches.find(item => item.id === playlist[index]);

  const { classes, onSliderClick, onSeekEnd } = props;

  const handleSpeedChange = e => {
    setSpeed(e.target.value);
    setOpen(false);
    dispatch({
      type: SET_PLAYBACK_RATE,
      payload: parseFloat(e.target.value)
    });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Slider
          value={played * 100}
          onChange={onSliderClick}
          onChangeCommitted={onSeekEnd}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Duration seconds={duration * played} />/
          <Duration seconds={duration} />
        </div>

        <div className={classes.iconContainer}>
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
            <span className={classes.label}>{speed + "x"}</span>
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
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(PlayControls);
