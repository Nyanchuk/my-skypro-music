import '../../pages/PageLoyuot';
import * as S from './style'
import sprite from "../../img/icon/sprite.svg";
import TrackSkeleton from '../../components/Skeleton/index'; 
import React, { useState, useEffect } from 'react';
import { getFetchTracks } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setCurrentTrack, setTracks, setCurrentTrackIndex } from '../../store/actions/creators/playerActions';
import { likeTrackThunk, dislikeTrackThunk } from '../../store/actions/thunks/playerThunks';
import { useNavigate } from 'react-router-dom';

const Main = ({ onTrackClick }) => {

  // Работа с Redux Store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isPlayingGlobal = useSelector(state => state.player.isPlaying);
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex);
  const likedTracks = useSelector(state => state.player.likedTracks); // Получение списка лайкнутых треков

  // ПОЛУЧЕНИЕ ТРЕКОВ ИЗ GET-запроса
  const [isLoading, setIsLoading] = useState(true);
  const [tracksData, setTracksData] = useState([]);
  const [performers, setPerformers] = useState([]);                     // Состояние для исполнителей
  const [genres, setGenres] = useState([]);                             // Состояние для жанров
  const [error, setError] = useState(null);                             // Состояние  ошибке загрузки
  const [playingTrackId, setPlayingTrackId] = useState(null);           // Состояние для трека
  const [sortOrder, setSortOrder] = useState('default');                // Состояние для метода сортировки
  const [originalTracksData, setOriginalTracksData] = useState([]);      // Новое состояние

  useEffect(() => {
    getFetchTracks()
      .then((data) => {
        setOriginalTracksData(data); // Сохраняем оригинальные данные
        setTracksData(data);
        setIsLoading(false);
        const uniquePerformers = [...new Set(data.map((track) => track.author))];
        setPerformers(uniquePerformers);
        const uniqueGenres = [...new Set(data.map((track) => track.genre))];
        setGenres(uniqueGenres);
      })
      .catch((error) => {
        setError("Произошла ошибка при загрузке треков: " + error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    let sortedTracks = [...originalTracksData];

    if (sortOrder === 'new') {
      sortedTracks.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }
    else if (sortOrder === 'old') {
      sortedTracks.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    }

    setTracksData(sortedTracks);
  }, [sortOrder]);

  // Функция для обработки лайка или дизлайка трека
  const handleLikeDislike = (track) => {
    const isLiked = likedTracks.includes(track.id);
    console.log(isLiked)
    if (isLiked) {
      dispatch(dislikeTrackThunk(track.id, navigate));
    } else {
      dispatch(likeTrackThunk(track.id, navigate));
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

// ВЫБРАТЬ ОДИН ИЗ ВАРИАНТОВ СОРТИРОВКИ
  const handleSortOrderChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  let sortedTracksData = [...tracksData]; // создаем копию, чтобы не изменять исходные данные

switch(sortOrder) {
  case 'new':
    sortedTracksData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    break;
  case 'old':
    sortedTracksData.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    break;
  default:
    // default order (можно представить в том же порядке, в котором они были получены, или использовать любую другую логику сортировки по умолчанию)
    break;
}

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
    <S.CenterBlockFilterCategory>
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

    <S.CenterBlockFilter>
      <S.FilterTitle>Сортировка:</S.FilterTitle>

    {/* СОРТИРОВКА ПО ДАТЕ */}

    <S.FilterPerformWrap>
      <div
      className="filter__button button-author _btn-text"
      onClick={() => handleFilterClick('sortOrder')}
    >
      {sortOrder === 'default' ? 'По умолчанию' :
      sortOrder === 'new' ? 'Сначала новые' : 'Сначала старые'}
    </div>

      {activeFilter === 'sortOrder' && (
        <S.FilterPerformList>
          <S.FilterPerformItem onClick={() => handleSortOrderChange('default')}>
            По умолчанию
          </S.FilterPerformItem>
          <S.FilterPerformItem onClick={() => handleSortOrderChange('new')}>
            Сначала новые
          </S.FilterPerformItem>
          <S.FilterPerformItem onClick={() => handleSortOrderChange('old')}>
            Сначала старые
          </S.FilterPerformItem>
        </S.FilterPerformList>
      )}
    </S.FilterPerformWrap>
   
    </S.CenterBlockFilter>
    </S.CenterBlockFilterCategory>
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