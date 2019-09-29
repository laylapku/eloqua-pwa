// react
import React, { createContext, useReducer, useEffect, useRef } from "react";
import { playerReducer } from "./player.reducer";
import { onDuration, updatePlayed, onNext } from "./player.actions";

// dependencies
import ReactPlayer from "react-player";

export const PlayerContext = createContext();

const PlayerContextProvider = props => {
  const initState = {
    url: null,
    playing: false,
    played: 0,
    duration: 0,
    loop: false,
    playbackRate: 1.0,
    seeking: false,
    playlist: ["933kMAtgyr4ohgNq2eiM"],
    index: 0,
    favlist: []
  };

  const [player, dispatch] = useReducer(playerReducer, [], () => {
    const localData = localStorage.getItem("player");
    return localData ? JSON.parse(localData) : initState;
  });

  useEffect(() => {
    localStorage.setItem("player", JSON.stringify(player));
  }, [player]);

  const { url, playing, played, loop, playbackRate, seeking } = player;
  const playerRef = useRef(null);

  // workaround for react-player onProgress compatible issue with react hooks
  const seekingRef = useRef(null);
  useEffect(() => {
    seekingRef.current = seeking;
  }, [seeking]);
  // check out this react-player issue: https://github.com/CookPete/react-player/issues/511
  // and more importantly this react issue: https://github.com/facebook/react/issues/14031
  // also react documentation: https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback

  return (
    <PlayerContext.Provider value={{ player, playerRef, dispatch }}>
      <ReactPlayer
        ref={playerRef} // for seekTo method
        height="0px" // required
        url={url}
        playing={playing}
        played={played}
        loop={loop}
        playbackRate={playbackRate}
        onEnded={() => dispatch(onNext())}
        onDuration={payload => dispatch(onDuration(payload))} // updates audio duration
        onProgress={status =>
          !seekingRef.current && dispatch(updatePlayed(status.played))
        } // update ui values with values from player
      />
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
