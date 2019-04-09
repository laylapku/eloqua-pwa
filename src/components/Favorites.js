import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BottomBar from "./BottomBar.js";
import speeches from "../data/speeches";
import speakers from "../data/speakers";
import { toggleAddToFavlist } from "../actions.js";

const mapStateToProps = state => {
  return { favlist: state.favlist };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id))
  };
};

const styles = theme => ({
  root: {
    width: "100%"
  }
});

const Favorites = props => {
  const { classes, favlist, toggleAddToFavlist } = props;

  return (
    <React.Fragment>
      <List className={classes.root}>
        {favlist.map((item, index) => {
          const speech = speeches.find(ele => ele.id === item);
          const speaker = speakers[speech.speakerId].name;
          const year = speech.date.split(" ")[2];

          return (
            <ListItem key={index} button>
              <IconButton onClick={() => toggleAddToFavlist(item)}>
                <FavoriteIcon />
              </IconButton>
              <ListItemText
                primary={speaker + " - " + speech.title + "(" + year + ")"}
              />
            </ListItem>
          );
        })}
      </List>
      <BottomBar />
    </React.Fragment>
  );
};

Favorites.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorites)
);
