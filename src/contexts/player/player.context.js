import React, {
  createContext,
  useReducer,
  useEffect,
  useRef,
  useContext
} from "react";
import { playerReducer } from "./player.reducer";
import { onDuration, updatePlayed, updateUrl, onNext } from "./player.actions";

import ReactPlayer from "react-player";

import { FirebaseContext } from "../data/firebase.context";

export const PlayerContext = createContext();

const initState = {
  playing: false,
  played: 0,
  duration: 0,
  loop: false,
  playbackRate: 1.0,
  seeking: false,
  url: null,
  playlist: ["1"],
  index: 0,
  favlist: []
};

const PlayerContextProvider = props => {
  const [player, dispatch] = useReducer(playerReducer, [], () => {
    const localData = localStorage.getItem("player");
    return localData ? JSON.parse(localData) : initState;
  });

  const { speeches } = useContext(FirebaseContext);
  //speeches && console.log(speeches);

  const {
    playing,
    played,
    loop,
    playbackRate,
    seeking,
    url,
    playlist,
    index
  } = player;

  useEffect(() => {
    localStorage.setItem("player", JSON.stringify(player));
  }, [player]);

  /*  useEffect(() => {
    speeches &&
      dispatch(updateUrl(speeches.find(ele => ele.id === playlist[index]).url));
  }, [speeches, index, playlist]); */

  // workaround for react-player onProgress compatible issue with react hooks
  const seekingRef = useRef(null);
  useEffect(() => {
    seekingRef.current = seeking;
  }, [seeking]);
  // check out this react-player issue: https://github.com/CookPete/react-player/issues/511
  // and more importantly this react issue: https://github.com/facebook/react/issues/14031
  // also react documentation: https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback

  const playerRef = useRef(null);
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
