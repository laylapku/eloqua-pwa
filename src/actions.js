import {
  PLAY_PAUSE,
  ON_PLAY,
  ON_PAUSE,
  ON_PROGRESS,
  ON_SEEK_START,
  ON_SEEK_END,
  ON_SLIDER_CHANGE,
  ON_DURATION,
  ON_PREV,
  ON_NEXT,
  ON_ENDED,
  TOGGLE_LOOP_RANDOM,
  TOGGLE_MUTED,
  ON_SELECT_SPEECH
} from './constants.js';

export const playPause = () => ({
  type: PLAY_PAUSE
});

export const onPlay = () => ({
  type: ON_PLAY
});

export const onPause = () => ({
  type: ON_PAUSE
});

export const onProgress = () => ({
  type: ON_PROGRESS
});

export const onDuration = payload => ({
  type: ON_DURATION,
  payload
});

export const onNext = () => ({
  type: ON_NEXT
});

export const onEnded = () => ({
  type: ON_ENDED
});

export const onPrev = () => ({
  type: ON_PREV
});

export const onSeekStart = payload => ({
  type: ON_SEEK_START,
  payload
});

export const onSeekEnd = () => ({
  type: ON_SEEK_END
});

export const onSliderChange = (e, value) => ({
  type: ON_SLIDER_CHANGE
});

export const toggleLoopRandom = () => ({
  type: TOGGLE_LOOP_RANDOM
});

export const toggleMuted = () => ({
  type: TOGGLE_MUTED
});

export const onSelectSpeech = index => ({
  type: ON_SELECT_SPEECH,
  payload: index
});





