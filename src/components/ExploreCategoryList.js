//react
import React, { useContext } from "react";

//data
import { FirebaseContext } from "../contexts/data/firebase.context";

//material ui
import { Avatar, Grid } from "@material-ui/core";

//components
import ExploreFilteredList from "./ExploreFilteredList";

//styles
import useStyles from "../styles/customizedStyles";

const ExploreCategoryList = ({ filter, filterSpeech }) => {
  const { categories } = useContext(FirebaseContext);
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      {filter === "" ? (
        <Grid container justify="space-around">
          {categories.map((ele, index) => (
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
        <ExploreFilteredList categoryFilter={filter} />
      )}
    </div>
  );
};

export default ExploreCategoryList;
