import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import BottomBar from "../BottomBar.js";
import speakers from "../../data/speakers";
import {
  handlePlaylistItemClick,
  deleteFromPlaylist,
  deleteAllFromPlaylist,
  toggleAddToFavlist
} from "../../actions.js";

const mapStateToProps = state => {
  return {
    playlist: state.playlist,
    index: state.index,
    favlist: state.favlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePlaylistItemClick: index => dispatch(handlePlaylistItemClick(index)),
    deleteFromPlaylist: index => dispatch(deleteFromPlaylist(index)),
    deleteAllFromPlaylist: () => dispatch(deleteAllFromPlaylist()),
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id))
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

const PlayList = props => {
  const {
    classes,
    playlist,
    handlePlaylistItemClick,
    deleteFromPlaylist,
    deleteAllFromPlaylist,
    favlist,
    toggleAddToFavlist
  } = props;
  const favCheck = playlist.every(item => favlist.indexOf(item.id) > -1);
  const ids = playlist.map(item => item.id);

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        {/* todo: list overflow */}
        <div className={classes.header}>
          <h3>Your PlayList</h3>
          {playlist.length > 0 && favCheck === true ? (
            <FavoriteIcon onClick={() => toggleAddToFavlist(ids)} />
          ) : (
            <FavoriteBorderIcon onClick={() => toggleAddToFavlist(ids)} />
          )}
          <DeleteIcon onClick={deleteAllFromPlaylist} />
        </div>

        {playlist.map((item, index) => {
          const speaker = speakers[item.speakerId].name;

          return (
            <div className={classes.list} key={index}>
              {index === props.index ? <PlayArrowIcon /> : <p />}
              <p onClick={() => handlePlaylistItemClick(index)}>
                {item.title + " - " + speaker}
              </p>
              <IconButton onClick={() => toggleAddToFavlist([item.id])}>
                {favlist.indexOf(item.id) !== -1 ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <ShareIcon />
              <SaveAltIcon />
              <DeleteIcon onClick={() => deleteFromPlaylist(index)} />
            </div>
          );
        })}
      </Paper>
      <BottomBar />
    </React.Fragment>
  );
};

PlayList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayList)
);
