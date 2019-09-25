//react
import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/player/player.context";
import {
  /* playPause,
  onNext,
  onPrev,
  updatePlayed, */
  updateUrl
} from "../contexts/player/player.actions";

//data
/*import speeches from "../data/speeches";
import speakers from "../data/speakers"; */
import { SpeechesContext } from "../contexts/speeches.context";

//material ui
import { ThemeProvider } from "@material-ui/styles";

//theme
import defaultColorTheme from "../styles/defaultColorTheme";

//components
import Routes from "./Routes";
import withContexts from "./with-contexts.hoc";

// const MediaMetadata = window.MediaMetadata;

const App = () => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playlist, index } = player;
  const { speeches } = useContext(SpeechesContext);

  useEffect(() => {
    const url = speeches && speeches[playlist[index]].url;
    dispatch(updateUrl(url));
  }, [speeches, dispatch, playlist, index]);

  /* 
  //update media session info
  const updateMetadata = () => {
    let speech = speeches.find(ele => ele.id === playlist[index]);
    let speaker = speakers[speech.speakerId].name;
    let avatar = speakers[speech.speakerId].img;
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: speech.title,
        artist: speaker,
        artwork: [
          { src: avatar, sizes: "96x96", type: "image/png" },
          { src: avatar, sizes: "128x128", type: "image/png" },
          { src: avatar, sizes: "192x192", type: "image/png" },
          { src: avatar, sizes: "256x256", type: "image/png" },
          { src: avatar, sizes: "384x384", type: "image/png" },
          { src: avatar, sizes: "512x512", type: "image/png" }
        ]
      });
    }
  };
  //seek methods for media session
  const seekBackward = () => {
    let skipTime = 0.05;
    let newPlayed = Math.max(played - skipTime, 0);
    dispatch(updatePlayed(newPlayed));
    playerRef.current.seekTo(newPlayed);
  };
  const seekForward = () => {
    let skipTime = 0.05;
    let newPlayed = Math.min(played + skipTime, duration);
    dispatch(updatePlayed(newPlayed));
    playerRef.current.seekTo(newPlayed);
  };

  if ("mediaSession" in navigator) {
    updateMetadata();
    navigator.mediaSession.setActionHandler("play", () => {
      dispatch(playPause());
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      dispatch(playPause());
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      dispatch(onPrev());
      updateMetadata();
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      dispatch(onNext());
      updateMetadata();
    });
    navigator.mediaSession.setActionHandler("seekbackward", () => {
      seekBackward();
    });
    navigator.mediaSession.setActionHandler("seekforward", () => {
      seekForward();
    });
  } */

  return (
    <ThemeProvider theme={defaultColorTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default withContexts(App);
