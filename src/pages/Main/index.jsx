import './App.css';
import sprite from "../../img/icon/sprite.svg";
import Burger from '../../components/Burger/index'; 
import Sidebar from '../../components/Sidebar/index'; 
import Bar from '../../components/Bar/index'; 
import TrackSkeleton from '../../components/Skeleton/index'; 
import React, { useState, useEffect } from 'react';
import * as S from './style'
import { getFetchTracks } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setCurrentTrack, setTracks, setCurrentTrackIndex } from '../../store/actions/creators/playerActions';

function Main() {

  // Работа с Redux Store
  const dispatch = useDispatch();
  const isPlayingGlobal = useSelector(state => state.player.isPlaying);
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex);


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
        dispatch(setTracks(data));
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
  dispatch(setCurrentTrack(track));                   // Трек из Redux Store
  dispatch(setCurrentTrackIndex(index));              // Индекс для визуализации трека
  setPlayingTrackId(track.id);                        // Видимость Bar
  dispatch(playPause(true));                          // Для отключения визуализации трека при паузе
};

  return ( 
    <S.Wrapper>
    <S.Container>
      <S.Main>
        <Burger />
        <S.MainCenterBlock>
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
                tracksData.map((track, index) => (
                  <S.PlaylistItem key={track.id} onClick={() => handleTrackClick(track, index)}>
                    <S.PlaylistTrack>
                      <S.TrackTitle>
                        <S.TrackTitleImg>
                          <S.TrackTitleSvg $isPlaying={isPlayingGlobal && index === currentTrackIndex && index === currentTrackIndex} alt="music">
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
                        <S.TrackTimeSvg alt="time">
                          <use href={`${sprite}#icon-like`} />
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
        <Sidebar />
      </S.Main>
      {playingTrackId !== null && <Bar />}  
      <S.Footer></S.Footer>
    </S.Container>
    </S.Wrapper>
  ); 
}

export default Main;




































// import './App.css';
// import sprite from "../../img/icon/sprite.svg";
// import Burger from '../../components/Burger/index'; 
// import Sidebar from '../../components/Sidebar/index'; 
// import Bar from '../../components/Bar/index'; 
// import TrackSkeleton from '../../components/Skeleton/index'; 
// import React, { useState, useEffect } from 'react';
// import * as S from './style'

// const performers = ["Nero", "Dynoro, Outwork, Mr. Gee", "Ali Bakgor", "Стоункат, Psychopath"];
// const years = ["1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"];
// const genres = ["Классическая музыка", "Народная музыка", "Латиноамериканская музыка", "Блюз", "Ритм-н-блюз", "Джаз", "Шансон", "Электронная музыка", "Рок", "Рок-н-ролл"];

// const tracksData = [
//   {
//     id: 1,
//     title: "Guilt",
//     author: "Nero",
//     album: "Welcome Reality",
//     time: "4:44",
//   },
//   {
//     id: 2,
//     title: "Elektro",
//     author: "Dynoro, Outwork, Mr. Gee",
//     album: "Elektro",
//     time: "2:22",
//   },
//   {
//     id: 3,
//     title: "I'm Fire",
//     author: "Ali Bakgor",
//     album: "I’m Fire",
//     time: "2:22",
//   },
//   {
//     id: 4,
//     title: "Non Stop",
//     author: "Стоункат, Psychopath",
//     album: "Non Stop",
//     subtitle: "(Remix)",
//     time: "4:12",
//   },
//   {
//     id: 5,
//     title: "Run Run",
//     author: "Jaded, Will Clarke, AR/CO",
//     album: "Run Run",
//     subtitle: "(feat. AR/CO)",
//     time: "2:54",
//   },
//   {
//     id: 6,
//     title: "Eyes on Fire",
//     author: "Blue Foundation, Zeds Dead",
//     album: "Eyes on Fire",
//     subtitle: "(Zeds Dead Remix)",
//     time: "5:20",
//   },
//   {
//     id: 7,
//     title: "Mucho Bien",
//     author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
//     album: "Mucho Bien",
//     subtitle: "(Hi Profile Remix)",
//     time: "3:41",
//   },
//   {
//     id: 8,
//     title: "Knives n Cherries",
//     author: "minthaze",
//     album: "Captivating",
//     time: "1:48",
//   },
//   {
//     id: 9,
//     title: "Knives n Cherries",
//     author: "minthaze",
//     album: "Captivating",
//     subtitle: "(Hi Profile Remix)",
//     time: "1:48",
//   },
//   {
//     id: 10,
//     title: "How Deep Is Your Love",
//     author: "Calvin Harris, Disciples",
//     album: "How Deep Is Your Love",
//     time: "3:32",
//   },
// ];

// function Main() {

// // СКЕЛЕТОН
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   const grayRectangles = Array(15).fill({});

// // -----ИСПОЛНИТЕЛИ-----
//   const [showPerformers, setShowPerformers] = useState(false);

//   const handlePerformersClick = () => {
//     setShowPerformers((prev) => !prev);
//   };

// // -----ГОД ВЫПУСКА-----
//   const [showYears, setShowYears] = useState(false);

//   const handleYearsClick = () => {
//     setShowYears((prev) => !prev);
//   };

// // -----ЖАНРЫ-----
//   const [showGenres, setshowGenres] = useState(false);

//   const handleGenresClick = () => {
//     setshowGenres((prev) => !prev);
//   };

//   return ( 
//     <S.Wrapper>
//     <S.Container>
//       <S.Main>
//         <Burger />
//         <S.MainCenterBlock>
//           <S.CenterBlockSearch>
//             <S.SearchSvg>
//             <use href={`${sprite}#icon-search`} />
//             </S.SearchSvg>
//             <S.SearchText type="search" placeholder="Поиск" name="search" />
//           </S.CenterBlockSearch>
//           <S.CenterBlockH2>Главная</S.CenterBlockH2>
//           <S.CenterBlockFilter>
//             <S.FilterTitle>Искать по:</S.FilterTitle>

//           {/* ПОИСК ПО ИСПОЛНИТЕЛЮ */}

//             <S.FilterPerformWrap>
//               <div
//                 className="filter__button _btn-text"
//                 onClick={handlePerformersClick}
//               >Исполнителю
//               </div>

//               {showPerformers && (
//                 <S.FilterPerformList>
//                   {performers.map((performer, index) => (
//                     <S.FilterPerformItem key={index}>
//                       {performer}
//                     </S.FilterPerformItem>
//                   ))}
//                 </S.FilterPerformList>
//               )}
//             </S.FilterPerformWrap>

//           {/* ПОИСК ПО ГОДАМ */}

//             <S.FilterPerformWrap>
//               <div
//                 className="filter__button button-author _btn-text"
//                 onClick={handleYearsClick}
//               >году выпуска 
//               </div>

//               {showYears && (
//                 <S.FilterPerformList>
//                   {years.map((years, index) => (
//                     <S.FilterPerformItem key={index}>
//                       {years}
//                     </S.FilterPerformItem>
//                   ))}
//                 </S.FilterPerformList>
//               )}
//             </S.FilterPerformWrap>

//           {/* ПОИСК ПО ЖАНРАМ */}

//             <S.FilterPerformWrap>
//               <div
//                 className="filter__button button-author _btn-text"
//                 onClick={handleGenresClick}
//               >жанру
//               </div>

//               {showGenres && (
//                 <S.FilterPerformList>
//                   {genres.map((genres, index) => (
//                     <S.FilterPerformItem key={index}>
//                       {genres}
//                     </S.FilterPerformItem>
//                   ))}
//                 </S.FilterPerformList>
//               )}
//             </S.FilterPerformWrap>

//           </S.CenterBlockFilter>
//           <S.CenterBlockContent>
//             <S.ContentTitle>
//               <S.PlaylistTitleCol $columnType="c_ol01">Трек</S.PlaylistTitleCol>
//               <S.PlaylistTitleCol $columnType="c_ol02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
//               <S.PlaylistTitleCol $columnType="c_ol03">АЛЬБОМ</S.PlaylistTitleCol>
//               <S.PlaylistTitleCol $columnType="c_ol04">
//                 <S.PlaylistTitleSvg alt="time">
//                 <use href={`${sprite}#icon-watch`} />
//                 </S.PlaylistTitleSvg>
//               </S.PlaylistTitleCol>
//             </S.ContentTitle>
//             <S.ContentPlaylist>

//             {isLoading
//               ? Array.from({ length: 11 }).map((_, index) => <TrackSkeleton key={index} />)
//               : ( 
//               <>
//               {!isLoading &&
//                 tracksData.map((track) => (
//                   <S.PlaylistItem key={track.id}>
//                     <S.PlaylistTrack>
//                       <S.TrackTitle>
//                         <S.TrackTitleImg>
//                           <S.TrackTitleSvg alt="music">
//                             <use href={`${sprite}#icon-note`} />
//                           </S.TrackTitleSvg>
//                         </S.TrackTitleImg>
//                         <S.TrackTitleText>
//                           <S.TrackTitleLink href="http://">
//                             {track.title}
//                             {track.subtitle && <S.TrackTitleSpan>{track.subtitle}</S.TrackTitleSpan>}
//                           </S.TrackTitleLink>
//                         </S.TrackTitleText>
//                       </S.TrackTitle>
//                       <S.TrackAuthor>
//                         <S.TrackAuthorLink href="http://">
//                           {track.author}
//                         </S.TrackAuthorLink>
//                       </S.TrackAuthor>
//                       <S.TrackAlbum>
//                         <S.TrackAlbumLink href="http://">
//                           {track.album}
//                         </S.TrackAlbumLink>
//                       </S.TrackAlbum>
//                       <S.TrackTime>
//                         <S.TrackTimeSvg alt="time">
//                           <use href={`${sprite}#icon-like`} />
//                         </S.TrackTimeSvg>
//                         <S.TrackTimeText>{track.time}</S.TrackTimeText>
//                       </S.TrackTime>
//                     </S.PlaylistTrack>
//                   </S.PlaylistItem>
//                 ))}
//                 </>
//               )}
//             </S.ContentPlaylist>
//           </S.CenterBlockContent>
//         </S.MainCenterBlock>
//         <Sidebar />
//       </S.Main>
//       <Bar />
//       <S.Footer></S.Footer>
//     </S.Container>
//     </S.Wrapper>
//   ); 
// }

// export default Main;

