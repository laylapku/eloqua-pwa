// react
import React, { Fragment, useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/player/player.context";
import { SpeakersContext } from "../contexts/speakers.context";
import { SpeechesContext } from "../contexts/speeches.context";

// firebase
import { firestore } from "../utils/firebase.utils";

// material ui
import {
  Container,
  Typography,
  IconButton,
  CircularProgress
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// components
import PlayerControls from "./PlayerControls";

// styles
import useStyles from "../styles/customizedStyles";

const ScriptTabView = props => {
  const { player } = useContext(PlayerContext);
  const { playlist, index } = player;
  const { speakers } = useContext(SpeakersContext);
  const { speeches } = useContext(SpeechesContext);
  const [script, setScript] = useState();

  const speechOn = speeches && speeches[playlist[index]];
  const speakerName = speakers && speakers[speechOn.speakerId].name;
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = speechOn && speechOn.date.toLocaleDateString("en-US", options);

  useEffect(() => {
    (async () => {
      const snapshot =
        speechOn &&
        (await firestore
          .collection("speeches")
          .doc(speechOn.id)
          .collection("extra")
          .get());
      snapshot &&
        snapshot.forEach(doc => {
          setScript(doc.data().script);
        });
    })();
  }, [speechOn]);

  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <IconButton onClick={props.history.goBack} className={classes.backBtn}>
          <ChevronLeftIcon />
        </IconButton>
        <div className={classes.scriptHeader}>
          <Typography>
            <strong>{speechOn && speechOn.title}</strong>
          </Typography>
          <Typography className={classes.speakerName}>
            <em>{speakerName}</em>
          </Typography>
          <Typography>{date}</Typography>
        </div>
        {script ? (
          <Typography className={classes.scriptContainer}>{script}</Typography>
        ) : (
          <CircularProgress />
        )}
      </Container>

      <PlayerControls speechOn={speechOn} />
    </Fragment>
  );
};

export default withRouter(ScriptTabView);
