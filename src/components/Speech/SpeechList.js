import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import speechData from "./speechData";
import { onSelectSpeech } from "../../actions.js";

const mapDispatchToProps = dispatch => {
  return {
    onSelectSpeech: (index) => dispatch(onSelectSpeech(index))
  };
};

const styles = theme => ({
  root: {
    width: "100%"
  }
});

const SpeechList = props => {
  const { classes, onSelectSpeech } = props;
  return (
    <List className={classes.root}>
      {speechData.map((item, index) => (
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

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(SpeechList)
);
