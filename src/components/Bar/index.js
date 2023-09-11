import sprite from "../../img/icon/sprite.svg";

const Bar = () => {
    return <div className="bar">
            <div className="bar__content">
          <div className="bar__player-progress"></div>
          <div className="bar__player-block">
            <div className="bar__player player">
              <div className="player__controls">
                <div className="player__btn-prev">
                  <svg className="player__btn-prev-svg" alt="prev">
                    <use href={`${sprite}#icon-prev`} />
                  </svg>
                </div>
                <div className="player__btn-play _btn">
                  <svg className="player__btn-play-svg" alt="play">
                    <use href={`${sprite}#icon-play`} />
                  </svg>
                </div>
                <div className="player__btn-next">
                  <svg className="player__btn-next-svg" alt="next">
                    <use href={`${sprite}#icon-next`} />
                  </svg>
                </div>
                <div className="player__btn-repeat _btn-icon">
                  <svg className="player__btn-repeat-svg" alt="repeat">
                    <use href={`${sprite}#icon-repeat`} />
                  </svg>
                </div>
                <div className="player__btn-shuffle _btn-icon">
                  <svg className="player__btn-shuffle-svg" alt="shuffle">
                    <use href={`${sprite}#icon-shuffle`} />
                  </svg>
                </div>
              </div>
              <div className="player__track-play track-play">
                <div className="track-play__contain">
                  <div className="track-play__image">
                    <svg className="track-play__svg" alt="music">
                        <use href={`${sprite}#icon-note`} />
                    </svg>
                  </div>
                  <div className="track-play__author">
                    <a className="track-play__author-link" href="http://">Ты та...</a>
                  </div>
                  <div className="track-play__album">
                    <a className="track-play__album-link" href="http://">Баста</a>
                  </div>
                </div>
                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                        <use href={`${sprite}#icon-like`} />
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                        <use href={`${sprite}#icon-dislike`} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <use href={`${sprite}#icon-volume`} />
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
}

export default Bar;