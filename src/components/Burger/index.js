import React, { useState } from 'react';
import "./style.css";
import logo from "../../img/logo.png";
import night_gay from "../../img/night:sun.png";


const Burger = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
    return <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src={logo} alt="logo" />
        </div>
        <div className="nav__burger burger" onClick={toggleMenu}>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
        <div className={`nav__menu menu ${menuVisible ? "menu_visible" : ""}`}>
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">Главное</a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">Мой плейлист</a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">Войти</a>
            </li>
            <img
              src={night_gay}
              alt="day's playlist"
            />
          </ul>
        </div> 
      </nav>
}

export default Burger;