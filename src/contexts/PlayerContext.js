import React, { createContext, useReducer, useEffect } from "react";
import { playerReducer } from "../reducers/playerReducer";

export const PlayerContext = createContext();

const initState = {
  playing: false,
  played: 0,
  duration: 0,
  loop: false,
  playbackRate: 1.0,
  playlist: ["1"],
  index: 0,
  favlist: []
};

const PlayerContextProvider = props => {
  const [player, dispatch] = useReducer(playerReducer, [], () => {
    const localData = localStorage.getItem("player");
    return localData ? JSON.parse(localData) : initState;
  });
  useEffect(() => {
    localStorage.setItem("player", JSON.stringify(player));
  }, [player]);
  return (
    <PlayerContext.Provider value={{ player, dispatch }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
