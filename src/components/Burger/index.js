import React, { useState } from 'react';
import * as S from './style'
import logo from "../../img/logo.png";
import night_gay from "../../img/night:sun.png";

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
              <S.MenuLink href="#">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">Войти</S.MenuLink>
            </S.MenuItem>
            <img src={night_gay} alt="day's playlist"/>
          </S.MenuList>
        </S.NavMenu> 
      </S.MainNav>
}

export default Burger;