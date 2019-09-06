//react
import React, { Fragment, useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

//components
import TemplateTopbar from "./TemplateTopbar";
import TemplateList from "./TemplateList.js";

//styles
import useStyles from "../styles/customizedStyles";

const PlayListTabView = () => {
  const { player } = useContext(PlayerContext);
  const { playlist } = player;
  const classes = useStyles();

  return (
    <Fragment>
      <TemplateTopbar />
      <div className={classes.listContainer}>
        {playlist.map((ele, index) => {
          return (
            <TemplateList
              key={"playListSpeech-" + index}
              id={ele}
              speechIndex={index}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default PlayListTabView;
