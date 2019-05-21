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
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
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
        fill: "RGB(111,134,131)",
        transform: "scale(1.2)"
      }
    },
    /*  MuiButton: {
      root: {
        height: "25px",
        minWidth: "35px",
        fontSize: "10px",
        marginTop: "10px",
        padding: 0,
        lineHeight: 0,
        borderRadius: "5px"
      },
      outlined: {
        padding: 0
      },
      outlinedPrimary: {
        border: "1px solid RGB(111,134,131)"
      }
    }, */
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
    bottom: 0
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

class PlayControls extends Component {
  state = {
    speed: 1,
    open: false
  };

  handleSpeedChange = e => {
    this.setState({ speed: e.target.value, open: false });
    this.props.setPlaybackRate(parseFloat(e.target.value));
  };

  handleDialogOpen = () => {
    this.setState({ open: true });
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
    const { speed, open } = this.state;
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

          <div className={classes.iconContainer}>
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

            <IconButton
              variant="outlined"
              color="primary"
              onClick={this.handleDialogOpen}
            >
              <span className={classes.label}>{speed + "x"}</span>
            </IconButton>
            <Dialog open={open} aria-labelledby="speed-dialog">
              <DialogContent value={speed} onClick={this.handleSpeedChange}>
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
  }
}

export default withStyles(styles)(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(PlayControls)
);
