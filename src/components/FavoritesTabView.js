//react
import React, { Fragment, useContext } from "react";
import { PlayerContext } from "../contexts/player/player.context";

// data
import { SpeakersContext } from "../contexts/speakers.context";
import { SpeechesContext } from "../contexts/speeches.context";

//components
import TemplateTopbar from "./TemplateTopbar";
import SpeechListItem from "./SpeechListItem.js";

//styles
import useStyles from "../styles/customizedStyles";

const FavoritesTabView = () => {
  const { player } = useContext(PlayerContext);
  const { favlist } = player;
  const { speeches } = useContext(SpeechesContext);
  const { speakers } = useContext(SpeakersContext);
  const classes = useStyles();

  return (
    <Fragment>
      <TemplateTopbar />
      <div className={classes.listContainer}>
        {favlist.length < 1 ? (
          <h3 className={classes.favReminder}>Add the first speech!</h3>
        ) : (
          speeches &&
          speakers &&
          favlist.map(id => {
            const speech = speeches[id];
            const speakerName = speakers[speech.speakerId].name;
            return (
              <SpeechListItem
                key={id}
                speech={speech}
                speakerName={speakerName}
              />
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default FavoritesTabView;
