import React, { useEffect, useState } from 'react';
import * as S from './style'
import logo from "../../img/logo.png";
import night_gay from "../../img/night:sun.png";
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)`
  margin-bottom: 10px;
  text-decoration: none;
  color: #ffffff;
  transition: all .3s;
  &:hover {
    text-shadow: 0 0 7px #b7ff00;
    color: #b7ff00;
  }
`;

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
            <StyledLink to="/">Главное</StyledLink>
            </S.MenuItem>
            <S.MenuItem>
            <StyledLink to="/favorites" >Мой плейлист</StyledLink>
            </S.MenuItem>
            <S.MenuItem>
            <StyledLink onClick={handleLogout} to="/login">Выйти</StyledLink>
            </S.MenuItem>
            <img src={night_gay} alt="day's playlist"/>
          </S.MenuList>
        </S.NavMenu> 
      </S.MainNav>
}

export default Burger;
