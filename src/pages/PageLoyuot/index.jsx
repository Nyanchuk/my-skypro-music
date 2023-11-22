import Burger from "../../components/Burger/index";
import Main from "../../components/Main/index";
import Sidebar from "../../components/Sidebar/index";
import Bar from "../../components/Bar/index";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import MyTracks from "../../components/MyTracks";
import PlaylistPage from "../../components/PlaylistPage/index";
import { fetchLikedTracksThunk } from "../../store/actions/thunks/playerThunks";
import { useDispatch } from "react-redux";

function PageLayuot() {

  const dispatch = useDispatch();
  const location = useLocation();
  const [isTrackClicked, setIsTrackClicked] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchLikedTracksThunk());
  }, [dispatch]);

  // Функция, которая будет вызываться при клике на трек в компоненте Main
  const handleTrackClick = (track, index) => {
    setSelectedTrack(track);
    setSelectedTrackIndex(index);
    setIsTrackClicked(true);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Burger />
          {location.pathname === "/" ? (
            <Main onTrackClick={handleTrackClick} />
          ) : location.pathname === "/favorites" ? (
            <MyTracks onTrackClick={handleTrackClick} />
          ) : location.pathname.includes('/category/') ? ( // Проверяем, содержит ли путь '/category/', указывающий на наличие id
            <PlaylistPage onTrackClick={handleTrackClick} />
          ) : null}
          <Sidebar />
          
        </S.Main>
        {isTrackClicked && (
          <Bar track={selectedTrack} trackIndex={selectedTrackIndex} />
        )}
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default PageLayuot;

