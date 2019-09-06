//react
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import { PLAY_PAUSE, ON_NEXT } from "../reducers/constants";

//material ui
import { Slider, Toolbar, IconButton } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";

//data
import speakers from "../data/speakers";
import speeches from "../data/speeches";

const BottomViewToolbar = () => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, played, playlist, index } = player;

  const speechPlaying = speeches.find(ele => ele.id === playlist[index]);
  const speakerName = speakers[speechPlaying.speakerId].name;
  const titleMarquee = () => {
    const titleLength = speechPlaying.title.split("").length;
    return titleLength > 27 ? "marquee" : null;
  };

  return (
    <Fragment>
      <Slider value={played * 100} max={100} />
      <Toolbar>
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
          <ListIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            dispatch({ type: PLAY_PAUSE });
          }}
        >
          {playing ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
        </IconButton>
        <IconButton onClick={() => dispatch({ type: ON_NEXT })}>
          <SkipNextIcon />
        </IconButton>
      </Toolbar>
    </Fragment>
  );
};

export default BottomViewToolbar;
