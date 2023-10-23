import { SET_CURRENT_TRACK, SET_PLAY_STATUS, SET_VOLUME, SET_LOOPING } from '../types/playerActionTypes.js';

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

