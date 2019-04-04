import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import SortIcon from "@material-ui/icons/Sort";
import speeches from "../../data/speeches";
import speakers from "../../data/speakers";
import { onSelectSpeech } from "../../actions.js";

const mapDispatchToProps = dispatch => {
  return {
    onSelectSpeech: index => dispatch(onSelectSpeech(index))
  };
};

const styles = theme => ({
  root: {
    width: "100%"
  }
});

const SpeechList = props => {
  const { classes, filter, onSelectSpeech } = props;
  console.log(filter);

  return (
    <List className={classes.root}>
      <IconButton>
        <SortIcon />
      </IconButton>
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
              index={index}
              button
              onClick={() => onSelectSpeech(index)}
            >
              <ListItemText
                primary={speaker + " - " + item.title + "(" + year + ")"}
              />
            </ListItem>
          );
        })}
    </List>
  );
};

SpeechList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(SpeechList)
);
