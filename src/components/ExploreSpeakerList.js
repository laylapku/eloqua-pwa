// react
import React, { useContext } from "react";
import { SpeakersContext } from "../contexts/speakers.context";

// material ui
import {
  GridList,
  GridListTile,
  GridListTileBar,
  CircularProgress
} from "@material-ui/core";

// components
import FilteredList from "./ExploreFilteredList";

// styles
import useStyles from "../styles/customizedStyles";

const ExploreSpeakerList = ({ filter, filterSpeech }) => {
  const { speakers } = useContext(SpeakersContext);
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      {filter === "" ? (
        speakers ? (
          <GridList cellHeight={150} cols={3} spacing={1}>
            {Object.values(speakers).map(speaker => (
              <GridListTile
                key={speaker.id}
                onClick={() => filterSpeech(speaker.id)}
              >
                <img src={speaker.img} alt={speaker.name} />
                <GridListTileBar title={speaker.name} />
              </GridListTile>
            ))}
          </GridList>
        ) : (
          <CircularProgress />
        )
      ) : (
        <FilteredList speakerFilter={filter} />
      )}
    </div>
  );
};

export default ExploreSpeakerList;
