import React, { Component } from "react";
import { connect } from "react-redux";
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
import { addToPlaylist } from "../../redux/actions.js";

const mapDispatchToProps = dispatch => {
  return {
    addToPlaylist: payload => dispatch(addToPlaylist(payload))
  };
};

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
    const { addToPlaylist } = this.props;

    return (
      <div className="page-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            placeholder="Find by speaker/speech"
            inputProps={{
              "aria-label": "Description"
            }}
            onChange={this.handleInputChange}
          />
          <IconButton onClick={() => this.filterSpeech(this.state.filter)}>
            <SearchIcon />
          </IconButton>
        </div>

        <List>
          {this.state.filter === "" ? (
            speeches.map((ele, index) => {
              const year = ele.date.split(" ")[2];
              const speaker = speakers[ele.speakerId].name;
              return (
                <ListItem
                  button
                  key={index}
                  onClick={() => addToPlaylist({ id: ele.id })}
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
                    <IconButton
                      onClick={() => addToPlaylist({ id: ele.id, bool: true })}
                    >
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

export default connect(
  null,
  mapDispatchToProps
)(SpeechList);
