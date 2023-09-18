import './App.css';
import sprite from "./img/icon/sprite.svg";
import Burger from './components/Burger/index'; 
import Sidebar from './components/Sidebar/index'; 
import Bar from './components/Bar/index'; 
import TrackSkeleton from './components/Skeleton/index'; 
import React, { useState, useEffect } from 'react';

function App() {
// --------------------------------------------------
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
    // Условный массив для скелетона
    const grayRectangles = Array(15).fill({});
// Условный массив для исполнителей --------------------------------------------------
  const performers = ["Nero", "Dynoro, Outwork, Mr. Gee", "Ali Bakgor", "Стоункат, Psychopath"];

  const [showPerformers, setShowPerformers] = useState(false);

  const handlePerformersClick = () => {
    setShowPerformers(!showPerformers);
  };

// Условный массив для года выпуска --------------------------------------------------
  const years = ["1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"];

  const [showYears, setShowYears] = useState(false);

  const handleYearsClick = () => {
    setShowYears(!showYears);
  };

// Условный массив для жанров --------------------------------------------------
  const genres = ["Классическая музыка", "Народная музыка", "Латиноамериканская музыка", "Блюз", "Ритм-н-блюз", "Джаз", "Шансон", "Электронная музыка", "Рок", "Рок-н-ролл"];

  const [showGenres, setshowGenres] = useState(false);

  const handleGenresClick = () => {
    setshowGenres(!showGenres);
  };


  return ( 
    <div className="wrapper">
    <div className="container">
      <main className="main">
        <Burger />
        <div className="main__centerblock centerblock">
          <div className="centerblock__search search">
            <svg className="search__svg">
            <use href={`${sprite}#icon-search`} />
            </svg>
            <input
              className="search__text"
              type="search"
              placeholder="Поиск"
              name="search"
            />
          </div>
          <h2 className="centerblock__h2">Треки</h2>
          <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>

          {/* ПОИСК ПО ИСПОЛНИТЕЛЮ */}
            <div className="filter__performers-wrapper">
              <div
                className="filter__button button-author _btn-text"
                onClick={handlePerformersClick}
              >Исполнителю</div>

              {showPerformers && (
                <div className="filter__performers-list">
                  {performers.map((performer, index) => (
                    <div key={index} className="filter__performer-item">
                      {performer}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ПОИСК ПО ГОДАМ */}
            <div className="filter__performers-wrapper">
              <div
                className="filter__button button-author _btn-text"
                onClick={handleYearsClick}
              >году выпуска </div>

              {showYears && (
                <div className="filter__performers-list">
                  {years.map((years, index) => (
                    <div key={index} className="filter__performer-item">
                      {years}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ПОИСК ПО ЖАНРАМ */}
            <div className="filter__performers-wrapper">
              <div
                className="filter__button button-author _btn-text"
                onClick={handleGenresClick}
              >
                жанру
              </div>

              {showGenres && (
                <div className="filter__performers-list">
                  {genres.map((genres, index) => (
                    <div key={index} className="filter__performer-item">
                      {genres}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
          <div className="centerblock__content">
            <div className="content__title playlist-title">
              <div className="playlist-title__col c_ol01">Трек</div>
              <div className="playlist-title__col c_ol02">ИСПОЛНИТЕЛЬ</div>
              <div className="playlist-title__col c_ol03">АЛЬБОМ</div>
              <div className="playlist-title__col c_ol04">
                <svg className="playlist-title__svg" alt="time">
                <use href={`${sprite}#icon-watch`} />
                </svg>
              </div>
            </div>
            <div className="content__playlist playlist">

            {isLoading
                  ? Array.from({ length: 20 }).map((_, index) => <TrackSkeleton key={index} />)
                  : ( 
                    <>

              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Guilt 
                        <span className="track__title-span"></span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Nero</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Welcome Reality</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">4:44</span>
                  </div>
                </div>
              </div>
              
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Elektro <span className="track__title-span"></span></a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Dynoro, Outwork, Mr. Gee</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Elektro</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">I'm Fire 
                        <span className="track__title-span"></span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Ali Bakgor</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">I’m Fire</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Non Stop
                      <span className="track__title-span">(Remix)</span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Стоункат, Psychopath</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Non Stop</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">4:12</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Guilt 
                        <span className="track__title-span"></span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Nero</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Welcome Reality</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">4:44</span>
                  </div>
                </div>
              </div>
              
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Elektro <span className="track__title-span"></span></a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Dynoro, Outwork, Mr. Gee</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Elektro</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">I'm Fire 
                        <span className="track__title-span"></span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Ali Bakgor</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">I’m Fire</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Non Stop
                      <span className="track__title-span">(Remix)</span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Стоункат, Psychopath</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Non Stop</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">4:12</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Guilt 
                        <span className="track__title-span"></span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Nero</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Welcome Reality</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">4:44</span>
                  </div>
                </div>
              </div>
              
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Elektro <span className="track__title-span"></span></a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Dynoro, Outwork, Mr. Gee</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Elektro</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">I'm Fire 
                        <span className="track__title-span"></span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Ali Bakgor</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">I’m Fire</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Non Stop
                      <span className="track__title-span">(Remix)</span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Стоункат, Psychopath</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Non Stop</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">4:12</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Guilt 
                        <span className="track__title-span"></span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Nero</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Welcome Reality</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">4:44</span>
                  </div>
                </div>
              </div>
              
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Elektro <span className="track__title-span"></span></a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Dynoro, Outwork, Mr. Gee</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Elektro</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">I'm Fire 
                        <span className="track__title-span"></span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Ali Bakgor</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">I’m Fire</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </div>
                </div>
              </div>
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                      <use href={`${sprite}#icon-note`} />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">Non Stop
                      <span className="track__title-span">(Remix)</span>
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Стоункат, Psychopath</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Non Stop</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                    <use href={`${sprite}#icon-like`} />
                    </svg>
                    <span className="track__time-text">4:12</span>
                  </div>
                </div>
              </div>
              </>
              )}
            </div>
          </div>
        </div>
        <Sidebar />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </div>
  </div>
  ); 
}

export default App;
