//react
import React, { Fragment, useContext } from "react";
import { PlayerContext } from "../contexts/player/player.context";

//components
import TemplateTopbar from "./TemplateTopbar";
//import SpeechListItem from "./SpeechListItem.js";

//styles
import useStyles from "../styles/customizedStyles";

const PlaylistTabView = () => {
  const { player } = useContext(PlayerContext);
  const { playlist } = player;
  const classes = useStyles();

  return (
    <Fragment>
      <TemplateTopbar isPlaylist />
      <div className={classes.listContainer}>
        {playlist.map((ele, index) => {
          //console.log(ele);
          return (
            {/* <SpeechListItem
              key={"playListSpeech-" + index}
              speech={ele}
              speechIndex={index}
            /> */}
          );
        })}
      </div>
    </Fragment>
  );
};

export default PlaylistTabView;
