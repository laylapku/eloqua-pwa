import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ListIcon from "@material-ui/icons/List";
import FullPlayer from "./Player/FullPlayer.js";
import speeches from "../data/speeches";
import speakers from "../data/speakers";

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
  const { classes, id } = props;
  const speechPlayed = speeches.find(item => item.id === id);
  const speaker = speakers[speechPlayed.speakerId].name;

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 10px"
        }}
      >
        <Link to="/search">
          <ArrowBackIcon />
        </Link>
        <Link to="/playlist">
          <ListIcon />
        </Link>
      </div>

      <Paper className={classes.textContainer}>
        <div style={{ textAlign: "center" }}>
          <h3>{speaker + " - " + speechPlayed.title}</h3>
          <p>{speechPlayed.date}</p>
        </div>
        <p style={{ maxHeight: "350px", overflow: "auto", lineHeight: "2em" }}>
          {speechPlayed.text}
        </p>
      </Paper>

      <FullPlayer />
    </React.Fragment>
  );
};

Text.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStatetoProps)(Text));
