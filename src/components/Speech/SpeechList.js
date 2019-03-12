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
    <div>
      <List className={classes.listcontainer}>
        {speechData.map((item, index) => (
          <ListItem
            key={index}
            button
            onClick={() => onSelectSpeech(item.url, item.speaker, item.title)}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

SpeechList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeechList);
