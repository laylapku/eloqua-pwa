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

export const playPause = () => ({
  type: PLAY_PAUSE
});

export const onPlay = () => ({
  type: ON_PLAY
});

export const onPause = () => ({
  type: ON_PAUSE
});

export const onDuration = payload => ({
  type: ON_DURATION,
  payload
});

export const onPrev = () => ({
  type: ON_PREV
});

export const onNext = () => ({
  type: ON_NEXT
});

export const onEnded = () => ({
  type: ON_ENDED
});

export const toggleLoop = () => ({
  type: TOGGLE_LOOP
});

export const toggleMuted = () => ({
  type: TOGGLE_MUTED
});

export const addToPlaylist = payload => ({
  type: ADD_TO_PLAYLIST,
  payload
});

export const deleteFromPlaylist = payload => ({
  type: DELETE_FROM_PLAYLIST,
  payload
});

export const toggleAddToFavlist = id => ({
  type: TOGGLE_ADD_TO_FAVLIST,
  payload: id
});
