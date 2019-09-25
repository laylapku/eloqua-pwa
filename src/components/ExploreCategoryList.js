//react
import React, { useContext } from "react";

//data
import { CategoriesContext } from "../contexts/categories.context";

//material ui
import { Avatar, Grid } from "@material-ui/core";

//components
import ExploreFilteredList from "./ExploreFilteredList";

//styles
import useStyles from "../styles/customizedStyles";

const ExploreCategoryList = ({ filter, filterSpeech }) => {
  const { categories } = useContext(CategoriesContext);
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      {filter === "" ? (
        categories ? (
          <Grid container justify="space-around">
            {Object.values(categories).map((ele, index) => (
              <div key={"category-" + index}>
                <Avatar
                  alt={ele.name}
                  src={ele.icon}
                  onClick={() => filterSpeech(ele.id)}
                  classes={{ root: classes.ctgAvatar }}
                />
                <p className={classes.ctgText}>{ele.name}</p>
              </div>
            ))}
          </Grid>
        ) : (
          "Loading..."
        )
      ) : (
        <ExploreFilteredList categoryFilter={filter} />
      )}
    </div>
  );
};

export default ExploreCategoryList;
