import './App.css';
import Burger from './components/Burger/index';

// Импорт картинок .png
import playlist1 from "./img/playlist01.png";
import playlist2 from "./img/playlist02.png";
import playlist3 from "./img/playlist03.png";

// Импорт картинок .svg
import play from "./img/icon/play.svg";
import note from "./img/icon/note.svg";
import next from "./img/icon/next.svg";
import prev from "./img/icon/prev.svg";
import search from "./img/icon/search.svg";
import sprite from "./img/icon/sprite.svg";
import shuffle from "./img/icon/shuffle.svg";
import dislike from "./img/icon/dislike.svg";
import like from "./img/icon/like.svg";
import repeat from "./img/icon/repeat.svg";
import watch from "./img/icon/watch.svg";
import volume from "./img/icon/volume.svg";

function App() {
  console.log('Работает!')
  return ( 
    <div className="wrapper">
    <div className="container">
      <main className="main">
        <Burger />
        {/* Далее изменяемая часть страницы */}
        <div className="main__centerblock centerblock">
          <div className="centerblock__search search">
            <svg className="search__svg">
              <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
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
            <div className="filter__button button-author _btn-text">
              исполнителю
            </div>
            <div className="filter__button button-year _btn-text">
              году выпуска
            </div>
            <div className="filter__button button-genre _btn-text">жанру</div>
          </div>
          <div className="centerblock__content">
            <div className="content__title playlist-title">
              <div className="playlist-title__col col01">Трек</div>
              <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
              <div className="playlist-title__col col03">АЛЬБОМ</div>
              <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </svg>
              </div>
            </div>
            <div className="content__playlist playlist">
              <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://"
                        >Guilt <span className="track__title-span"></span
                      ></a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">Nero</a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://"
                      >Welcome Reality</a
                    >
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
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
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://"
                        >Elektro <span className="track__title-span"></span
                      ></a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://"
                      >Dynoro, Outwork, Mr. Gee</a
                    >
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Elektro</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
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
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://"
                        >I'm Fire <span className="track__title-span"></span
                      ></a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://"
                      >Ali Bakgor</a
                    >
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">I’m Fire</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
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
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://"
                        >Non Stop
                        <span className="track__title-span">(Remix)</span></a
                      >
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://"
                      >Стоункат, Psychopath</a
                    >
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">Non Stop</a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">4:12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__sidebar sidebar">
          <div className="sidebar__personal">
            <p className="sidebar__personal-name">Sergey.Ivanov</p>
            <div className="sidebar__icon">
              <svg alt="logout">
                <use xlinkHref="img/icon/sprite.svg#logout"></use>
              </svg>
            </div>
          </div>
          <div className="sidebar__block">
            <div className="sidebar__list">
              <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <img
                    className="sidebar__img"
                    src={playlist1}
                    alt="day's playlist"
                  />
                </a>
              </div>
              <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <img
                    className="sidebar__img"
                    src={playlist2}
                    alt="day's playlist"
                  />
                </a>
              </div>
              <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <img
                    className="sidebar__img"
                    src={playlist3}
                    alt="day's playlist"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress"></div>
          <div className="bar__player-block">
            <div className="bar__player player">
              <div className="player__controls">
                <div className="player__btn-prev">
                  <svg className="player__btn-prev-svg" alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className="player__btn-play _btn">
                  <svg className="player__btn-play-svg" alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className="player__btn-next">
                  <svg className="player__btn-next-svg" alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className="player__btn-repeat _btn-icon">
                  <svg className="player__btn-repeat-svg" alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className="player__btn-shuffle _btn-icon">
                  <svg className="player__btn-shuffle-svg" alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className="player__track-play track-play">
                <div className="track-play__contain">
                  <div className="track-play__image">
                    <svg className="track-play__svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className="track-play__author">
                    <a className="track-play__author-link" href="http://"
                      >Ты та...</a
                    >
                  </div>
                  <div className="track-play__album">
                    <a className="track-play__album-link" href="http://">Баста</a>
                  </div>
                </div>

                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <use
                        xlinkHref="img/icon/sprite.svg#icon-dislike"
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  </div>
  ); 
}

export default App;
