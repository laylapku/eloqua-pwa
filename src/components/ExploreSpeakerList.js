import React, { Component } from "react";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { withStyles } from "@material-ui/core/styles";

import FilteredList from "./ExploreFilteredList";

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

class ExploreSpeakerList extends Component {
  state = {
    filter: ""
  };

  filterSpeech = filter => {
    this.setState({ filter });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="page-container">
        {this.state.filter === "" ? (
          <GridList
            cellHeight={150}
            cols={3}
            spacing={1}
            className={classes.gridList}
          >
            {Object.values(speakers).map((ele, index) => (
              <GridListTile
                key={"speakerTile-" + index}
                onClick={() => this.filterSpeech(ele.id)}
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
          <FilteredList speakerFilter={this.state.filter} />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ExploreSpeakerList);
