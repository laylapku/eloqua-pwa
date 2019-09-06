//react
import React, { Fragment, useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";

//material ui
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
      <Paper>
        <IconButton
          onClick={props.history.goBack}
          classes={{ root: classes.backButton }}
        >
          <ArrowBackIcon />
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
      </Paper>

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
