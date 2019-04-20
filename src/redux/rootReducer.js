import speeches from "../data/speeches";
import speakers from "../data/speakers";
import {
  PLAY_PAUSE,
  ON_PLAY,
  ON_PAUSE,
  ON_DURATION,
  ON_PREV,
  ON_NEXT,
  ON_ENDED,
  TOGGLE_LOOP_RANDOM,
  TOGGLE_MUTED,
  SET_INDEX_ON_CLICK,
  ADD_TO_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST,
  DELETE_FROM_PLAYLIST,
  DELETE_ALL_FROM_PLAYLIST,
  HANDLE_PLAYLIST_ITEM_CLICK
} from "./constants.js";

const initState = {
  playing: false,
  muted: false,
  volume: 0.8,
  duration: 0,
  loop: false,
  random: false,
  playlist: [],
  index: 0,
  id: "1",
  title: speeches[0].title,
  speaker: speakers[speeches[0].speakerId].name,
  favlist: []
};

const generateRandomIndex = state => {
  return Math.floor(Math.random() * state.playlist.length);
};

//fix slider(using ref), random feature??
const handleUrlChange = state => {
  if (state.random === false) {
    if (state.index < state.playlist.length - 1) {
      let next = state.playlist[state.index + 1];
      let speaker = speakers[next.speakerId].name;
      return {
        ...state,
        index: state.index + 1,
        id: next.id,
        title: next.title,
        speaker
      };
    } else if (state.index === state.playlist.length - 1) {
      let next = state.playlist[0];
      let speaker = speakers[next.speakerId].name;
      return {
        ...state,
        index: 0,
        id: next.id,
        title: next.title,
        speaker
      };
    }
  } else {
    const randomIndex = generateRandomIndex(state);
    const random = state.playlist[randomIndex];
    let speaker = speakers[random.speakerId].name;
    return {
      ...state,
      index: randomIndex,
      id: random.id,
      title: random.title,
      speaker
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
        let speaker = speakers[prev.speakerId].name;
        return {
          ...state,
          index: state.index - 1,
          id: prev.id,
          title: prev.title,
          speaker
        };
      } else {
        let prev = state.playlist[state.playlist.length - 1];
        let speaker = speakers[prev.speakerId].name;
        return {
          ...state,
          index: state.playlist.length - 1,
          id: prev.id,
          title: prev.title,
          speaker
        };
      }
    case ON_NEXT:
      return handleUrlChange(state);
    case ON_ENDED:
      if (state.loop === false) {
        return handleUrlChange(state);
      } else {
        return {
          ...state,
          playing: state.loop
        };
      }
    case TOGGLE_LOOP_RANDOM:
      if (state.loop === false) {
        if (state.random === false) {
          return {
            ...state,
            loop: true,
            random: false
          };
        } else {
          return {
            ...state,
            loop: false,
            random: false
          };
        }
      } else {
        return {
          ...state,
          loop: false,
          random: true
        };
      }
    case TOGGLE_MUTED:
      return {
        ...state,
        muted: !state.muted
      };
    case SET_INDEX_ON_CLICK:
      let speechSelected = speeches.find(ele => ele.id === action.payload);
      let speaker = speakers[speechSelected.speakerId].name;
      if (state.playlist.indexOf(speechSelected) === -1) {
        return {
          ...state,
          playlist: [...state.playlist, speechSelected],
          index: state.playlist.length,
          id: speechSelected.id,
          title: speechSelected.title,
          speaker
        };
      } else {
        let index = state.playlist.indexOf(speechSelected);
        return {
          ...state,
          index: index,
          id: speechSelected.id,
          title: speechSelected.title,
          speaker
        };
      }
    case ADD_TO_PLAYLIST:
      let speechToAdd = speeches.find(ele => ele.id === action.payload);
      if (!state.playlist.some(ele => ele.id === action.payload)) {
        return {
          ...state,
          playlist: [...state.playlist, speechToAdd]
        };
      }
      return state;
    case HANDLE_PLAYLIST_ITEM_CLICK:
      speechSelected = state.playlist[action.payload];
      speaker = speakers[speechSelected.speakerId].name;
      return {
        ...state,
        index: action.payload,
        id: speechSelected.id,
        title: speechSelected.title,
        speaker
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
    default:
      return state;
  }
};

export default rootReducer;
