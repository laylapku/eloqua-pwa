// react
import React, { useContext } from "react";
import { CategoriesContext } from "../contexts/categories.context";

// material ui
import { Avatar, Grid, Typography, CircularProgress } from "@material-ui/core";

// components
import ExploreFilteredList from "./ExploreFilteredList";

// styles
import useStyles from "../styles/customizedStyles";

const ExploreCategoryList = ({ filter, filterSpeech }) => {
  const { categories } = useContext(CategoriesContext);
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      {filter === "" ? (
        categories ? (
          <Grid container>
            {Object.values(categories).map(category => (
              <Grid item xs={4} key={category.id}>
                <Avatar
                  alt={category.name}
                  src={category.icon}
                  onClick={() => filterSpeech(category.id)}
                  className={classes.ctgAvatar}
                />
                <Typography className={classes.ctgName}>
                  {category.name}
                </Typography>
              </Grid>
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
