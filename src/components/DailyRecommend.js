import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import BottomBar from "./BottomBar.js";
import quotes from "../data/quotes.js";
import { addToPlaylist, toggleAddToFavlist } from "../actions.js";

const mapStatetoProps = state => {
  return { favlist: state.favlist };
};

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: id => dispatch(addToPlaylist(id)),
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id))
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
    display: "flex",
    justifyContent: "flex-end"
  }
});

const DailyRecommend = props => {
  const { classes, favlist, addToPlaylist, toggleAddToFavlist } = props;
  //const quotesPick = quotes[Math.floor(Math.random() * quotes.length)];
  const speechId = quotes[1].speechId;
  const content = quotes[1].quote;

  return (
    <React.Fragment>
      <div className={classes.header}>
        <IconButton onClick={() => toggleAddToFavlist([speechId])}>
          {favlist.indexOf(speechId) !== -1 ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
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
    mapStatetoProps,
    mapDispatchToProps
  )(DailyRecommend)
);
