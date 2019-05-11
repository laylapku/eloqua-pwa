import React from "react";

import { connect } from "react-redux";
import { toggleAddToFavlist, addToPlaylist } from "../redux/actions.js";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import BottomBar from "./BottomBar.js";

import speeches from "../data/speeches";
import speakers from "../data/speakers";

const mapStateToProps = state => {
  return { favlist: state.favlist };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id)),
    addToPlaylist: payload => dispatch(addToPlaylist(payload))
  };
};

const styles = () => ({
  root: {
    width: "100%"
  },
  favIcon: {
    fill: "RGB(206,32,41, 0.8)"
  },
  reminder: {
    fontSize: "22px",
    textAlign: "center",
    opacity: 0.3
  },
  typo: {
    paddingRight: "20px"
  }
});

const Favorites = props => {
  const { classes, favlist, toggleAddToFavlist, addToPlaylist } = props;

  return (
    <React.Fragment>
      <List className={classes.root}>
        {favlist.length < 1 ? (
          <h3 className={classes.reminder}>Add your first favorite speech!</h3>
        ) : (
          favlist.map((ele, index) => {
            const speech = speeches.find(item => item.id === ele);
            const year = speech.date.split(" ")[2];
            const speakerName = speakers[speech.speakerId].name;

            return (
              <ListItem
                key={"favListSpeech-" + index}
                button
                onClick={() => {
                  addToPlaylist({ id: ele });
                }}
                className="list-item"
              >
                <ListItemText
                  primary={
                    <Typography className={classes.typo}>
                      {speech.title + "(" + year + ")"}
                      <br />
                      <em className="speaker">{speakerName}</em>
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => toggleAddToFavlist([ele])}>
                    <FavoriteIcon classes={{ root: classes.favIcon }} />
                  </IconButton>
                  <IconButton
                    onClick={() => addToPlaylist({ id: ele, noPlay: true })}
                  >
                    <PlaylistAddIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })
        )}
      </List>
      <BottomBar />
    </React.Fragment>
  );
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorites)
);
