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
import { addToPlaylist, setIndexOnClick } from "../../redux/actions.js";

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: id => dispatch(addToPlaylist(id)),
    setIndexOnClick: id => dispatch(setIndexOnClick(id))
  };
};

const FilteredList = props => {
  const {
    speakerFilter,
    categoryFilter,
    inputFilter,
    addToPlaylist,
    setIndexOnClick
  } = props;

  return (
    <List>
      {speeches
        .filter(
          ele =>
            ele.speakerId === speakerFilter || //by speaker
            ele.category.includes(categoryFilter) || //by category
            ele.title.toLowerCase().includes(inputFilter) || //by search of speech title
            speakers[ele.speakerId].name.toLowerCase().includes(inputFilter) //by search of speaker name, better solution??
        )
        .map((ele, index) => {
          const year = ele.date.split(" ")[2];
          const speaker = speakers[ele.speakerId].name;

          return (
            <ListItem
              button
              key={index}
              onClick={() => setIndexOnClick(ele.id)}
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
                <IconButton onClick={() => addToPlaylist(ele.id)}>
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
