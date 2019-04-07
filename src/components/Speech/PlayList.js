import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import speakers from "../../data/speakers";
import { addToPlaylist } from "../../actions.js";
import BottomBar from "../BottomBar.js";

const mapStateToProps = state => {
  return { playList: state.playList, url: state.url };
};

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: id => dispatch(addToPlaylist(id))
  };
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "none",
    background: "inherit"
  },
  header: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "auto 12% 8%"
  },
  list: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "8% auto repeat(4, 8%)"
  }
});

const Playlist = props => {
  const { classes, url, playList, addToPlaylist } = props;

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        {/* todo: list overflow */}
        <div className={classes.header}>
          <h3>Your Playlist</h3>
          <FavoriteBorderIcon />
          <DeleteIcon />
        </div>
        {playList.map(item => {
          const speaker = speakers[item.speakerId].name;
          return (
            <div className={classes.list} key={item.id}>
              {item.url === url ? <PlayArrowIcon /> : <p />}
              <p onClick={() => addToPlaylist(item.id)}>
                {item.title + " - " + speaker}
              </p>
              <FavoriteBorderIcon />
              <ShareIcon />
              <SaveAltIcon />
              <DeleteIcon />
            </div>
          );
        })}
      </Paper>
      <BottomBar />
    </React.Fragment>
  );
};

Playlist.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Playlist)
);
