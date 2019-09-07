//react
import React, { Fragment, useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";

//material ui
import { Container, Typography, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

//components
import PlayerControls from "./Player/PlayerControls.js";

//data
import speeches from "../data/speeches";
import speakers from "../data/speakers";
import scripts from "../data/scripts";

//styles
import useStyles from "../styles/customizedStyles";

const ScriptTabView = props => {
  const { player } = useContext(PlayerContext);
  const { playlist, index } = player;
  const { onSeekStart, onSeekEnd, onSliderClick, played } = props;
  const classes = useStyles();

  const speechPlaying = speeches.find(ele => ele.id === playlist[index]);
  const scriptShown = scripts.find(ele => ele.speechId === playlist[index]);
  const speakerName = speakers[speechPlaying.speakerId].name;

  return (
    <Fragment>
      <Container>
        <IconButton
          onClick={props.history.goBack}
          classes={{ root: classes.backBtn }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <div className={classes.scriptHeader}>
          <Typography>
            <strong>{speechPlaying.title}</strong>
          </Typography>
          <Typography className="speaker-name">
            <em>{speakerName}</em>
          </Typography>
          <Typography>{speechPlaying.date}</Typography>
        </div>
        <Typography className={classes.scriptContainer}>
          {scriptShown.text}
        </Typography>
      </Container>

      <PlayerControls
        played={played}
        onSeekStart={onSeekStart}
        onSeekEnd={onSeekEnd}
        onSliderClick={onSliderClick}
      />
    </Fragment>
  );
};

export default withRouter(ScriptTabView);
