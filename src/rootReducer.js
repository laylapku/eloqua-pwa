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
  ON_SELECT_SPEECH
} from "./constants.js";

const initSpeaker = speakers[speeches[0].speakerId].name;

const initState = {
  index: 0,
  speaker: initSpeaker,
  title: speeches[0].title,
  url: speeches[0].url,
  playing: false,
  played: 0,
  muted: false,
  volume: 0.8,
  duration: 0,
  loop: false,
  random: false
};

const generateRandomIndex = () => {
  return Math.floor(Math.random() * speeches.length);
};

const handleUrlChange = state => {
  if (state.random === false) {
    if (state.index < speeches.length - 1) {
      return {
        ...state,
        index: state.index + 1,
        speaker: speeches[state.index + 1].speaker,
        title: speeches[state.index + 1].title,
        url: speeches[state.index + 1].url
      };
    }
  } else {
    const randomIndex = generateRandomIndex();
    return {
      ...state,
      index: randomIndex,
      speaker: speeches[randomIndex].speaker,
      title: speeches[randomIndex].title,
      url: speeches[randomIndex].url
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
        return {
          ...state,
          index: state.index - 1,
          speaker: speeches[state.index - 1].speaker,
          title: speeches[state.index - 1].title,
          url: speeches[state.index - 1].url
        };
      }
      break;
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
    case ON_SELECT_SPEECH:
      const speaker = speakers[speeches[action.payload].speakerId].name;
      return {
        ...state,
        index: action.payload,
        speaker: speaker,
        title: speeches[action.payload].title,
        url: speeches[action.payload].url
      };
    default:
      return state;
  }
};

export default rootReducer;
