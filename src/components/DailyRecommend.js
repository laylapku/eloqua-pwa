import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import BottomBar from "./BottomBar.js";
import quotes from "../data/quotes.js";
import { addToPlaylist } from "../actions.js";

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: id => dispatch(addToPlaylist(id))
  };
};

const styles = theme => ({
  container: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    background: "inherit",
    //boxShadow: "none",
    margin: "20px 20px",
    color: "#000"
  },
  header: {
    display: "grid",
    justifyItems: "end",
    gridTemplateColumns: "auto 10%"
  }
});

const DailyRecommend = props => {
  const { classes, addToPlaylist } = props;
  //const quotesPick = quotes[Math.floor(Math.random() * quotes.length)];
  const speechId = quotes[1].speechId;
  const content = quotes[1].quote;

  return (
    <React.Fragment>
      <div className={classes.header}>
        <FavoriteBorderIcon />
        <ShareIcon />
      </div>
      <Link to="/text">
        <Paper
          className={classes.container}
          onClick={() => addToPlaylist(speechId)}
        >
          <p>{content}</p>
          {/* <p>- xxx</p> */}
        </Paper>
      </Link>
      <BottomBar />
    </React.Fragment>
  );
};

DailyRecommend.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(DailyRecommend)
);
