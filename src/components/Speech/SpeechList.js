import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
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
  input: {
    margin: theme.spacing.unit,
    width: "75%",
    marginLeft: "20px"
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
      <div className="page-container">
        <Input
          className={classes.input}
          placeholder="Search for speaker or speech"
          inputProps={{
            "aria-label": "Description"
          }}
          onChange={this.handleInputChange}
        />
        <IconButton onClick={() => this.filterSpeech(this.state.filter)}>
          <SearchIcon />
        </IconButton>

        <List>
          {this.state.filter === "" ? (
            speeches.map((ele, index) => {
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
            })
          ) : (
            <FilteredList inputFilter={this.state.filter} />
          )}
        </List>
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
