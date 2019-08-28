import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import ExploreFilteredList from "./ExploreFilteredList";

import categories from "../data/categories.js";

const styles = {
  icon: {
    margin: 10,
    width: 80,
    height: 80
  },
  typo: {
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-around"
  }
};

const ExploreCategoryList = props => {
  /* state = {
    filter: ""
  };

  filterSpeech = filter => {
    this.setState({ filter });
  }; */

  const { classes, filter, filterSpeech } = props;

  return (
    <div className="page-container">
      {filter === "" ? (
        <Grid container justify="space-around">
          {categories.map((ele, index) => (
            <div key={"category-" + index}>
              <Avatar
                alt={ele.theme}
                src={ele.icon}
                className={classes.icon}
                onClick={() => filterSpeech(ele.id)}
              />
              <p className={classes.typo}>{ele.theme}</p>
            </div>
          ))}
        </Grid>
      ) : (
        <ExploreFilteredList categoryFilter={filter} />
      )}
    </div>
  );
};

export default withStyles(styles)(ExploreCategoryList);