import speeches from "./data/speeches";
import speakers from "./data/speakers";
import {
  PLAY_PAUSE,
  ON_PLAY,
  ON_PAUSE,
  ON_PROGRESS,
  ON_DURATION,
  ON_PREV,
  ON_NEXT,
  ON_ENDED,
  /*  ON_SEEK_START,
  ON_SEEK_END,
  ON_SLIDER_CHANGE, */
  TOGGLE_LOOP_RANDOM,
  TOGGLE_MUTED,
  ADD_TO_PLAYLIST
} from "./constants.js";

const initState = {
  playing: false,
  played: 0,
  muted: false,
  volume: 0.8,
  duration: 0,
  loop: false,
  random: false,
  playList: [],
  index: 0,
  id: "1",
  url: speeches[0].url,
  title: speeches[0].title,
  speaker: speakers[speeches[0].speakerId].name
};

const generateRandomIndex = state => {
  return Math.floor(Math.random() * state.playList.length);
};

//fix slider(using ref), random feature??
const handleUrlChange = state => {
  if (state.random === false) {
    if (state.index < state.playList.length - 1) {
      const next = state.playList[state.index + 1];
      const speaker = speakers[next.speakerId].name;
      return {
        ...state,
        index: state.index + 1,
        id: next.id,
        url: next.url,
        title: next.title,
        speaker
      };
    } else if (state.index === state.playList.length - 1) {
      const next = state.playList[0];
      const speaker = speakers[next.speakerId].name;
      return {
        ...state,
        index: 0,
        id: next.id,
        url: next.url,
        title: next.title,
        speaker
      };
    }
  } else {
    /* const copylist = [...state.playList];
    const randomList = copylist => {
      for (var i = copylist.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copylist[i];
        copylist[i] = copylist[j];
        copylist[j] = temp;
      }
    }; */

    const randomIndex = generateRandomIndex(state);
    const random = state.playList[randomIndex];
    const speaker = speakers[random.speakerId].name;

    return {
      ...state,
      index: randomIndex,
      id: random.id,
      url: random.url,
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
    case ON_PROGRESS:
      if (!state.seeking) {
        return {
          ...state
        };
      }
      break;
    case ON_DURATION:
      return {
        ...state,
        duration: action.payload
      };
    case ON_PREV:
      if (state.index > 0) {
        const prev = state.playList[state.index - 1];
        const speaker = speakers[prev.speakerId].name;
        return {
          ...state,
          index: state.index - 1,
          id: prev.id,
          url: prev.url,
          title: prev.title,
          speaker
        };
      } else {
        const prev = state.playList[state.playList.length - 1];
        const speaker = speakers[prev.speakerId].name;
        return {
          ...state,
          index: state.playList.length - 1,
          id: prev.id,
          url: prev.url,
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
    case ADD_TO_PLAYLIST:
      const speechSelected = speeches.find(item => item.id === action.payload);
      if (state.playList.indexOf(speechSelected) === -1) {
        const speaker = speakers[speechSelected.speakerId].name;
        return {
          ...state,
          playList: [...state.playList, speechSelected],
          index: state.playList.length,
          id: speechSelected.id,
          url: speechSelected.url,
          title: speechSelected.title,
          speaker
        };
      } else {
        const index = state.playList.indexOf(speechSelected);
        const speaker = speakers[speechSelected.speakerId].name;
        return {
          ...state,
          index: index,
          id: speechSelected.id,
          url: speechSelected.url,
          title: speechSelected.title,
          speaker
        };
      }
    /*  case LINK_QUOTE_TO_TEXT: 
      const speechLinked = speeches.find(item => item.id === action.payload);
      console.log(speechLinked);
      return {
        ...state,
        playList: [...state.playList, speechLinked],
        id: action.payload,
        url: speechLinked.url,
        title: speechLinked.title,
        speaker: speakers[speechLinked.speakerId].name
      }; */
    default:
      return state;
  }
};

export default rootReducer;
