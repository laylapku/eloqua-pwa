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
  SET_INDEX_ON_CLICK,
  HANDLE_PLAYLIST_ITEM_CLICK,
  DELETE_FROM_PLAYLIST,
  DELETE_ALL_FROM_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST
} from "./constants.js";

const initState = {
  playing: false,
  muted: false,
  volume: 0.8,
  duration: 0,
  loop: false,
  playlist: [speeches[0]],
  index: 0,
  id: "1",
  favlist: []
};

const handleNextEnded = state => {
  if (state.index < state.playlist.length - 1) {
    let next = state.playlist[state.index + 1];
    return {
      ...state,
      index: state.index + 1,
      id: next.id
    };
  } else if (state.index === state.playlist.length - 1) {
    let next = state.playlist[0];
    return {
      ...state,
      index: 0,
      id: next.id
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
        let prev = state.playlist[state.index - 1];
        return {
          ...state,
          index: state.index - 1,
          id: prev.id
        };
      } else {
        let prev = state.playlist[state.playlist.length - 1];
        return {
          ...state,
          index: state.playlist.length - 1,
          id: prev.id
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
      let speechToAdd = speeches.find(ele => ele.id === action.payload);
      if (!state.playlist.some(ele => ele.id === action.payload)) {
        return {
          ...state,
          playlist: [...state.playlist, speechToAdd]
        };
      }
      return state;
    case SET_INDEX_ON_CLICK:
      let speechSelected = speeches.find(ele => ele.id === action.payload);
      if (!state.playlist.some(ele => ele.id === action.payload)) {
        return {
          ...state,
          playlist: [...state.playlist, speechSelected],
          index: state.playlist.length,
          id: speechSelected.id
        };
      } else {
        let index = state.playlist.findIndex(ele => ele.id === action.payload);
        return {
          ...state,
          index: index,
          id: speechSelected.id
        };
      }
    case HANDLE_PLAYLIST_ITEM_CLICK:
      speechSelected = state.playlist[action.payload];
      return {
        ...state,
        index: action.payload,
        id: speechSelected.id
      };
    case DELETE_FROM_PLAYLIST:
      let playlist = state.playlist.filter(
        (ele, index) => index !== action.payload
      );
      if (state.index === state.playlist.length - 1) {
        return {
          ...state,
          playlist,
          index: state.playlist.length - 2
        };
      } else if (state.index === 0) {
        return {
          ...state,
          playlist,
          index: 0
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
    case DELETE_ALL_FROM_PLAYLIST:
      if (state.playlist.length > 0) {
        return {
          ...state,
          playlist: [],
          index: 0,
          playing: false
        };
      }
      return state;
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
