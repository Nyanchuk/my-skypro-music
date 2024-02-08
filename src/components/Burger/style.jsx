import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

// Стили для бургера

export const Link = styled(RouterLink)`
  margin-bottom: 10px;
  text-decoration: none;
  color: #ffffff;
  transition: all .3s;
  &:hover {
    text-shadow: 0 0 7px #b7ff00;
    color: #b7ff00;
  }
`;

export const MainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
  `
export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
  `
export const LogoImg = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
  `
export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  `
export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
  &:hover {
    text-shadow: 0 0 7px #b7ff00;
    color: #b7ff00;
  }
  `
export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
  `
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  `
export const MenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  transition: all .3s;
  &:hover {
    text-shadow: 0 0 7px #b7ff00;
    color: #b7ff00;
  }
  `
export const NavMenu = styled.div`
display: block;
visibility: visible;
max-height: ${({ $menuVisible }) => $menuVisible ? '500px' : '0'};
overflow: hidden;
transition: max-height 0.3s ease-in-out;
  `
  