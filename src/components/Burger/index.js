import React, { useState } from 'react';
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
    text-shadow: 0px 0px 5px violet;
    color: violet;
  }
`;

const Burger = () => {
    const [menuVisible, setMenuVisible] = useState(false);
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
            <StyledLink to="/myTracks" >Мой плейлист</StyledLink>
            </S.MenuItem>
            <S.MenuItem>
            <StyledLink to="/login">Выйти</StyledLink>
            </S.MenuItem>
            <img src={night_gay} alt="day's playlist"/>
          </S.MenuList>
        </S.NavMenu> 
      </S.MainNav>
}

export default Burger;
