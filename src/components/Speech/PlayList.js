import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import BottomBar from "../BottomBar.js";
import speakers from "../../data/speakers";
import {
  handlePlaylistItemClick,
  deleteFromPlaylist,
  deleteAllFromPlaylist,
  toggleAddToFavlist
} from "../../redux/actions.js";

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
    marginBottom: "120px"
  },
  header: {
    display: "grid",
    gridTemplateColumns: "auto 12% 8%",
    alignItems: "center",
    padding: "0 15px",
    borderBottom: "1px groove RGB(202,187,143,0.1)"
  },
  listItem: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "8% auto repeat(2, 10%)"
  },
  deleteIcon: {
    fill: "RGB(132,132,130)"
  },
  favIcon: {
    fill: "RGB(206,32,41, 0.8)"
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
  const favCheck = playlist.every(ele => favlist.indexOf(ele.id) > -1);
  const ids = playlist.map(ele => ele.id);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h3>Your PlayList</h3>
        <IconButton onClick={() => toggleAddToFavlist(ids)}>
          {playlist.length > 0 && favCheck === true ? (
            <FavoriteIcon classes={{ root: classes.favIcon }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton onClick={deleteAllFromPlaylist}>
          <DeleteIcon classes={{ root: classes.deleteIcon }} />
        </IconButton>
      </div>

      {playlist.map((ele, index) => {
        const year = ele.date.split(" ")[2];
        const speaker = speakers[ele.speakerId].name;
        const stylesOnPlay = index => ({
          color: index === props.index ? "#CC5500" : "#1B1811"
        });

        return (
          <div className={classes.listItem} key={index}>
            {index === props.index ? (
              <IconButton>
                <PlayArrowIcon style={stylesOnPlay(index)} />
              </IconButton>
            ) : (
              <p />
            )}

            <ListItem button onClick={() => handlePlaylistItemClick(index)}>
              <ListItemText
                primary={
                  <Typography style={stylesOnPlay(index)}>
                    {ele.title + "(" + year + ")"}
                    <br />
                    <em className="speaker">{speaker}</em>
                  </Typography>
                }
              />
            </ListItem>
            <IconButton onClick={() => toggleAddToFavlist([ele.id])}>
              {favlist.indexOf(ele.id) !== -1 ? (
                <FavoriteIcon classes={{ root: classes.favIcon }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <IconButton onClick={() => deleteFromPlaylist(index)}>
              <DeleteIcon classes={{ root: classes.deleteIcon }} />
            </IconButton>
          </div>
        );
      })}

      <BottomBar />
    </div>
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
