import playlist1 from "../../img/play1.JPEG";
import playlist2 from "../../img/play2.JPEG";
import playlist3 from "../../img/play3.JPEG";
import playlist4 from "../../img/play4.JPEG";
import sprite from "../../img/icon/sprite.svg";
import React, { useState, useEffect, useContext } from 'react';
import * as S from './style'
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context';



const Sidebar = () => {
    const { username, setUsername } = useContext(UserContext); // предполагается, что setUsername доступна в контексте
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


// const Sidebar = () => {
//     const { username } = useContext(UserContext);
//     const [user, setUser] = useState(null);
//     const [isLoading, setLoading] = useState(true);

//     // ФУНКЦИЯ ДЛЯ СБРОСА ПОЛЬЗОВАТЕЛЯ
//     useEffect(() => {
//         const storedUser = localStorage.getItem('User');
//         if (storedUser) {
//           const parsedUser = JSON.parse(storedUser);
//           setUser(parsedUser);
//         }
//     }, []);

//     const handleLogout = () => {
//       localStorage.removeItem('User');
//       setUser(null);
//     };

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
        <S.SidebarBlock>
            <S.SidebarList>
                <S.SidebarItem>
                    <Link to="category/1">
                    {isLoading ? renderSkeleton() : renderImage(playlist1, "day's playlist")}
                    </Link>
                </S.SidebarItem>
                <S.SidebarItem>
                <Link to="category/2">
                {isLoading ? renderSkeleton() : renderImage(playlist2, "day's playlist")}
                </Link>
                </S.SidebarItem>
                <S.SidebarItem>
                <Link to="category/3">
                {isLoading ? renderSkeleton() : renderImage(playlist3, "day's playlist")}
                </Link>
                </S.SidebarItem>
                <S.SidebarItem>
                <Link to="category/4">
                {isLoading ? renderSkeleton() : renderImage(playlist4, "day's playlist")}
                </Link>
                </S.SidebarItem>
            </S.SidebarList>
        </S.SidebarBlock>
    </S.MainSidebar>
    );
};

export default Sidebar;
