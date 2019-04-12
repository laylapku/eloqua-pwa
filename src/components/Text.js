import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ListIcon from "@material-ui/icons/List";
import IconButton from "@material-ui/core/IconButton";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import CommentIcon from "@material-ui/icons/Comment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import LinkIcon from "@material-ui/icons/Link";
import PlayerControls from "./Player/PlayerControls.js";
import speeches from "../data/speeches";
import speakers from "../data/speakers";
import texts from "../data/texts";
import { toggleAddToFavlist } from "../actions.js";

const mapStatetoProps = state => {
  return { id: state.id, favlist: state.favlist };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id))
  };
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
  const {
    classes,
    id,
    favlist,
    toggleAddToFavlist,
    onSeekStart,
    onSeekEnd,
    onSliderChange,
    played
  } = props;
  const speechPlayed = speeches.find(item => item.id === id);
  const textShown = texts.find(item => item.speechId === id);
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
          {textShown.text}
        </p>
      </Paper>

      <PlayerControls
        played={played}
        onSeekStart={onSeekStart}
        onSeekEnd={onSeekEnd}
        onSliderChange={onSliderChange}
      />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={() => toggleAddToFavlist([speechPlayed.id])}>
          {favlist.indexOf(speechPlayed.id) !== -1 ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton>
          <SaveAltIcon />
        </IconButton>
        <IconButton>
          <LinkIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

Text.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Text)
);
