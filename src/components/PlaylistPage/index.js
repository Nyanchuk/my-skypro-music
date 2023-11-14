import "./App.css";
import sprite from "../../img/icon/sprite.svg";
import TrackSkeleton from "../Skeleton/index";
import React, { useState, useEffect } from "react";
import * as S from "./style";
import { getFetchCategoryTracks, getFetchTracksFavorite } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setCurrentTrack, setTracks, setCurrentTrackIndex } from "../../store/actions/creators/playerActions";
import { dislikeTrackThunk, likeTrackThunk } from "../../store/actions/thunks/playerThunks";
import { useNavigate, useParams } from "react-router-dom";

function PlaylistPage({ onTrackClick }) {

  const { id } = useParams();
  const navigate = useNavigate();

  // Используйте значение id для отображения конкретного названия плейлиста
  const playlistTitles = {
      1: "Classic music",
      2: "Electro music",
      3: "Rock music",
  }
  const pageTitle = playlistTitles[id];

  const dispatch = useDispatch();
  const isPlayingGlobal = useSelector((state) => state.player.isPlaying);
  const currentTrackIndex = useSelector((state) => state.player.currentTrackIndex);
  const likedTracks = useSelector((state) => state.player.likedTracks); // Получение списка лайкнутых треков

  // ПОЛУЧЕНИЕ ТРЕКОВ ИЗ GET-запроса
  const [isLoading, setIsLoading] = useState(true);
  const [tracksData, setTracksData] = useState([]);
  const [error, setError] = useState(null); // Состояние  ошибке загрузки
  const [playingTrackId, setPlayingTrackId] = useState(null); // Состояние для трека

  useEffect(() => {
    getFetchCategoryTracks(id)
      .then((data) => {
        setTracksData(data.items);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(`Произошла ошибка при загрузке треков: ${error.message}`);
        setIsLoading(false);
      });
  }, [id]);


  // Функция для обработки лайка или дизлайка трека
  const handleLikeDislike = (track) => {
    const isLiked = likedTracks.includes(track.id);
    console.log(isLiked);
    if (isLiked) {
      dispatch(dislikeTrackThunk(track.id, navigate));
    } else {
      dispatch(likeTrackThunk(track.id, navigate));
    }
    console.log("After dispatch:", likedTracks);
  };

  // СКЕЛЕТОН

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const grayRectangles = Array(15).fill({});

  // ВРЕМЯ ТРЕКА В МИНУТАХ
  function convertSecondsToMinutes(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  // ФУНКЦИЯ ПРИ НАЖАТИИ НА ТРЕК
  const handleTrackClick = (track, index) => {
    dispatch(setTracks(tracksData));
    dispatch(setCurrentTrack(track)); // Трек из Redux Store
    dispatch(setCurrentTrackIndex(track)); // Индекс для визуализации трека
    dispatch(playPause(true)); // Для отключения визуализации трека при паузе
    onTrackClick(track, index);
  };

  useEffect(() => {
    if (playingTrackId !== null) {
      const selectedTrack = tracksData.find(
        (track) => track.id === playingTrackId
      );
      const selectedIndex = tracksData.indexOf(selectedTrack);
      handleTrackClick(selectedTrack, selectedIndex);
    }
  }, [playingTrackId]);

  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use href={`${sprite}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterBlockH2>{pageTitle}</S.CenterBlockH2>
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.PlaylistTitleCol $columnType="c_ol01">Трек</S.PlaylistTitleCol>
          <S.PlaylistTitleCol $columnType="c_ol02">
            ИСПОЛНИТЕЛЬ
          </S.PlaylistTitleCol>
          <S.PlaylistTitleCol $columnType="c_ol03">АЛЬБОМ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol $columnType="c_ol04">
            <S.PlaylistTitleSvg alt="time">
              <use href={`${sprite}#icon-watch`} />
            </S.PlaylistTitleSvg>
          </S.PlaylistTitleCol>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {error && <p>{error}</p>}
          {isLoading ? (
            Array.from({ length: 11 }).map((_, index) => (
              <TrackSkeleton key={index} />
            ))
          ) : (
            <>
              {!isLoading &&
                tracksData.map((track) => (
                  <S.PlaylistItem
                    key={track.id}
                    onClick={() => handleTrackClick(track)}
                  >
                    <S.PlaylistTrack>
                      <S.TrackTitle>
                        <S.TrackTitleImg>
                        <S.TrackTitleSvg $isPlaying={isPlayingGlobal && track.id === currentTrackIndex } alt="music">
                          <circle cx="9" cy="9" r="7" stroke="#b7ff00" strokeWidth="1.2" fill="#222222" />
                          <use href={`${sprite}#icon-note`} />
                        </S.TrackTitleSvg>
                        </S.TrackTitleImg>
                        <S.TrackTitleText>
                          <S.TrackTitleLink>
                            {track.name}
                            {track.subtitle && (
                              <S.TrackTitleSpan>
                                {track.subtitle}
                              </S.TrackTitleSpan>
                            )}
                          </S.TrackTitleLink>
                        </S.TrackTitleText>
                      </S.TrackTitle>
                      <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">
                          {track.author}
                        </S.TrackAuthorLink>
                      </S.TrackAuthor>
                      <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">
                          {track.album}
                        </S.TrackAlbumLink>
                      </S.TrackAlbum>
                      <S.TrackTime>
                      <S.TrackTimeSvg alt="time" onClick={(e) => {
                        e.stopPropagation(); 
                        handleLikeDislike(track);
                        }}>
                        {likedTracks.includes(track.id) ? (
                        <use href={`${sprite}#icon-activelike`}/>
                      ) : (
                        <use href={`${sprite}#icon-like`}/>
                      )}
                        </S.TrackTimeSvg>
                        <S.TrackTimeText>
                          {convertSecondsToMinutes(track.duration_in_seconds)}
                        </S.TrackTimeText>
                      </S.TrackTime>
                    </S.PlaylistTrack>
                  </S.PlaylistItem>
                ))}
            </>
          )}
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
}

export default PlaylistPage;
