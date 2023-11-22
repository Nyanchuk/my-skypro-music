import { SET_CURRENT_TRACK, SET_PLAY_STATUS, SET_VOLUME, SET_LOOPING, PLAY_PAUSE, PREVIOUS_TRACK, NEXT_TRACK, SET_TRACKS_DATA, SET_CURRENT_TRACK_INDEX, GET_CURRENT_TRACK_INDEX, SET_SHUFFLE, LIKE_TRACK, DISLIKE_TRACK } from '../types/playerActionTypes.jsx';

export const setCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: track
});

export const setPlayStatus = (status) => ({
  type: SET_PLAY_STATUS,
  payload: status
});

export const setVolume = (volume) => ({
  type: SET_VOLUME,
  payload: volume
});

export const setLooping = (looping) => ({
  type: SET_LOOPING,
  payload: looping
});

export const playPause = (isPlaying) => ({
  type: PLAY_PAUSE,
  payload: isPlaying
});

export const previousTrack = () => ({
  type: PREVIOUS_TRACK,
});

export const nextTrack = () => ({
  type: NEXT_TRACK,
});

export const setTracks = (tracks) => ({
  type: SET_TRACKS_DATA,
  payload: tracks
});

export const setCurrentTrackIndex = (track) => {
  console.log('setCurrentTrackIndex called with id', track.id);
  return {
    type: SET_CURRENT_TRACK_INDEX,
    payload: track.id
  }
};

export const getCurrentTrackIndex = () => ({
  type: GET_CURRENT_TRACK_INDEX
});

export const setShuffle = (shuffleMode) => {
  console.log("setShuffle action dispatched with shuffleMode:" + shuffleMode);
  return {
    type: SET_SHUFFLE,
    payload: shuffleMode,
  };
};

export const likeTrackAction = (track) => ({
  type: LIKE_TRACK,
  payload: track.id,
});

export const dislikeTrackAction = (track) => ({
  type: DISLIKE_TRACK,
  payload: track.id,
});