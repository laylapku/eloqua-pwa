import React from "react";

import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

import TemplateList from "./TemplateList.js";

const mapStateToProps = state => {
  return { favlist: state.favlist };
};

const styles = () => ({
  appBar: {
    background: "linear-gradient(to bottom, #ddd 0%, #EDEAE0 100%)",
    color: "inherit",
    boxShadow: "0 0 5px #d2d4dc",
    height: "48px",
    padding: "0 20px"
  },
  reminder: {
    fontSize: "20px",
    textAlign: "center",
    opacity: 0.2,
    marginTop: "80px"
  }
});

const Favorites = props => {
  const { classes, favlist } = props;

  return (
    <div className="page-container">
      <AppBar classes={{ root: classes.appBar }}>
        <h3>My Library</h3>
      </AppBar>
      {favlist.length < 1 ? (
        <h3 className={classes.reminder}>Add the first speech!</h3>
      ) : (
        favlist.map((ele, index) => {
          return (
            <TemplateList
              key={"favListSpeech-" + index}
              id={ele}
              noPlay={true}
            />
          );
        })
      )}
    </div>
  );
};

export default withStyles(styles)(connect(mapStateToProps)(Favorites));

/* favlist.map((ele, index) => {
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
}) */
