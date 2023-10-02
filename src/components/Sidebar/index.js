import playlist1 from "../../img/play1.JPEG";
import playlist2 from "../../img/play2.JPEG";
import playlist3 from "../../img/play3.JPEG";
import playlist4 from "../../img/play4.JPEG";
import sprite from "../../img/icon/sprite.svg";
import React, { useState, useEffect } from 'react';
import * as S from './style'
import { Link } from 'react-router-dom';


const Sidebar = () => {

    // функция для СКЕЛЕТОН
    const [isLoading, setLoading] = useState(true);

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
            <Link to="/login"> 
                <S.SidebarPersonalName>Выйти</S.SidebarPersonalName>
            </Link>
            <S.Icon>
                <svg alt="logout">
                    <use href={`${sprite}#logout`} />
                </svg>
            </S.Icon>
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
