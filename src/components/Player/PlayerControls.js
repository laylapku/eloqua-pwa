import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/lab/Slider";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import LoopIcon from "@material-ui/icons/Loop";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import ListIcon from "@material-ui/icons/List";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Duration from "./Duration.js";
import speeches from "../../data/speeches";
import {
  playPause,
  onDuration,
  onPrev,
  onNext,
  toggleLoop,
  toggleMuted,
  toggleAddToFavlist,
  addToPlaylist
} from "../../redux/actions.js";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    playPause: () => dispatch(playPause()),
    onDuration: payload => dispatch(onDuration(payload)),
    onPrev: () => dispatch(onPrev()),
    onNext: () => dispatch(onNext()),
    toggleLoop: () => dispatch(toggleLoop()),
    toggleMuted: () => dispatch(toggleMuted()),
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id)),
    addToPlaylist: payload => dispatch(addToPlaylist(payload))
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
    },
    MuiIconButton: {
      root: {
        padding: "12px 20px"
      }
    },
    MuiSvgIcon: {
      root: {
        fill: "RGB(111,134,131)"
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
    background: "inherit"
  },
  playPauseIcon: {
    transform: "scale(1.5)"
  },
  favIcon: {
    fill: "RGB(206,32,41, 0.8)"
  }
};

const PlayControls = props => {
  const {
    classes,
    playing,
    loop,
    muted,
    duration,
    playlist,
    index,
    favlist,
    playPause,
    onPrev,
    onNext,
    toggleLoop,
    toggleMuted,
    toggleAddToFavlist,
    addToPlaylist,
    onSliderChange,
    onSeekStart,
    onSeekEnd,
    played
  } = props;
  const speechPlayed = speeches.find(item => item.id === playlist[index]);

  return (
    <MuiThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Slider
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <IconButton onClick={toggleLoop}>
            {loop ? <RepeatOneIcon /> : <LoopIcon />}
          </IconButton>
          <IconButton onClick={onPrev}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              playPause();
              addToPlaylist({ id: speechPlayed.id });
            }}
          >
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
          <IconButton onClick={() => toggleAddToFavlist([speechPlayed.id])}>
            {favlist.indexOf(speechPlayed.id) !== -1 ? (
              <FavoriteIcon classes={{ root: classes.favIcon }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton component={Link} to="/playlist">
            <ListIcon />
          </IconButton>
        </div>
      </Paper>
    </MuiThemeProvider>
  );
};

PlayControls.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(PlayControls)
);
