import { useEffect, useState, useRef } from "react";
import sprite from "../../img/icon/sprite.svg";
import * as S from './style'

const Bar = ({track}) => {

  const audioRef = useRef();                            // Создаем ref для проигрывания трека
  const [isPlaying, setIsPlaying] = useState(false);    // Состояние для остановки трека

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(true);
  
      setTimeout(() => {
        audioRef.current.play();
      }, 100);                                          // Ждём перед воспроизведением
    }
  }, [track]);

  // Функция для начала и остановки воспроизведения
  const handlePlayPauseClick = () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);                           // Обновляем состояние воспроизведения
  };

    return <S.Bar>
            <S.BarContent>
              <S.BarPlayerProgress></S.BarPlayerProgress>
              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <S.PlayerControls>
                    <S.PlayerBtnPrev>
                      <S.BtnPrevSvg alt="prev">
                        <use href={`${sprite}#icon-prev`} />
                      </S.BtnPrevSvg>
                    </S.PlayerBtnPrev>


                    
                    <S.PlayerButtonPlay onClick={handlePlayPauseClick}>
                    <audio src={track?.track_file} ref={audioRef} controls style={{ display: "none" }}></audio>
                      {isPlaying 
                      ? <S.BtnPlaySvg alt="pause"> 
                          <use href={`${sprite}#icon-pause`} />
                        </S.BtnPlaySvg> 
                      : <S.BtnPlaySvg alt="play"> 
                          <use href={`${sprite}#icon-play`} />
                        </S.BtnPlaySvg>
                    }
                    </S.PlayerButtonPlay>



                    <S.PlayerButtonNext>
                      <S.PlayerBtnNextSvg alt="next">
                        <use href={`${sprite}#icon-next`} />
                      </S.PlayerBtnNextSvg>
                    </S.PlayerButtonNext>
                    <S.PlayerBtnRepeat>
                      <S.PlayerBtnRepeatSvg alt="repeat">
                        <use href={`${sprite}#icon-repeat`} />
                      </S.PlayerBtnRepeatSvg>
                    </S.PlayerBtnRepeat>
                    <S.PlayerBtnShuffle>
                      <S.PlayerBtnShuffleSvg alt="shuffle">
                        <use href={`${sprite}#icon-shuffle`} />
                      </S.PlayerBtnShuffleSvg>
                    </S.PlayerBtnShuffle>
                  </S.PlayerControls>
                  <S.TrackPlay>
                    <S.TrackPlayContain>
                      <S.TrackPlayImg>
                        <S.TrackPlaySvg alt="music">
                            <use href={`${sprite}#icon-note`} />
                        </S.TrackPlaySvg>
                      </S.TrackPlayImg>
                      <S.TrackPlayAuthor>
                        <S.TrackPlayAuthorLink href="http://">{track.name}</S.TrackPlayAuthorLink>
                      </S.TrackPlayAuthor>
                      <S.TrackPlayAlbum>
                        <S.TrackPlayAlbumLink href="http://">{track.author}</S.TrackPlayAlbumLink>
                      </S.TrackPlayAlbum>
                    </S.TrackPlayContain>
                    <S.TrackPlayLikeDis>
                      <S.TrackPlayLike>
                        <S.TrackPlayLikeSvg alt="like">
                            <use href={`${sprite}#icon-like`} />
                        </S.TrackPlayLikeSvg>
                      </S.TrackPlayLike>
                      <S.TrackPlayDislike>
                        <S.TrackPlayDislikeSvg alt="dislike">
                            <use href={`${sprite}#icon-dislike`} />
                        </S.TrackPlayDislikeSvg>
                      </S.TrackPlayDislike>
                    </S.TrackPlayLikeDis>
                  </S.TrackPlay>
                </S.BarPlayer>
                <S.BarVolumeBlock>
                  <S.VolumeContent>
                    <S.VolumeImg>
                      <S.VolumeSvg alt="volume">
                        <use href={`${sprite}#icon-volume`} />
                      </S.VolumeSvg>
                    </S.VolumeImg>
                    <S.VolumeProgress>
                      <S.VolumeProgressLine type="range" name="range" />
                    </S.VolumeProgress>
                  </S.VolumeContent>
                </S.BarVolumeBlock>
              </S.BarPlayerBlock>
            </S.BarContent>
    </S.Bar>    
}

export default Bar;
