//react
import React, { Fragment, useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";

//material ui
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

//components
import PlayerControls from "./Player/PlayerControls.js";

//data
import speeches from "../data/speeches";
import speakers from "../data/speakers";
import texts from "../data/texts";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "inherit"
      },
      elevation2: {
        boxShadow: "none"
      }
    },
    MuiTypography: {
      root: {
        textAlign: "center"
      }
    },
    MuiIconButton: {
      root: {
        padding: 0
      }
    },
    typography: {
      useNextVariants: true
    }
  }
});

const styles = {
  textContainer: {
    overflow: "auto",
    position: "absolute",
    top: "115px",
    bottom: "135px",
    lineHeight: "2em",
    padding: "0 20px",
    textAlign: "justify",
    opacity: 0.7
  }
};

const Text = props => {
  const { player } = useContext(PlayerContext);
  const { playlist, index } = player;

  const { classes, onSeekStart, onSeekEnd, onSliderClick, played } = props;

  const speechPlaying = speeches.find(ele => ele.id === playlist[index]);
  const textShown = texts.find(ele => ele.speechId === playlist[index]);
  const speakerName = speakers[speechPlaying.speakerId].name;

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <Paper>
          <IconButton onClick={props.history.goBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography>
            <strong>{speechPlaying.title}</strong>
          </Typography>
          <Typography className="speaker">
            <em>{speakerName}</em>{" "}
          </Typography>
          <Typography>{speechPlaying.date} </Typography>
          <Typography className={classes.textContainer}>
            {textShown.text}
          </Typography>
        </Paper>
      </MuiThemeProvider>

      <PlayerControls
        played={played}
        onSeekStart={onSeekStart}
        onSeekEnd={onSeekEnd}
        onSliderClick={onSliderClick}
      />
    </Fragment>
  );
};

export default withStyles(styles)(withRouter(Text));
