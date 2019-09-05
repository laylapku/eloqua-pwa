//react
import React from "react";

//material ui
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

//components
import ExploreFilteredList from "./ExploreFilteredList";

const ExploreSpeechList = props => {
  const { filter, onSearchInputChange } = props;
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
          onChange={onSearchInputChange}
        />
      </div>

      <ExploreFilteredList inputFilter={filter} />
    </div>
  );
};

export default ExploreSpeechList;
