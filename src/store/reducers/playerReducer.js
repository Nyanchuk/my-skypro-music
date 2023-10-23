import { SET_CURRENT_TRACK, SET_PLAY_STATUS, SET_VOLUME, SET_LOOPING } from '../actions/types/playerActionTypes.js';

const initialState = {
  currentTrack: null,
  isPlaying: false,
  volume: 1.0,
  isLooping: false
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return { ...state, currentTrack: action.payload };
    case SET_PLAY_STATUS:
      return { ...state, isPlaying: action.payload };
    case SET_VOLUME:
      return { ...state, volume: action.payload };
    case SET_LOOPING:
      return { ...state, isLooping: action.payload };
    default:
      return state;
  }
}