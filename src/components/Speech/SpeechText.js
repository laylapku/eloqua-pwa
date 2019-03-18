import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import speechData from "./speechData";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "none",
    background: 'inherit'
  }
});

const SpeechText = props => {
  const { classes, url } = props;
  return (
    <Paper className={classes.root}>
      {speechData.map(
        (item, index) =>
          item.url === url && (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          )
      )}
    </Paper>
  );
};

SpeechText.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeechText);
