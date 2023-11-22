import playlist1 from "../../img/PLAY4.jpg";
import playlist2 from "../../img/PLAY3.jpg";
import playlist3 from "../../img/PLAY1.jpg";
import sprite from "../../img/icon/sprite.svg";
import React, { useState, useEffect, useContext } from 'react';
import * as S from './style'
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context';

const Sidebar = () => {

    const location = useLocation();
    const { username, setUsername } = useContext(UserContext); 
    const [isLoading, setLoading] = useState(true);

    // ФУНКЦИЯ ДЛЯ СБРОСА ПОЛЬЗОВАТЕЛЯ
    useEffect(() => {
        const storedUserData = localStorage.getItem('UserData');
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setUsername(parsedUserData.username); // обновляем значение username в контексте
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('UserData');
        localStorage.removeItem('User'); // удаление токена пользователя
        setUsername(null);
      };

    // ФУНКЦИЯ ДЛЯ СКЕЛЕТОНА КАТЕГОРИЙ
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    const renderImage = (src, altText) => (
        <S.SidebarImg src={src} alt={altText} />
    );

    const renderSkeleton = () => (
        <S.SidebarSkeleton></S.SidebarSkeleton>
    );

    return ( 
        <S.MainSidebar>
        <S.SidebarPersonal>
                <S.SidebarPersonalName>{username}</S.SidebarPersonalName>
            <Link to="/login"> 
                <S.Icon onClick={handleLogout}>
                    <svg alt="logout">
                        <use href={`${sprite}#logout`} />
                    </svg>
                </S.Icon>
            </Link>
        </S.SidebarPersonal>
        {location.pathname === '/' && (
        <S.SidebarBlock>
            <S.SidebarList>
                <S.SidebarItem>
                    <Link to="/category/1">
                    {isLoading ? renderSkeleton() : renderImage(playlist1, "Classic")}
                    </Link>
                </S.SidebarItem>
                <S.SidebarItem>
                <Link to="category/2">
                {isLoading ? renderSkeleton() : renderImage(playlist2, "Electro")}
                </Link>
                </S.SidebarItem>
                <S.SidebarItem>
                <Link to="category/3">
                {isLoading ? renderSkeleton() : renderImage(playlist3, "Rock")}
                </Link>
                </S.SidebarItem>
            </S.SidebarList>
        </S.SidebarBlock>
           )}
    </S.MainSidebar>
    );
};

export default Sidebar;
