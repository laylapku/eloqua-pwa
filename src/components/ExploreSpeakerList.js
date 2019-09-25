//react
import React, { useContext } from "react";

//data
import { SpeakersContext } from "../contexts/speakers.context";

//material ui
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

//components
import FilteredList from "./ExploreFilteredList";

//styles
import useStyles from "../styles/customizedStyles";

const ExploreSpeakerList = ({ filter, filterSpeech }) => {
  const { speakers } = useContext(SpeakersContext);
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      {filter === "" ? (
        speakers ? (
          <GridList cellHeight={150} cols={3} spacing={1}>
            {Object.values(speakers).map((ele, index) => (
              <GridListTile
                key={"speakerTile-" + index}
                onClick={() => filterSpeech(ele.id)}
              >
                <img src={ele.img} alt={ele.name} />
                <GridListTileBar
                  title={ele.name}
                  classes={{ title: classes.tileBarName }}
                />
              </GridListTile>
            ))}
          </GridList>
        ) : (
          "Loading..."
        )
      ) : (
        <FilteredList speakerFilter={filter} />
      )}
    </div>
  );
};

export default ExploreSpeakerList;
