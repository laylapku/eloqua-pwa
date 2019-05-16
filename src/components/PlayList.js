import React from "react";

import { connect } from "react-redux";
import {
  addToPlaylist,
  deleteFromPlaylist,
  toggleAddToFavlist
} from "../redux/actions.js";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";

import BottomBar from "./BottomBar.js";

import speeches from "../data/speeches";
import speakers from "../data/speakers";

const mapStateToProps = state => {
  return {
    playlist: state.playlist,
    index: state.index,
    favlist: state.favlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: payload => dispatch(addToPlaylist(payload)),
    deleteFromPlaylist: index => dispatch(deleteFromPlaylist(index)),
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id))
  };
};

const styles = () => ({
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
    favlist,
    addToPlaylist,
    deleteFromPlaylist,
    toggleAddToFavlist
  } = props;
  const favCheck = playlist.every(ele => favlist.indexOf(ele) !== -1);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h3>Your PlayList</h3>
        <IconButton onClick={() => toggleAddToFavlist(playlist)}>
          {favCheck ? (
            <FavoriteIcon classes={{ root: classes.favIcon }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton onClick={() => deleteFromPlaylist("all")}>
          <DeleteIcon classes={{ root: classes.deleteIcon }} />
        </IconButton>
      </div>

      {playlist.map((ele, index) => {
        const speech = speeches.find(item => item.id === ele);
        const year = speech.date.split(" ")[2]; // "27 October 1964" -> "1964"
        const speakerName = speakers[speech.speakerId].name;

        const stylesOnPlay = index => ({
          color: index === props.index ? "#CC5500" : "#1B1811"
        });

        return (
          <div className={classes.listItem} key={"playListSpeech-" + index}>
            {index === props.index ? (
              <IconButton>
                <PlayArrowIcon style={stylesOnPlay(index)} />
              </IconButton>
            ) : (
              <p />
            )}

            <ListItem button onClick={() => addToPlaylist({ id: ele })}>
              <ListItemText
                primary={
                  <Typography style={stylesOnPlay(index)}>
                    {speech.title + "(" + year + ")"}
                    <br />
                    <em className="speaker">{speakerName}</em>
                  </Typography>
                }
              />
            </ListItem>
            <IconButton onClick={() => toggleAddToFavlist([ele])}>
              {favlist.indexOf(ele) !== -1 ? (
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

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayList)
);
