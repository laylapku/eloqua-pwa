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
  DELETE_FROM_PLAYLIST,
  DELETE_ALL_FROM_PLAYLIST,
  HANDLE_PLAYLIST_ITEM_CLICK,
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

export const onNext = () => ({
  type: ON_NEXT
});

export const onEnded = () => ({
  type: ON_ENDED
});

export const onPrev = () => ({
  type: ON_PREV
});

export const toggleLoopRandom = () => ({
  type: TOGGLE_LOOP_RANDOM
});

export const toggleMuted = () => ({
  type: TOGGLE_MUTED
});

export const setIndexOnClick = id => ({
  type: SET_INDEX_ON_CLICK,
  payload: id
});

export const addToPlaylist = id => ({
  type: ADD_TO_PLAYLIST,
  payload: id
});

export const toggleAddToFavlist = id => ({
  type: TOGGLE_ADD_TO_FAVLIST,
  payload: id
});

export const deleteFromPlaylist = id => ({
  type: DELETE_FROM_PLAYLIST,
  payload: id
});

export const deleteAllFromPlaylist = () => ({
  type: DELETE_ALL_FROM_PLAYLIST
});

export const handlePlaylistItemClick = index => ({
  type: HANDLE_PLAYLIST_ITEM_CLICK,
  payload: index
});

