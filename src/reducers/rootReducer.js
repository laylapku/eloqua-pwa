import speechData from "../components/Speech/speechData";
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
  ON_PROGRESS_CHANGE, */
  TOGGLE_LOOP_RANDOM,
  TOGGLE_MUTED,
  SET_VOLUME,
  ON_SELECT_SPEECH
} from "../constants.js";

const initState = {
  index: 0,
  speaker: speechData[0].speaker,
  title: speechData[0].title,
  url: speechData[0].url,
  playing: false,
  played: 0,
  volume: 0,
  muted: false,
  duration: 0,
  loop: false,
  random: false
};

const generateRandomIndex = () => {
  return Math.floor(Math.random() * speechData.length);
};

const handleUrlChange = state => {
  if (state.random === false) {
    if (state.index < speechData.length - 1) {
      return {
        ...state,
        index: state.index + 1,
        speaker: speechData[state.index + 1].speaker,
        title: speechData[state.index + 1].title,
        url: speechData[state.index + 1].url
      };
    }
  } else {
    const randomIndex = generateRandomIndex();
    return {
      ...state,
      index: randomIndex,
      speaker: speechData[randomIndex].speaker,
      title: speechData[randomIndex].title,
      url: speechData[randomIndex].url
    };
  }
};

const rootReducer = (state = initState, action) => {
  
  const volume = state.volume;
  console.log(action.payload, volume)
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
    case ON_PREV:
      if (state.index > 0) {
        return {
          ...state,
          index: state.index - 1,
          speaker: speechData[state.index - 1].speaker,
          title: speechData[state.index - 1].title,
          url: speechData[state.index - 1].url
        };
      }
      break;
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
      if (state.muted === false) {
        return {
          ...state,
          muted: !state.muted,
          volume: 0
        };
      } else {
        return {
          ...state,
          muted: !state.muted,
          volume: volume
        };
      }
    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      };
    case ON_SELECT_SPEECH:
      return {
        ...state,
        index: action.payload,
        speaker: speechData[action.payload].speaker,
        title: speechData[action.payload].title,
        url: speechData[action.payload].url
      };
    default:
      return state;
  }
};

export default rootReducer;
