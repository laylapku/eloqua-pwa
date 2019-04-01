import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import themeData from "./themeData.js";

const styles = {
  avatar: {
    margin: 10,
    width: 80,
    height: 80
  }
};

const Themes = props => {
  const { classes } = props;
  return (
    <Grid container justify="space-around">
      {themeData.map((item, index) => (
        <div key={index}>
          <Avatar alt={item} className={classes.avatar} />
          <p
            style={{
              fontSize: "12px",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            {item}
          </p>
        </div>
      ))}
    </Grid>
  );
};

Themes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Themes);
