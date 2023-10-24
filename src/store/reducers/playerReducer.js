import { SET_CURRENT_TRACK, SET_PLAY_STATUS, SET_VOLUME, SET_LOOPING, PLAY_PAUSE, PREVIOUS_TRACK, NEXT_TRACK, SET_TRACKS_DATA } from '../actions/types/playerActionTypes.js';

const initialState = {
  currentTrack: null,
  isPlaying: false,
  volume: 1.0,
  isLooping: false,
  tracksData: [],
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
    case PLAY_PAUSE:
      return {...state, isPlaying: action.payload };


    // Для переключения треков вперед/назад
    case SET_TRACKS_DATA:
      return {...state, tracksData: action.payload};
    case PREVIOUS_TRACK: 
    const previousIndex = state.tracksData.findIndex(track => track.id === state.currentTrack.id) - 1;
    if (previousIndex < 0) {
      return state;
    }
    return {...state, currentTrack: state.tracksData[previousIndex]};

  case NEXT_TRACK: 
    const nextIndex = state.tracksData.findIndex(track => track.id === state.currentTrack.id) + 1;
    if (nextIndex >= state.tracksData.length) {
      return state; 
    }
    return {...state, currentTrack: state.tracksData[nextIndex]};



    default:
      return state;
  }
}
