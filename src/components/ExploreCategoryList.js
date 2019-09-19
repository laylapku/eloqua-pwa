//react
import React, { useState, useEffect } from "react";

//database
import { firestore } from "../utils/firebase.utils";

//material ui
import { Avatar, Grid } from "@material-ui/core";

//components
import ExploreFilteredList from "./ExploreFilteredList";

//styles
import useStyles from "../styles/customizedStyles";

const ExploreCategoryList = ({ filter, filterSpeech }) => {
  const classes = useStyles();
  const [ctgs, setCtgs] = useState([]);
  useEffect(() => {
    // anonymous function used as closure
    (async () => {
      const querySnapshot = await firestore.collection("categories").get();
      setCtgs(
        querySnapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data()))
      );
    })();
  }, []);

  return (
    <div className={classes.listContainer}>
      {filter === "" ? (
        <Grid container justify="space-around">
          {ctgs.map((ele, index) => (
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
