import { dislikeTrack, likeTrack } from "../../../api";
import { DISLIKE_TRACK, LIKE_TRACK } from "../types/playerActionTypes";

export const likeTrackThunk = (track) => {
    return (dispatch, getState) => {
      likeTrack(track)
        .then((response) => {
          if (response.status === 'success') {
            dispatch({
              type: LIKE_TRACK,
              payload: track.id,
            });
          }
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
  
  export const dislikeTrackThunk = (track) => {
    return (dispatch, getState) => {
      dislikeTrack(track)
        .then((response) => {
          if (response.status === 'success') {
            dispatch({
              type: DISLIKE_TRACK,
              payload: track.id,
            });
          }
        })
        .catch((error) => {
          console.error('Ошибка при дизлайке трека:', error);
        });
    };
  };