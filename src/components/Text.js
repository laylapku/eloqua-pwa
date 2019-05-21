import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

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

const styles = theme => ({
  root: {
    boxShadow: "none",
    background: "inherit"
  },
  textContainer: {
    overflow: "auto",
    position: "absolute",
    top: "105px",
    bottom: "105px",
    lineHeight: "2em",
    padding: "0 15px"
  },

  backButton: {
    padding: 0
  }
});

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
      <Paper className={classes.root}>
        <IconButton
          onClick={props.history.goBack}
          className={classes.backButton}
        >
          <ArrowBackIcon />
        </IconButton>
        <h4>
          {speechPlaying.title}
          <br />
          <em className="speaker">{speakerName}</em>
        </h4>
        <h5>{speechPlaying.date}</h5>
        <p className={classes.textContainer}>{textShown.text}</p>
      </Paper>

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
