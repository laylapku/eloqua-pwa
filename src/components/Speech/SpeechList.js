import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import queryString from "query-string";
import speechData from "./speechData";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const SpeechList = (props) => {
  const { classes } = props;
  const params = queryString.parse(props.location.search);

  return (
    <div className={classes.root}>
      {speechData.map(
        (item, index) =>
          item.speakerId === params.id && (
            <Link to={"/speechplayer?id=" + item.id} key={index}>
              <ListItem button>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          )
      )}
    </div>
  );
}; 

SpeechList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeechList);
