import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
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
  textContainer: {
    ...theme.mixins.gutters(),
    boxShadow: "none",
    background: "inherit"
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

  const speechPlayed = speeches.find(ele => ele.id === playlist[index]);
  const textShown = texts.find(ele => ele.speechId === playlist[index]);
  const speaker = speakers[speechPlayed.speakerId].name;

  return (
    <React.Fragment>
      <Paper className={classes.textContainer}>
        <IconButton component={Link} to="/" className={classes.backButton}>
          <ArrowBackIcon />
        </IconButton>

        <div style={{ textAlign: "center" }}>
          <h4>
            {speechPlayed.title}
            <br />
            <em className="speaker">{speaker}</em>
          </h4>
          <h5>{speechPlayed.date}</h5>
        </div>
        <p style={{ maxHeight: "360px", overflow: "auto", lineHeight: "2em" }}>
          {textShown.text}
        </p>
      </Paper>

      <PlayerControls
        played={played}
        onSeekStart={onSeekStart}
        onSeekEnd={onSeekEnd}
        onSliderClick={onSliderClick}
      />
    </React.Fragment>
  );
};

Text.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStatetoProps)(Text));
