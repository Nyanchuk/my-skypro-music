import { dislikeTrack, getFetchTracksFavorite, likeTrack } from "../../../api";
import { DISLIKE_TRACK, LIKE_TRACK, SET_LIKED_TRACKS } from "../types/playerActionTypes";

export const likeTrackThunk = (trackId, navigate) => {
    console.log("likeTrackThunk has been called with trackId:", trackId);
    return (dispatch, getState) => {
      likeTrack(trackId, navigate)
        .then((response) => {
            console.log("Received response from likeTrack API:", response); 
            dispatch({
              type: LIKE_TRACK,
              payload: trackId,
            });
            console.log("LIKE_TRACK action dispatched with trackId:", trackId);
        })
        .catch((error) => {
          console.error('Ошибка при лайке трека:', error);
          if (error.response && error.response.status === 401) 
            alert("Необходимо авторизоваться");
          else 
            console.error('Ошибка при лайке трека:', error);
        });
    };
  };
  
  export const dislikeTrackThunk = (trackId, navigate) => {
    return (dispatch, getState) => {
      dislikeTrack(trackId, navigate)
        .then((response) => {
            dispatch({
              type: DISLIKE_TRACK,
              payload: trackId,
            });
        })
        .catch((error) => {
          console.error('Ошибка при дизлайке трека:', error);
        });
    };
  };

  export const fetchLikedTracksThunk = () => {
    return async (dispatch) => {
      try {
        const data = await getFetchTracksFavorite();
  
        dispatch({
          type: SET_LIKED_TRACKS,
          payload: data.map(track => track.id),
        });
        
      } catch (error) {
        console.log('Ошибка при получении лайкнутых треков:', error);
      }
    };
  };