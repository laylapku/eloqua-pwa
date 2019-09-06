//react
import React from "react";

//material ui
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

//components
import FilteredList from "./ExploreFilteredList";

//data
import speakers from "../data/speakers.js";

//styles
import useStyles from "../styles/customizedStyles";

const ExploreSpeakerList = props => {
  const { filter, filterSpeech } = props;
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      {filter === "" ? (
        <GridList cellHeight={150} cols={3} spacing={1}>
          {Object.values(speakers).map((ele, index) => (
            <GridListTile
              key={"speakerTile-" + index}
              onClick={() => filterSpeech(ele.id)}
            >
              <img src={ele.img} alt={ele.name} />
              <GridListTileBar title={ele.name} />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <FilteredList speakerFilter={filter} />
      )}
    </div>
  );
};

export default ExploreSpeakerList;
