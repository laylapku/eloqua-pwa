import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import speechData from "./Speech/speechData";
import FullPlayer from "./Player/FullPlayer.js";

const mapStatetoProps = state => {
  return { url: state.url };
};

const styles = theme => ({
  backButton: {
    padding: "0 12px",
    color: "#000"
  },
  textContainer: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "none",
    background: "inherit"
  }
});

const Text = props => {
  const { classes, url } = props;
  return (
    <React.Fragment>
      <Link to="/search">
        <ArrowBackIcon classes={{ root: classes.backButton }} />
      </Link>

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
    </React.Fragment>
  );
};

Text.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStatetoProps)(Text));
