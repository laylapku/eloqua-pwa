import React from "react";

import { connect } from "react-redux";
import { addToPlaylist } from "../redux/actions.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import speeches from "../data/speeches";
import speakers from "../data/speakers";

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: payload => dispatch(addToPlaylist(payload))
  };
};

const ExploreFilteredList = props => {
  const { speakerFilter, categoryFilter, inputFilter, addToPlaylist } = props;

  return (
    <List>
      {speeches
        .filter(
          ele =>
            (speakerFilter && ele.speakerId === speakerFilter) || //by speaker
            (categoryFilter && ele.category.includes(categoryFilter)) || //by category
            ((inputFilter &&
              //by filtering speech title
              (ele.title.toLowerCase().includes(inputFilter.toLowerCase()) ||
                //by filtering speaker name
                speakers[ele.speakerId].name
                  .toLowerCase()
                  .includes(inputFilter.toLowerCase()))) ||
              // keep all speeches if inputFilter is empty for SpeechList
              inputFilter === "")
        )
        .map((ele, index) => {
          const year = ele.date.split(" ")[2]; // "27 October 1964" -> "1964"
          const speakerName = speakers[ele.speakerId].name;

          return (
            <ListItem
              button
              key={"filteredListSpeech-" + index}
              onClick={() => {
                addToPlaylist({ id: ele.id });
              }}
              className="list-item"
            >
              <ListItemText
                primary={
                  <Typography>
                    {ele.title + "(" + year + ")"}
                    <br />
                    <em className="speaker">{speakerName}</em>
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => addToPlaylist({ id: ele.id, noPlay: true })} // just add to playlist, don't play
                >
                  <PlaylistAddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </List>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(ExploreFilteredList);
