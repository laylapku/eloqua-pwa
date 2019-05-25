import {
  ON_DURATION,
  PLAY_PAUSE,
  UPDATE_PLAYED,
  ON_PREV,
  ON_NEXT,
  TOGGLE_LOOP,
  SET_PLAYBACK_RATE,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST
} from "./constants.js";

export const onDuration = payload => ({
  type: ON_DURATION,
  payload
});

export const playPause = () => ({
  type: PLAY_PAUSE
});

export const updatePlayed = payload => ({
  type: UPDATE_PLAYED,
  payload
});

export const onPrev = () => ({
  type: ON_PREV
});

export const onNext = () => ({
  type: ON_NEXT
});

export const toggleLoop = () => ({
  type: TOGGLE_LOOP
});

export const setPlaybackRate = payload => ({
  type: SET_PLAYBACK_RATE,
  payload
});

export const addToPlaylist = payload => ({
  type: ADD_TO_PLAYLIST,
  payload
});

export const deleteFromPlaylist = payload => ({
  type: DELETE_FROM_PLAYLIST,
  payload
});

export const toggleAddToFavlist = payload => ({
  type: TOGGLE_ADD_TO_FAVLIST,
  payload
});
