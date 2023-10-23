import { useEffect, useState, useRef } from "react";
import sprite from "../../img/icon/sprite.svg";
import * as S from './style'
import { useSelector } from 'react-redux';

const Bar = () => {

  const track = useSelector(state => state.player.currentTrack) || {};

  const audioRef = useRef();                            // Создаем ref для проигрывания трека
  const [isPlaying, setIsPlaying] = useState(false);    // Состояние для остановки трека
  const [volume, setVolume] = useState(1.0);            // Состояние начальной максимальной громкости
  const [isLooping, setIsLooping] = useState(false);    // Состояние:изначально трек не зациклен
  const [currentTime, setCurrentTime] = useState(0);    // Состояние для текущево времени трека
  const [duration, setDuration] = useState(0);          // Состояние для общей продолжительности трека

  // ВСЕ ЧТО КАСАЕТСЯ ВКЛЮЧЕНИЯ ТРЕКА
  useEffect(() => {
    if (track?.track_file && audioRef.current) {
      audioRef.current.src = track.track_file;
      audioRef.current.load();
      setIsPlaying(true);
    }
    
    return () => {
      setIsPlaying(false);  // этот код выполнится, когда трек будет сменен
    };
  }, [track]);
  
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const playPromise = audioRef.current.play();
    
      if (playPromise !== undefined) {
        playPromise
          .then(_ => {})
          .catch(error => {
            console.log(error);
            setIsPlaying(false);
          });
      }
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPauseClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // ВСЕ ЧТО КАСАЕТСЯ ИЗМЕНЕНИЯ ГРОМКОСТИ ТРЕКА
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const handleVolumeChange = (event) => {
    let value = event.target.value;
    setVolume(value / 100);
  };

  // ВСЕ ЧТО КАСАЕТСЯ ЗАЦИКЛИВАНИЯ ТРЕКА
  const handleLoopClick = () => {
    setIsLooping(!isLooping);
  };
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  // ВСЕ ЧТО КАСАЕТСЯ ОБНОВЛЕНИЯ ТЕКУЩЕГО ВОСПРОИЗВЕДЕНИЯ ТРЕКА
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 500);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  // обработчик события загрузки метаданных
  const handleMetadataLoad = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // обработчик события клика по полосе прогресса
  const handleProgressClick = (event) => {
    if (audioRef.current) {
      setCurrentTime(event.target.value);
      audioRef.current.currentTime = event.target.value;
    }
  };

  // ВСЕ ЧТО КАСАЕТСЯ ВИЗУАЛИЗАЦИИ ТАЙМИНГА ТРЕКА
  const formatTime = (time) => {
    const roundTime = Math.round(time);
    const minutes = Math.floor(roundTime / 60);
    const seconds = roundTime - minutes * 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;


    return `${minutes}:${formattedSeconds}`;
  };

    return <S.Bar>
            <S.BarContent>
              <S.BarPlayerProgress
              type="range" 
              value={currentTime}
              max={duration}
              onChange={handleProgressClick}>
              </S.BarPlayerProgress>
              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <S.PlayerControls>
                    <S.PlayerBtnPrev>
                      <S.BtnPrevSvg alt="prev">
                        <use href={`${sprite}#icon-prev`} />
                      </S.BtnPrevSvg>
                    </S.PlayerBtnPrev>
                    <S.PlayerButtonPlay onClick={handlePlayPauseClick}>
                    <audio 
                    onLoadedMetadata={handleMetadataLoad}
                    src={track?.track_file} 
                    ref={audioRef} 
                    controls 
                    style={{ display: "none" }}></audio>

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
                    <S.PlayerBtnRepeat onClick={handleLoopClick}>
                      <S.PlayerBtnRepeatSvg alt="repeat">
                      {isLooping 
                        ? <use href={`${sprite}#icon-repeat`} />
                        : <use href={`${sprite}#icon-norepeat`} />
                      }
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
                      <S.CurrentTime> {formatTime(currentTime)} </S.CurrentTime>
                    </S.TrackPlayLikeDis>
                  </S.TrackPlay>
                </S.BarPlayer>
                <S.BarVolumeBlock>
                  <S.VolumeContent>
                  <S.RemainingTime> {formatTime(duration - currentTime)} </S.RemainingTime>
                    <S.VolumeImg>
                      <S.VolumeSvg alt="volume">
                        <use href={`${sprite}#icon-volume`} />
                      </S.VolumeSvg>
                    </S.VolumeImg>
                    <S.VolumeProgress>
                    <S.VolumeProgressLine type="range" name="range" value={volume * 100} max={100} onChange={handleVolumeChange}/>
                    </S.VolumeProgress>
                  </S.VolumeContent>
                </S.BarVolumeBlock>
              </S.BarPlayerBlock>
            </S.BarContent>
    </S.Bar>    
}

export default Bar;
