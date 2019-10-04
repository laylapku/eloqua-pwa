// react
import React, { useContext, useEffect } from "react";
import { PlayerContext } from "./contexts/player/player.context";
import {
  playPause,
  onNext,
  onPrev,
  updatePlayed,
  updateUrl
} from "./contexts/player/player.actions";
import { SpeechesContext } from "./contexts/speeches.context";
import { SpeakersContext } from "./contexts/speakers.context";

// firebase
import { getAudioRefFromStorage } from "./utils/firebase.utils";

// material ui
import { ThemeProvider } from "@material-ui/styles";

// theme
import defaultColorTheme from "./styles/defaultColorTheme";

// components
import Routes from "./components/Routes";
import withContexts from "./components/with-contexts.hoc";

const MediaMetadata = window.MediaMetadata;

const App = () => {
  const { player, playerRef, dispatch } = useContext(PlayerContext);
  const { playlist, index, played, duration } = player;
  const { speeches } = useContext(SpeechesContext);
  const { speakers } = useContext(SpeakersContext);

  useEffect(() => {
    (async () => {
      const audioFileName = speeches && speeches[playlist[index]].audioFileName;
      const url =
        audioFileName && (await getAudioRefFromStorage(audioFileName));
      dispatch(updateUrl(url));
    })();
  }, [speeches, dispatch, playlist, index]);

  // update media session info
  const updateMetadata = () => {
    if ("mediaSession" in navigator && speeches && speakers) {
      let speech = speeches[playlist[index]];
      let speaker = speech && speakers[speech.speakerId].name;
      let avatar = speech && speakers[speech.speakerId].img;

      navigator.mediaSession.metadata = new MediaMetadata({
        title: speech && speech.title,
        artist: speaker && speaker,
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

  // seek methods for media session
  const seekBackward = () => {
    let skipTime = 0.05;
    let currPlayed = Math.max(played - skipTime, 0);
    dispatch(updatePlayed(currPlayed));
    playerRef.current.seekTo(currPlayed);
  };
  const seekForward = () => {
    let skipTime = 0.05;
    let currPlayed = Math.min(played + skipTime, duration);
    dispatch(updatePlayed(currPlayed));
    playerRef.current.seekTo(currPlayed);
  };

  // media session controls
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
  }

  return (
    <ThemeProvider theme={defaultColorTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default withContexts(App);
