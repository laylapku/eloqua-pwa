import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import speechData from "./speechData";

const styles = theme => ({
  listcontainer: {
    width: "100%"
  }
});

const SpeechList = props => {
  const { classes, onSelectSpeech } = props;
  return (
    <List className={classes.listcontainer}>
      {speechData.map((item, index, arr) => (
        <ListItem
          key={index}
          index={index}
          button
          onClick={() => onSelectSpeech(index)}
        >
          <ListItemText primary={item.speaker + " - " + item.title} />
        </ListItem>
      ))}
    </List>
  );
};

SpeechList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeechList);
