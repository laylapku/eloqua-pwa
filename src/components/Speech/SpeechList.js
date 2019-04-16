import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import FilteredList from "./FilteredList";
import speeches from "../../data/speeches";
import speakers from "../../data/speakers";
import { addToPlaylist, setIndexOnClick } from "../../actions.js";

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: id => dispatch(addToPlaylist(id)),
    setIndexOnClick: id => dispatch(setIndexOnClick(id))
  };
};

const styles = theme => ({
  root: {
    width: "100%"
  },
  input: {
    margin: theme.spacing.unit
  }
});

class SpeechList extends Component {
  state = {
    filter: ""
  };

  filterSpeech = value => {
    this.setState({ filter: value });
  };

  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { classes, addToPlaylist, setIndexOnClick } = this.props;

    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            className={classes.input}
            placeholder="Search for speaker/speech"
            inputProps={{
              "aria-label": "Description"
            }}
            onChange={this.handleInputChange}
          />
          <IconButton onClick={() => this.filterSpeech(this.state.filter)}>
            <SearchIcon />
          </IconButton>
        </div>
        <List className={classes.root}>
          {this.state.filter === "" ? (
            speeches.map((item, index) => {
              const year = item.date.split(" ")[2];
              const speaker = speakers[item.speakerId].name;
              return (
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
              );
            })
          ) : (
            <FilteredList filter={this.state.filter} />
          )}
        </List>
      </React.Fragment>
    );
  }
}

SpeechList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(SpeechList)
);
