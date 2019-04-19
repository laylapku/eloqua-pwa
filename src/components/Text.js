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
  return { id: state.id };
};

const styles = theme => ({
  textContainer: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "none",
    background: "inherit"
  }
});

const Text = props => {
  const { classes, id, onSeekStart, onSeekEnd, onSliderChange, played } = props;
  const speechPlayed = speeches.find(item => item.id === id);
  const textShown = texts.find(item => item.speechId === id);
  const speaker = speakers[speechPlayed.speakerId].name;

  return (
    <React.Fragment>
      <IconButton component={Link} to="/">
        <ArrowBackIcon />
      </IconButton>
      <Paper className={classes.textContainer}>
        <div style={{ textAlign: "center" }}>
          <h3>{speaker + " - " + speechPlayed.title}</h3>
          <p>{speechPlayed.date}</p>
        </div>
        <p style={{ maxHeight: "400px", overflow: "auto", lineHeight: "2em" }}>
          {textShown.text}
        </p>
      </Paper>

      <PlayerControls
        played={played}
        onSeekStart={onSeekStart}
        onSeekEnd={onSeekEnd}
        onSliderChange={onSliderChange}
      />
    </React.Fragment>
  );
};

Text.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStatetoProps)(Text));
