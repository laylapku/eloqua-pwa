//react
import React, { Fragment, useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

//components
import TemplateTopbar from "./TemplateTopbar";
import TemplateList from "./TemplateList.js";

//styles
import useStyles from "../styles/customizedStyles";

const FavoritesTabView = () => {
  const { player } = useContext(PlayerContext);
  const { favlist } = player;
  const classes = useStyles();

  return (
    <Fragment>
      <TemplateTopbar />
      <div className={classes.listContainer}>
        {favlist.length < 1 ? (
          <h3 className={classes.favReminder}>Add the first speech!</h3>
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
    </Fragment>
  );
};

export default FavoritesTabView;
