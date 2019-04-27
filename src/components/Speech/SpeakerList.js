import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import FilteredList from "./FilteredList";
import speakers from "../../data/speakers.js";

const styles = theme => ({
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

class SpeakerList extends Component {
  state = {
    filter: ""
  };

  filterSpeech = value => {
    this.setState({ filter: value });
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
                key={index}
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

SpeakerList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeakerList);
