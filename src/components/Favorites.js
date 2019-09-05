//react
import React, { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

//material ui
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

//components
import TemplateList from "./TemplateList.js";

const styles = () => ({
  appBar: {
    background: "linear-gradient(to bottom, #ddd 0%, #EDEAE0 100%)",
    color: "inherit",
    boxShadow: "0 0 5px #d2d4dc",
    height: "48px",
    padding: "0 20px"
  },
  reminder: {
    fontSize: "20px",
    textAlign: "center",
    opacity: 0.2,
    marginTop: "80px"
  }
});

const Favorites = props => {
  const { player } = useContext(PlayerContext);
  const { favlist } = player;
  const { classes } = props;

  return (
    <div className="page-container">
      <AppBar classes={{ root: classes.appBar }}>
        <h3>My Library</h3>
      </AppBar>
      {favlist.length < 1 ? (
        <h3 className={classes.reminder}>Add the first speech!</h3>
      ) : (
        favlist.map((ele, index) => {
          return (
            <TemplateList
              key={"favListSpeech-" + index}
              id={ele}
              noPlay={true}
            />
          );
        })
      )}
    </div>
  );
};

export default withStyles(styles)(Favorites);
