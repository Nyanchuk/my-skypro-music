import '../../pages/PageLoyuot';
import * as S from './style'
import sprite from "../../img/icon/sprite.svg";
import TrackSkeleton from '../../components/Skeleton/index'; 
import React, { useState, useEffect } from 'react';
import { getFetchTracks } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setCurrentTrack, setTracks, setCurrentTrackIndex } from '../../store/actions/creators/playerActions';
import { likeTrackThunk, dislikeTrackThunk } from '../../store/actions/thunks/playerThunks';

const Main = ({ onTrackClick }) => {

  // Работа с Redux Store
  const dispatch = useDispatch();
  const isPlayingGlobal = useSelector(state => state.player.isPlaying);
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex);
  const likedTracks = useSelector(state => state.player.likedTracks); // Получение списка лайкнутых треков

  // ПОЛУЧЕНИЕ ТРЕКОВ ИЗ GET-запроса
  const [isLoading, setIsLoading] = useState(true);
  const [tracksData, setTracksData] = useState([]);
  const [performers, setPerformers] = useState([]);                     // Состояние для исполнителей
  const [years, setYears] = useState([]);                               // Состояние для года
  const [genres, setGenres] = useState([]);                             // Состояние для жанров
  const [error, setError] = useState(null);                             // Состояние  ошибке загрузки
  const [playingTrackId, setPlayingTrackId] = useState(null);           // Состояние для трека
 

  useEffect(() => {
    getFetchTracks()
      .then(data => {
        setTracksData(data);
        setIsLoading(false);
        console.log(data);
        const uniquePerformers = [...new Set(data.map((track) => track.author))];
        setPerformers(uniquePerformers);      // Заполнение state 1 с исполнителями, полученными из GET-запроса
        const uniqueYears = [...new Set(data.map((track) => track.release_date))];
        setYears(uniqueYears);                // Заполнение state 2 с годами, полученными из GET-запроса
        const uniqueGenres = [...new Set(data.map((track) => track.genre))];
        setGenres(uniqueGenres);              // Заполнение state 3 с жанрами, полученными из GET-запроса
      })
      .catch(error => {
        setError("Произошла ошибка при загрузке треков: " + error.message);
        setIsLoading(false);
      });
  }, []);

  // Функция для обработки лайка или дизлайка трека
  const handleLikeDislike = (track) => {
    const isLiked = likedTracks.includes(track.id);
    console.log(isLiked)
    if (isLiked) {
      dispatch(dislikeTrackThunk(track.id));
    } else {
      dispatch(likeTrackThunk(track.id));
    }
    console.log('After dispatch:', likedTracks);
  };

// СКЕЛЕТОН

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const grayRectangles = Array(15).fill({});

// УНИВЕРСАЛЬНЫЙ ФИЛЬТР

  const [activeFilter, setActiveFilter] = useState(null); // 'performers', 'years', 'genres' или null, если нет активных фильтров

  const handleFilterClick = (filterName) => {
    setActiveFilter(prev => prev === filterName ? null : filterName); // если фильтр уже активен, мы его деактивируем (устанавливаем null), в противном случае активируем нажатый фильтр
  };

// ВРЕМЯ ТРЕКА В МИНУТАХ

  function convertSecondsToMinutes(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

// ФУНКЦИЯ ПРИ НАЖАТИИ НА ТРЕК
const handleTrackClick = (track, index) => {
    dispatch(setTracks(tracksData)); // Отправляем массив в стор
    dispatch(setCurrentTrack(track));  // Трек из Redux Store
    dispatch(setCurrentTrackIndex(track)); // Индекс для визуализации трека
//   setPlayingTrackId(track.id);  // Видимость Bar
  dispatch(playPause(true)); // Для отключения визуализации трека при паузе
  onTrackClick(track, index);
};

useEffect(() => {
    if (playingTrackId !== null) {
      const selectedTrack = tracksData.find((track) => track.id === playingTrackId);
      const selectedIndex = tracksData.indexOf(selectedTrack);
      handleTrackClick(selectedTrack, selectedIndex);
    }
  }, [playingTrackId]);

return (<S.MainCenterBlock>
    <S.CenterBlockSearch>
      <S.SearchSvg>
      <use href={`${sprite}#icon-search`} />
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
    <S.CenterBlockH2>Главная</S.CenterBlockH2>
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>

    {/* ПОИСК ПО ИСПОЛНИТЕЛЮ */}

      <S.FilterPerformWrap>
        <div
          className="filter__button _btn-text"
          onClick={() => handleFilterClick('performers')}
        >Исполнителю
        </div>

        {activeFilter === 'performers' && (
          <S.FilterPerformList>
            {performers.map((performer, index) => (
              <S.FilterPerformItem key={index}>
                {performer}
              </S.FilterPerformItem>
            ))}
          </S.FilterPerformList>
        )}
      </S.FilterPerformWrap>

    {/* ПОИСК ПО ГОДАМ */}

      <S.FilterPerformWrap>
        <div
          className="filter__button button-author _btn-text"
          onClick={() => handleFilterClick('years')}
        >году выпуска 
        </div>

        {activeFilter === 'years' && (
          <S.FilterPerformList>
            {years.map((years, index) => (
              <S.FilterPerformItem key={index}>
                {years}
              </S.FilterPerformItem>
            ))}
          </S.FilterPerformList>
        )}
      </S.FilterPerformWrap>

    {/* ПОИСК ПО ЖАНРАМ */}

      <S.FilterPerformWrap>
        <div
          className="filter__button button-author _btn-text"
          onClick={() => handleFilterClick('genres')}
        >жанру
        </div>

        {activeFilter === 'genres' && (
          <S.FilterPerformList>
            {genres.map((genres, index) => (
              <S.FilterPerformItem key={index}>
                {genres}
              </S.FilterPerformItem>
            ))}
          </S.FilterPerformList>
        )}
      </S.FilterPerformWrap>

    </S.CenterBlockFilter>
    <S.CenterBlockContent>
      <S.ContentTitle>
        <S.PlaylistTitleCol $columnType="c_ol01">Трек</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $columnType="c_ol02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $columnType="c_ol03">АЛЬБОМ</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $columnType="c_ol04">
          <S.PlaylistTitleSvg alt="time">
          <use href={`${sprite}#icon-watch`} />
          </S.PlaylistTitleSvg>
        </S.PlaylistTitleCol>
      </S.ContentTitle>
      <S.ContentPlaylist>
      {error && <p>{error}</p>}
      {isLoading
        ? Array.from({ length: 11 }).map((_, index) => <TrackSkeleton key={index} />)
        : ( 
        <>
        {!isLoading &&
          tracksData.map((track) => (
            <S.PlaylistItem key={track.id} onClick={() => handleTrackClick(track)}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImg>
                    <S.TrackTitleSvg $isPlaying={isPlayingGlobal && track.id === currentTrackIndex } alt="music">
                      <circle cx="9" cy="9" r="7" stroke="#b7ff00" strokeWidth="1.2" fill="#222222" />
                      <use href={`${sprite}#icon-note`} />
                    </S.TrackTitleSvg>
                  </S.TrackTitleImg>
                  <S.TrackTitleText>
                    <S.TrackTitleLink >
                      {track.name}
                      {track.subtitle && <S.TrackTitleSpan>{track.subtitle}</S.TrackTitleSpan>}
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
                  <S.TrackTimeText>{convertSecondsToMinutes(track.duration_in_seconds)}</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
          ))}
          </>
        )}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  </S.MainCenterBlock>
)}

export default Main