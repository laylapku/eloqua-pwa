import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import SortIcon from "@material-ui/icons/Sort";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import speeches from "../../data/speeches";
import speakers from "../../data/speakers";
import { addToPlaylist } from "../../actions.js";

const mapStateToProps = state => {
  return { playList: state.playList };
};

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: id => dispatch(addToPlaylist(id))
  };
};

const styles = theme => ({
  root: {
    width: "100%"
  }
});

const SpeechList = props => {
  const { classes, filter, addToPlaylist } = props;

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton>
          <PlaylistAddIcon />
        </IconButton>
        <IconButton>
          <SortIcon />
        </IconButton>
      </div>

      <List className={classes.root}>
        {speeches
          .filter(
            item =>
              item.speakerId === filter || //by speaker
              item.theme.includes(filter) || //by theme
              item.title.toLowerCase().includes(filter) || //by search of speech title
              speakers[item.speakerId].name.toLowerCase().includes(filter) //by search of speaker name, better solution??
          )
          .map((item, index) => {
            const year = item.date.split(" ")[2];
            const speaker = speakers[item.speakerId].name;

            return (
              <ListItem
                key={index}
                button
                onClick={() => addToPlaylist(item.id)}
              >
                <ListItemText
                  primary={speaker + " - " + item.title + "(" + year + ")"}
                />
              </ListItem>
            );
          })}
      </List>
    </React.Fragment>
  );
};

SpeechList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SpeechList)
);
