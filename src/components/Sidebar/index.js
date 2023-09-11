import playlist1 from "../../img/play1.JPEG";
import playlist2 from "../../img/play2.JPEG";
import playlist3 from "../../img/play3.JPEG";
import playlist4 from "../../img/play4.JPEG";
import sprite from "../../img/icon/sprite.svg";

const Sidebar = () => {
    return <div className="main__sidebar sidebar">
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">Войти</p>
      <div className="sidebar__icon">
        <svg alt="logout">
            <use href={`${sprite}#logout`} />
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
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist4}
              alt="day's playlist"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
}

export default Sidebar;