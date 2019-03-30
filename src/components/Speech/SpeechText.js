import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import speechData from "./speechData";
import FullPlayer from "../Player/FullPlayer.js";

const mapStatetoProps = state => {
  return { url: state.url };
};

const styles = theme => ({
  backButton: {
    padding: "0 12px"
  },
   textContainer: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "none",
    background: "inherit"
  }
});

const SpeechText = props => {
  const { classes, url, handleTabChangeIndex } = props;
  return (
    <div>
      <IconButton
        classes={{ root: classes.backButton }}
        onClick={() => handleTabChangeIndex(0)}
      >
        <ArrowBackIcon />
      </IconButton>

      <Paper className={classes.textContainer}>
        {speechData.map(
          (item, index) =>
            item.url === url && (
              <div key={index}>
                <div style={{ textAlign: "center" }}>
                  <h3>{item.speaker + " - " + item.title}</h3>
                  <p>{item.date}</p>
                </div>
                <p
                  style={{
                    maxHeight: "350px",
                    overflow: "auto",
                    lineHeight: "2em"
                  }}
                >
                  {item.text}
                </p>
              </div>
            )
        )}
      </Paper>

      <FullPlayer />
    </div>
  );
};

SpeechText.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStatetoProps
  )(SpeechText)
);
