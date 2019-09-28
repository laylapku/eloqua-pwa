//react
import React, { Fragment, useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/player/player.context";

// firebase
import { firestore } from "../utils/firebase.utils";

//material ui
import {
  Container,
  Typography,
  IconButton,
  CircularProgress
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

//components
import PlayerControls from "./PlayerControls";

//data
import { SpeakersContext } from "../contexts/speakers.context";
import { SpeechesContext } from "../contexts/speeches.context";

//styles
import useStyles from "../styles/customizedStyles";

const ScriptTabView = props => {
  const { player } = useContext(PlayerContext);
  const { playlist, index } = player;
  const { speakers } = useContext(SpeakersContext);
  const { speeches } = useContext(SpeechesContext);
  const [script, setScript] = useState();

  const speechOn = speeches && speeches[playlist[index]];
  const speakerName = speakers && speakers[speechOn.speakerId].name;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = speechOn && speechOn.date.toLocaleDateString("en-US", options);

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await firestore
          .collection("speeches")
          .doc(speechOn.id)
          .collection("extra")
          .get();
        querySnapshot.forEach(doc => {
          setScript(doc.data().script);
        });
      } catch (error) {
        return error;
      }
    })();
  }, [speechOn]);

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
