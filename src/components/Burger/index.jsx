import React, { useEffect, useState } from 'react';
import * as S from './style'
import logo from "../../img/logo.png";
import night_gay from "../../img/night:sun.png";

const Burger = () => {
    const [menuVisible, setMenuVisible] = useState(false);        // Состояние на развердки меню
    const [user, setUser] = useState(null);                       // Состояние для удаления записи в Local Storage

    // ФУНКЦИЯ ДЛЯ СБРОСА ПОЛЬЗОВАТЕЛЯ
    useEffect(() => {
      const storedUser = localStorage.getItem('User');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('User');
    localStorage.removeItem('UserData');
    setUser(null);
  };
    const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
    return <S.MainNav>
        <S.NavLogo>
          <S.LogoImg src={logo} alt="logo" />
        </S.NavLogo>
        <S.NavBurger onClick={toggleMenu}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.NavBurger>
        <S.NavMenu $menuVisible={menuVisible}>
          <S.MenuList>
            <S.MenuItem>
            <S.Link to="/">Главное</S.Link>
            </S.MenuItem>
            <S.MenuItem>
            <S.Link to="/favorites" >Мой плейлист</S.Link>
            </S.MenuItem>
            <S.MenuItem>
            <S.Link onClick={handleLogout} to="/login">Выйти</S.Link>
            </S.MenuItem>
            <img src={night_gay} alt="day's playlist"/>
          </S.MenuList>
        </S.NavMenu> 
      </S.MainNav>
}

export default Burger;
