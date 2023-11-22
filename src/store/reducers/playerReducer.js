import { SET_CURRENT_TRACK, SET_PLAY_STATUS, PLAY_PAUSE, PREVIOUS_TRACK, NEXT_TRACK, SET_TRACKS_DATA, SET_CURRENT_TRACK_INDEX, GET_CURRENT_TRACK_INDEX, SET_SHUFFLE, LIKE_TRACK, DISLIKE_TRACK, SET_LIKED_TRACKS } from '../actions/types/playerActionTypes.js';

const initialState = {
  currentTrack: null,       // содержит информацию о текущем треке
  isPlaying: false,         // определяет, проигрывается ли трек в данный момент
  tracksData: [],           // массив, хранящий информацию о треках. Изначально пуст.
  currentTrackIndex: null,  // содержит id текущего трека в tracksData. Изначально равно null.
  shuffleMode: false,       // булево состояние, определяющее, включен ли режим произвольного воспроизведения
  playlistOrder: [],        // массив, хранящий порядок воспроизведения треков в плейлисте.
  likedTracks: [],          // массив с идентификаторами лайкнутых треков
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return { ...state, currentTrack: action.payload };
    case SET_PLAY_STATUS:
      return { ...state, isPlaying: action.payload };
    case PLAY_PAUSE:
      return {...state, isPlaying: action.payload };
      case LIKE_TRACK:
        return {
          ...state,
          likedTracks: [...state.likedTracks, action.payload],
        };
        case DISLIKE_TRACK:
        return {
          ...state,
          likedTracks: state.likedTracks.filter(trackId => trackId !== action.payload),
        };
        case SET_LIKED_TRACKS:
      return {
        ...state,
        likedTracks: action.payload,
      };
    case SET_SHUFFLE: {
      let playlistOrder = state.playlistOrder;
      if (action.payload) {
        let order = Array.from({length: state.tracksData.length}, (_, i) => i);
        for (let i = order.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [order[i], order[j]] = [order[j], order[i]];
        }
        playlistOrder = order;
      } else {
        playlistOrder = Array.from({length: state.tracksData.length}, (_, i) => i);
      } 
      console.log("SET_SHUFFLE reducer called with shuffleMode: " + action.payload);
      console.log("Playlist order: " + playlistOrder);
      return {...state, shuffleMode: action.payload, playlistOrder};
    }

    case SET_TRACKS_DATA:
      return {...state, tracksData: action.payload};

    case PREVIOUS_TRACK:
      const previousId = state.currentTrack.id - 1;
      const previousTrack = state.tracksData.find(track => track.id === previousId);
      if (!previousTrack) {
        return state;
      }
      return {...state, currentTrack: previousTrack, currentTrackIndex: previousId};
    
    case NEXT_TRACK:
      const nextId = state.currentTrack.id + 1;
      const nextTrack = state.tracksData.find(track => track.id === nextId);
      if (!nextTrack) {
        return state; 
      }
      return {...state, currentTrack: nextTrack, currentTrackIndex: nextId};

    case SET_CURRENT_TRACK_INDEX:
      return {...state, currentTrackIndex: action.payload, currentTrack: state.tracksData[action.payload],};

    case GET_CURRENT_TRACK_INDEX:
      return {...state, currentTrackIndex: state.currentTrackIndex};

    default:
      return state;
  }
}
