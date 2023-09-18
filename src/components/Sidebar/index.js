import playlist1 from "../../img/play1.JPEG";
import playlist2 from "../../img/play2.JPEG";
import playlist3 from "../../img/play3.JPEG";
import playlist4 from "../../img/play4.JPEG";
import sprite from "../../img/icon/sprite.svg";
// СКЕЛЕТОН
import React, { useState, useEffect } from 'react';

const Sidebar = () => {

    // функция для СКЕЛЕТОН
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    const renderImage = (src, altText) => (
        <img className="sidebar__img" src={src} alt={altText} />
    );

    const renderSkeleton = () => (
        <div className="sidebar__skeleton"></div>
    );

    return ( 
        <div className="main__sidebar sidebar">
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
                {isLoading ? renderSkeleton() : renderImage(playlist1, "day's playlist")}
                </a>
                </div>
                <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                {isLoading ? renderSkeleton() : renderImage(playlist2, "day's playlist")}
                </a>
                </div>
                <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                {isLoading ? renderSkeleton() : renderImage(playlist3, "day's playlist")}
                </a>
                </div>
                <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                {isLoading ? renderSkeleton() : renderImage(playlist4, "day's playlist")}
                </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Sidebar;