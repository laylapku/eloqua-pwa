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
import { addToPlaylist, setIndexOnClick } from "../../redux/actions.js";

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: id => dispatch(addToPlaylist(id)),
    setIndexOnClick: id => dispatch(setIndexOnClick(id))
  };
};

const styles = theme => ({
  root: {
    marginBottom: "100px",
    marginTop: "50px"
  },
  input: {
    margin: theme.spacing.unit,
    width: "200px"
  },
  line: {
    height: 0,
    width: "100%",
    border: "1px groove RGB(202,187,143,0.2)"
  },
  list: {
    padding: 0
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
      <div className={classes.root}>
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

        <div>
          {this.state.filter === "" ? (
            speeches.map((item, index) => {
              const year = item.date.split(" ")[2];
              const speaker = speakers[item.speakerId].name;
              return (
                <List classes={{ padding: classes.list }}>
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
            })
          ) : (
            <FilteredList inputFilter={this.state.filter} />
          )}
        </div>
      </div>
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
