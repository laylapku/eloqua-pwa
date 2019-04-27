import speeches from "../data/speeches";
import {
  PLAY_PAUSE,
  ON_PLAY,
  ON_PAUSE,
  ON_DURATION,
  ON_PREV,
  ON_NEXT,
  ON_ENDED,
  TOGGLE_LOOP,
  TOGGLE_MUTED,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST
} from "./constants.js";

const initState = {
  playing: false,
  muted: false,
  volume: 0.8,
  duration: 0,
  loop: false,
  playlist: ["1"],
  index: 0,
  favlist: []
};

const handleNextEnded = state => {
  if (state.index < state.playlist.length - 1) {
    return {
      ...state,
      index: state.index + 1
    };
  } else if (state.index === state.playlist.length - 1) {
    return {
      ...state,
      index: 0
    };
  }
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case PLAY_PAUSE:
      return {
        ...state,
        playing: !state.playing
      };
    case ON_PLAY:
      return {
        ...state,
        playing: true
      };
    case ON_PAUSE:
      return {
        ...state,
        playing: false
      };
    case ON_DURATION:
      return {
        ...state,
        duration: action.payload
      };
    case ON_PREV:
      if (state.index > 0) {
        return {
          ...state,
          index: state.index - 1
        };
      } else {
        return {
          ...state,
          index: state.playlist.length - 1
        };
      }
    case ON_NEXT:
      return handleNextEnded(state);
    case ON_ENDED:
      if (state.loop === false) {
        handleNextEnded(state);
        return {
          ...state
        };
      } else {
        return {
          ...state,
          playing: state.loop
        };
      }
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
      let newState = { ...state };
      let index = state.playlist.findIndex(ele => ele === action.payload.id);
      if (index === -1) {
        index = state.playlist.length;
        newState = {
          ...newState,
          playlist: [...state.playlist, action.payload.id]
        };
      }
      if (action.payload.bool !== true) {
        newState = {
          ...newState,
          index
        };
      }
      return newState;
    case DELETE_FROM_PLAYLIST:
      let playlist = state.playlist.filter(
        (ele, index) => index !== action.payload
      );
      if (playlist.length === 0 || action.payload === "all") {
        return {
          ...state,
          playlist: [speeches[Math.floor(Math.random() * 48)].id],
          index: 0,
          playing: false
        };
      }
      if (state.index === state.playlist.length - 1) {
        return {
          ...state,
          playlist,
          index: state.playlist.length - 2
        };
      } else if (action.payload < state.index) {
        return {
          ...state,
          playlist,
          index: state.index - 1
        };
      }
      return {
        ...state,
        playlist
      };
    case TOGGLE_ADD_TO_FAVLIST:
      let favCheck = action.payload.every(
        ele => state.favlist.indexOf(ele) > -1
      );
      if (favCheck === false) {
        let favlist = [...new Set([...state.favlist, ...action.payload])];
        return {
          ...state,
          favlist
        };
      }
      let favlist = state.favlist.filter(ele => !action.payload.includes(ele));
      return {
        ...state,
        favlist
      };
    default:
      return state;
  }
};

export default rootReducer;
