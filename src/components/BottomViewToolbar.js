//react
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../contexts/player/player.context";
import { playPause, onNext } from "../contexts/player/player.actions";

//data
import { SpeakersContext } from "../contexts/speakers.context";
import { SpeechesContext } from "../contexts/speeches.context";

//material ui
import { Slider, Toolbar, IconButton } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";

//styles
import useStyles from "../styles/customizedStyles";

const BottomViewToolbar = () => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, played, playlist, index } = player;
  const { speakers } = useContext(SpeakersContext);
  const { speeches } = useContext(SpeechesContext);

  const speechOn = speeches && speeches[playlist[index]];
  const speakerName = speakers && speakers[speechOn.speakerId].name;

  const titleMarquee = () => {
    const titleLength = speechOn && speechOn.title.split("").length;
    return titleLength > 27 ? "marquee" : null;
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Slider
        value={played * 100}
        max={100}
        classes={{ thumb: classes.sliderThumb }}
      />
      <Toolbar classes={{ gutters: classes.tbarGutters }}>
        <Link to="/script">
          {
            <div className={titleMarquee()}>
              <span>{speechOn && speechOn.title}</span>
              <br />
              <em className="speaker-name">{speakerName}</em>
            </div>
          }
        </Link>
        <IconButton component={Link} to="/playlist">
          <ListIcon classes={{ root: classes.bottomIcons }} />
        </IconButton>
        <IconButton onClick={() => dispatch(playPause())}>
          {playing ? (
            <PauseCircleFilledIcon classes={{ root: classes.bottomIcons }} />
          ) : (
            <PlayCircleFilledIcon classes={{ root: classes.bottomIcons }} />
          )}
        </IconButton>
        <IconButton onClick={() => dispatch(onNext())}>
          <SkipNextIcon classes={{ root: classes.bottomIcons }} />
        </IconButton>
      </Toolbar>
    </Fragment>
  );
};

export default BottomViewToolbar;
