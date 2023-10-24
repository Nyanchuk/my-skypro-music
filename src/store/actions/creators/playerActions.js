import { SET_CURRENT_TRACK, SET_PLAY_STATUS, SET_VOLUME, SET_LOOPING, PLAY_PAUSE, PREVIOUS_TRACK, NEXT_TRACK, SET_TRACKS_DATA } from '../types/playerActionTypes.js';

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
