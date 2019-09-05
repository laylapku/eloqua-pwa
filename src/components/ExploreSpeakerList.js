//react
import React from "react";

//material ui
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { withStyles } from "@material-ui/core/styles";

//components
import FilteredList from "./ExploreFilteredList";

//data
import speakers from "../data/speakers.js";

const styles = () => ({
  gridList: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden"
  },
  title: {
    fontSize: "0.8rem",
    lineHeight: "20px",
    whiteSpace: "normal"
  }
});

const ExploreSpeakerList = props => {
  const { classes, filter, filterSpeech } = props;

  return (
    <div className="page-container">
      {filter === "" ? (
        <GridList
          cellHeight={150}
          cols={3}
          spacing={1}
          className={classes.gridList}
        >
          {Object.values(speakers).map((ele, index) => (
            <GridListTile
              key={"speakerTile-" + index}
              onClick={() => filterSpeech(ele.id)}
            >
              <img src={ele.img} alt={ele.name} />
              <GridListTileBar
                title={ele.name}
                classes={{ title: classes.title }}
              />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <FilteredList speakerFilter={filter} />
      )}
    </div>
  );
};

export default withStyles(styles)(ExploreSpeakerList);
