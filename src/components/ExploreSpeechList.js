//react
import React from "react";

//material ui
import { Input, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

//components
import ExploreFilteredList from "./ExploreFilteredList";

//styles
import useStyles from "../styles/customizedStyles";

const ExploreSpeechList = props => {
  const { filter, onSearchInputChange } = props;
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      <div className={classes.searchInputArea}>
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
