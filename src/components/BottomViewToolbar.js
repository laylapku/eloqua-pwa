//react
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../contexts/player/player.context";
import { playPause, onNext } from "../contexts/player/player.actions";

//material ui
import { Slider, Toolbar, IconButton } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";

//data
import speakers from "../data/speakers";
import speeches from "../data/speeches";

//styles
import useStyles from "../styles/customizedStyles";

const BottomViewToolbar = () => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, played, playlist, index } = player;
  const classes = useStyles();

  const speechPlaying = speeches.find(ele => ele.id === playlist[index]);
  const speakerName = speakers[speechPlaying.speakerId].name;
  const titleMarquee = () => {
    const titleLength = speechPlaying.title.split("").length;
    return titleLength > 27 ? "marquee" : null;
  };

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
              <span>{speechPlaying.title}</span>
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
