//react
import React from "react";

//material ui
import { Avatar, Grid } from "@material-ui/core";

//components
import ExploreFilteredList from "./ExploreFilteredList";

//data
import categories from "../data/categories.js";

//styles
import useStyles from "../styles/customizedStyles";

const ExploreCategoryList = props => {
  const { filter, filterSpeech } = props;
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      {filter === "" ? (
        <Grid container justify="space-around">
          {categories.map((ele, index) => (
            <div key={"category-" + index}>
              <Avatar
                alt={ele.theme}
                src={ele.icon}
                onClick={() => filterSpeech(ele.id)}
                classes={{ root: classes.ctgAvatar }}
              />
              <p className={classes.ctgText}>{ele.theme}</p>
            </div>
          ))}
        </Grid>
      ) : (
        <ExploreFilteredList categoryFilter={filter} />
      )}
    </div>
  );
};

export default ExploreCategoryList;
