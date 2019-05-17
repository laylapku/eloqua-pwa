import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  playPause,
  onPrev,
  onNext,
  toggleLoop,
  setPlaybackRate,
  toggleAddToFavlist
} from "../../redux/actions.js";

import Slider from "@material-ui/lab/Slider";

import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import LoopIcon from "@material-ui/icons/Loop";
import ListIcon from "@material-ui/icons/List";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Duration from "./Duration.js";

import speeches from "../../data/speeches";

const mapStatetoProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    playPause: () => dispatch(playPause()),
    onPrev: () => dispatch(onPrev()),
    onNext: () => dispatch(onNext()),
    toggleLoop: () => dispatch(toggleLoop()),
    setPlaybackRate: value => dispatch(setPlaybackRate(value)),
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id))
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
    background: "inherit",
    overflowX: "hidden",
    paddingTop: "10px",
    position: "fixed",
    top: "auto",
    bottom: 0
  },
  playPauseIcon: {
    transform: "scale(1.5)"
  },
  favIcon: {
    fill: "RGB(206,32,41, 0.8)"
  }
};

class PlayControls extends Component {
  state = {
    speed: 1
  };

  handleSpeedChange = e => {
    this.setState({ speed: e.target.value });
    this.props.setPlaybackRate(e.target.value);
  };
  render() {
    const {
      classes,
      playing,
      played,
      loop,
      duration,
      playlist,
      index,
      favlist,
      playPause,
      onPrev,
      onNext,
      toggleLoop,
      toggleAddToFavlist,
      onSliderClick,
      onSeekStart,
      onSeekEnd
    } = this.props;
    const speechPlaying = speeches.find(item => item.id === playlist[index]);

    return (
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.root}>
          <Slider
            value={played}
            max={1}
            onChange={onSliderClick}
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
            <IconButton onClick={() => toggleAddToFavlist([speechPlaying.id])}>
              {favlist.indexOf(speechPlaying.id) !== -1 ? (
                <FavoriteIcon classes={{ root: classes.favIcon }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <IconButton component={Link} to="/playlist">
              <ListIcon />
            </IconButton>

            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="speed">Speed</InputLabel>
              <Select
                native
                value={this.state.speed}
                onChange={this.handleSpeedChange}
              >
                <option value={0.75}>0.75x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </Select>
            </FormControl>
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(PlayControls)
);
