import React, { Component } from "react";

import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";

import FilteredList from "./FilteredList";

class SpeechList extends Component {
  state = {
    filter: ""
  };

  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div className="page-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Input
            placeholder="Find by speaker/speech"
            inputProps={{
              "aria-label": "Description"
            }}
            onChange={this.handleInputChange}
          />
        </div>

        <FilteredList inputFilter={this.state.filter} />
      </div>
    );
  }
}

export default SpeechList;
