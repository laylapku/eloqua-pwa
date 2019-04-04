import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import speakers from "../../data/speakers.js";

const styles = {
  avatar: {
    margin: 10,
    width: 80,
    height: 80
  }
};

const SpeakerList = props => {
  const { classes, filterSpeech } = props;
  return (
    <Grid container justify="space-around">
      {Object.values(speakers).map((item, index) => (
        <div key={index}>
          <Avatar
            alt={item.name}
            src={item.img}
            className={classes.avatar}
            onClick={() => filterSpeech(item.id)}
          />
          <p
            style={{
              fontSize: "12px",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            {item.name}
          </p>
        </div>
      ))}
    </Grid>
  );
};

SpeakerList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeakerList);
