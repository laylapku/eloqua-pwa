//react
import React, { Fragment, useContext } from "react";
import { PlayerContext } from "../contexts/player/player.context";

// data
import { SpeakersContext } from "../contexts/speakers.context";
import { SpeechesContext } from "../contexts/speeches.context";

//components
import TemplateTopbar from "./TemplateTopbar";
import SpeechListItem from "./SpeechListItem";

//styles
import useStyles from "../styles/customizedStyles";

const PlaylistTabView = () => {
  const { player } = useContext(PlayerContext);
  const { playlist } = player;
  const { speeches } = useContext(SpeechesContext);
  const { speakers } = useContext(SpeakersContext);
  const classes = useStyles();

  return (
    <Fragment>
      <TemplateTopbar isPlaylist />
      <div className={classes.listContainer}>
        {speeches &&
          speakers &&
          playlist.map((id, index) => {
            const speech = speeches[id];
            const speakerName = speakers[speech.speakerId].name;
            return (
              <SpeechListItem
                key={id}
                speech={speech}
                speakerName={speakerName}
                speechIndex={index}
                isPlaylist={true}
              />
            );
          })}
      </div>
    </Fragment>
  );
};

export default PlaylistTabView;
