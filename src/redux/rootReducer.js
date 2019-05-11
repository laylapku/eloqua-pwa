import {
  PLAY_PAUSE,
  ON_DURATION,
  ON_PREV,
  ON_NEXT,
  TOGGLE_LOOP,
  TOGGLE_MUTED,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST
} from "./constants.js";

import speeches from "../data/speeches";

const initState = {
  playing: false,
  muted: false,
  duration: 0,
  loop: false,
  playlist: ["1"],
  index: 0,
  favlist: []
};

const rootReducer = (state = initState, action) => {
  let newState;
  switch (action.type) {
    // player callbacks
    case ON_DURATION:
      return {
        ...state,
        duration: action.payload
      };

    // player controls
    case PLAY_PAUSE:
      return {
        ...state,
        playing: !state.playing
      };
    case ON_PREV:
      return state.index > 0
        ? {
            ...state,
            index: state.index - 1
          }
        : {
            ...state,
            index: state.playlist.length - 1
          };
    case ON_NEXT:
      return state.index < state.playlist.length - 1
        ? {
            ...state,
            index: state.index + 1
          }
        : {
            ...state,
            index: 0
          };

    case TOGGLE_LOOP:
      return {
        ...state,
        loop: !state.loop
      };
    case TOGGLE_MUTED:
      return {
        ...state,
        muted: !state.muted
      };

    case ADD_TO_PLAYLIST:
      newState = { ...state };
      let index = state.playlist.findIndex(ele => ele === action.payload.id);
      if (index === -1) {
        // check for duplicate
        newState = {
          ...newState,
          playlist: [...state.playlist, action.payload.id]
        };
        index = state.playlist.length;
      }
      if (!action.payload.noPlay) {
        // check for add and play
        newState = {
          ...newState,
          index,
          playing: true
        };
      }
      return newState;
    case DELETE_FROM_PLAYLIST:
      newState = {
        ...state,
        playlist: state.playlist.filter(
          (ele, index) => index !== action.payload
        )
      };

      if (state.index === state.playlist.length - 1) {
        // if last one is playing, deleting it plays 2nd to last
        newState = {
          ...newState,
          index: state.playlist.length - 2 // might set index to -1 but idx would be set back to 0 in next if block
        };
      } else if (action.payload < state.index) {
        // deleting from before the playing one
        newState = {
          ...newState,
          index: state.index - 1
        };
      }

      if (newState.playlist.length === 0 || action.payload === "all") {
        // add a random speech if last one or all deleted
        newState = {
          ...newState,
          playlist: [speeches[Math.floor(Math.random() * speeches.length)].id],
          index: 0,
          playing: false
        };
      }

      return newState;

    case TOGGLE_ADD_TO_FAVLIST:
      return action.payload.every(ele => state.favlist.indexOf(ele) !== -1)
        ? {
            ...state,
            favlist: state.favlist.filter(ele => !action.payload.includes(ele))
          }
        : {
            ...state,
            favlist: [...new Set([...state.favlist, ...action.payload])]
          };

    default:
      return state;
  }
};

export default rootReducer;
