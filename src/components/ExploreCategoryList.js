//react
import React, { useContext } from "react";

//data
import { CategoriesContext } from "../contexts/categories.context";

//material ui
import { Avatar, Grid, CircularProgress } from "@material-ui/core";

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
            {Object.values(categories).map(category => (
              <div key={category.id}>
                <Avatar
                  alt={category.name}
                  src={category.icon}
                  onClick={() => filterSpeech(category.id)}
                  classes={{ root: classes.ctgAvatar }}
                />
                <p className={classes.ctgText}>{category.name}</p>
              </div>
            ))}
          </Grid>
        ) : (
          <CircularProgress />
        )
      ) : (
        <ExploreFilteredList categoryFilter={filter} />
      )}
    </div>
  );
};

export default ExploreCategoryList;
