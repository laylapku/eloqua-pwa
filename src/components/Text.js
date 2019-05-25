import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import PlayerControls from "./Player/PlayerControls.js";

import speeches from "../data/speeches";
import speakers from "../data/speakers";
import texts from "../data/texts";

const mapStatetoProps = state => {
  return {
    playlist: state.playlist,
    index: state.index
  };
};

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "inherit"
      },
      elevation2: {
        boxShadow: "none"
      }
    },
    MuiTypography: {
      root: {
        textAlign: "center"
      }
    },
    MuiIconButton: {
      root: {
        padding: 0
      }
    },
    typography: {
      useNextVariants: true
    }
  }
});

const styles = {
  textContainer: {
    overflow: "auto",
    position: "absolute",
    top: "115px",
    bottom: "135px",
    lineHeight: "2em",
    padding: "0 20px",
    textAlign: "justify",
    opacity: 0.7
  }
};

const Text = props => {
  const {
    classes,
    playlist,
    index,
    onSeekStart,
    onSeekEnd,
    onSliderClick,
    played
  } = props;

  const speechPlaying = speeches.find(ele => ele.id === playlist[index]);
  const textShown = texts.find(ele => ele.speechId === playlist[index]);
  const speakerName = speakers[speechPlaying.speakerId].name;

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <Paper>
          <IconButton onClick={props.history.goBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography>
            <strong>{speechPlaying.title}</strong>
          </Typography>
          <Typography className="speaker">
            <em>{speakerName}</em>{" "}
          </Typography>
          <Typography>{speechPlaying.date} </Typography>
          <Typography className={classes.textContainer}>
            {textShown.text}
          </Typography>
        </Paper>
      </MuiThemeProvider>

      <PlayerControls
        played={played}
        onSeekStart={onSeekStart}
        onSeekEnd={onSeekEnd}
        onSliderClick={onSliderClick}
      />
    </Fragment>
  );
};

export default withStyles(styles)(withRouter(connect(mapStatetoProps)(Text)));
