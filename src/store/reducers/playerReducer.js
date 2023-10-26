import { SET_CURRENT_TRACK, SET_PLAY_STATUS, SET_VOLUME, SET_LOOPING, PLAY_PAUSE, PREVIOUS_TRACK, NEXT_TRACK, SET_TRACKS_DATA, SET_CURRENT_TRACK_INDEX, GET_CURRENT_TRACK_INDEX, SET_SHUFFLE } from '../actions/types/playerActionTypes.js';

const initialState = {
  currentTrack: null,
  isPlaying: false,
  volume: 1.0,
  isLooping: false,
  tracksData: [],
  currentTrackIndex: null,
  // Для рандомных треков
  shuffleMode: false,
  playlistOrder: [],
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


      case SET_SHUFFLE: {
        
        let playlistOrder = state.playlistOrder;
        if (action.payload) {
          // если shuffle активирован, создаем новый перемешанный порядок воспроизведения
          let order = Array.from({length: state.tracksData.length}, (_, i) => i);
          // здесь воспользовались тем же алгоритмом "Тасование Фишера — Йетса"
          for (let i = order.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
          }
          playlistOrder = order;
        } else {
          // если shuffle отключен, возвращаем порядок воспроизведения по умолчанию
          playlistOrder = Array.from({length: state.tracksData.length}, (_, i) => i);
        } 
        console.log("SET_SHUFFLE reducer called with shuffleMode: " + action.payload);
        console.log("Playlist order: " + playlistOrder);
        return {...state, shuffleMode: action.payload, playlistOrder};
      }


    // Для переключения треков вперед/назад
    case SET_TRACKS_DATA:
      return {...state, tracksData: action.payload};
    case PREVIOUS_TRACK: 
    const previousIndex = state.tracksData.findIndex(track => track.id === state.currentTrack.id) - 1;
    if (previousIndex < 0) {
      return state;
    }
    return {...state, currentTrack: state.tracksData[previousIndex], currentTrackIndex: previousIndex};
    
    case NEXT_TRACK: 
    const nextIndex = state.tracksData.findIndex(track => track.id === state.currentTrack.id) + 1;
    if (nextIndex >= state.tracksData.length) {
      return state; 
    }
    return {...state, currentTrack: state.tracksData[nextIndex], currentTrackIndex: nextIndex};

    case SET_CURRENT_TRACK_INDEX:
      console.log('SET_CURRENT_TRACK_INDEX reducer called with payload', action.payload);
      return {...state, currentTrackIndex: action.payload};
    case GET_CURRENT_TRACK_INDEX:
      return {...state, currentTrackIndex: state.currentTrackIndex};

    default:
      return state;
  }
}
