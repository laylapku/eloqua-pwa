import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
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

const styles = theme => ({
  root: {
    marginBottom: "100px"
  },
  line: {
    height: 0,
    width: "100%",
    border: "1px groove RGB(202,187,143,0.2)"
  }
});

const FilteredList = props => {
  const {
    classes,
    speakerFilter,
    categoryFilter,
    inputFilter,
    addToPlaylist,
    setIndexOnClick
  } = props;

  return (
    <div className={classes.root}>
      {speeches
        .filter(
          item =>
            item.speakerId === speakerFilter || //by speaker
            item.category.includes(categoryFilter) || //by category
            item.title.toLowerCase().includes(inputFilter) || //by search of speech title
            speakers[item.speakerId].name.toLowerCase().includes(inputFilter) //by search of speaker name, better solution??
        )
        .map((item, index) => {
          const year = item.date.split(" ")[2];
          const speaker = speakers[item.speakerId].name;

          return (
            <List>
              <ListItem
                key={index}
                button
                onClick={() => setIndexOnClick(item.id)}
              >
                <ListItemText
                  primary={speaker + " - " + item.title + "(" + year + ")"}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => addToPlaylist(item.id)}>
                    <PlaylistAddIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <div className={classes.line} />
            </List>
          );
        })}
    </div>
  );
};

FilteredList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(FilteredList)
);
