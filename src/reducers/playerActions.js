import {
  ON_DURATION,
  UPDATE_PLAYED,
  PLAY_PAUSE,
  ON_PREV,
  ON_NEXT,
  TOGGLE_LOOP,
  SET_SEEKING_TRUE,
  SET_SEEKING_FALSE,
  SET_PLAYBACK_RATE,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST,
  UPDATE_URL
} from "./playerConstants.js";

export const onDuration = payload => ({
  type: ON_DURATION,
  payload
});

export const updatePlayed = payload => ({
  type: UPDATE_PLAYED,
  payload
});

export const playPause = () => ({
  type: PLAY_PAUSE
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

export const setSeekingTrue = () => ({
  type: SET_SEEKING_TRUE
});

export const setSeekingFalse = () => ({
  type: SET_SEEKING_FALSE
});

export const setPlaybackRate = payload => ({
  type: SET_PLAYBACK_RATE,
  payload
});

export const updateUrl = payload => ({
  type: UPDATE_URL,
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
