//react
import React, { Fragment, useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/player/player.context";

//material ui
import { Container, Typography, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

//components
import PlayerControls from "./PlayerControls";

//data
/* import speeches from "../data/speeches";
import speakers from "../data/speakers";
import scripts from "../data/scripts"; */
import { SpeakersContext } from "../contexts/speakers.context";
import { SpeechesContext } from "../contexts/speeches.context";

//styles
import useStyles from "../styles/customizedStyles";

const ScriptTabView = props => {
  const { player } = useContext(PlayerContext);
  const { playlist, index } = player;
  const { speakers } = useContext(SpeakersContext);
  const { speeches } = useContext(SpeechesContext);

  const speechOn = speeches && speeches[playlist[index]];
  const speakerName = speakers && speakers[speechOn.speakerId].name;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = speechOn && speechOn.date.toLocaleDateString("en-US", options);
  //const scriptShown = scripts.find(ele => ele.speechId === playlist[index]);

  const classes = useStyles();

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
            <strong>{speechOn && speechOn.title}</strong>
          </Typography>
          <Typography className="speaker-name">
            <em>{speakerName}</em>
          </Typography>
          <Typography>{date}</Typography>
        </div>
        {/* <Typography className={classes.scriptContainer}>
          {scriptShown.text}
        </Typography> */}
      </Container>

      <PlayerControls />
    </Fragment>
  );
};

export default withRouter(ScriptTabView);
