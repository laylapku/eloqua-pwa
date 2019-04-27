import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import speeches from "../../data/speeches";
import speakers from "../../data/speakers";
import { addToPlaylist } from "../../redux/actions.js";

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: payload => dispatch(addToPlaylist(payload))
  };
};

const FilteredList = props => {
  const { speakerFilter, categoryFilter, inputFilter, addToPlaylist } = props;

  return (
    <List>
      {speeches
        .filter(
          ele =>
            ele.speakerId === speakerFilter || //by speaker
            ele.category.includes(categoryFilter) || //by category
            (inputFilter &&
              ele.title.toLowerCase().includes(inputFilter.toLowerCase())) || //by search of speech title
            (inputFilter &&
              speakers[ele.speakerId].name
                .toLowerCase()
                .includes(inputFilter.toLowerCase())) //by search of speaker, better solution??
        )
        .map((ele, index) => {
          const year = ele.date.split(" ")[2];
          const speaker = speakers[ele.speakerId].name;

          return (
            <ListItem
              button
              key={index}
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
                    <em className="speaker">{speaker}</em>
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => addToPlaylist({ id: ele.id, bool: true })}
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
)(FilteredList);
