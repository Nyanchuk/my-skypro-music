import styled from 'styled-components';

export const Bar = styled.div`
position: fixed;
bottom: 0;
right: 0;
top: auto;
width: 100%;
background: rgba(28, 28, 28, 0.5);
`
export const BarContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`
export const BarPlayerProgress = styled.input.attrs( props => ({
  style: {
    background: `linear-gradient(
      to right, 
      #a9fd0d 0%, #a9fd0d ${(props.value / props.max) * 100}%, 
      #383838 ${(props.value / props.max) * 100}%, #383838 100%
    )`
  },
  type: 'range',
}))
`
  -webkit-appearance: none; 
  appearance: none;
  width: 100%;
  height: 3px;
  outline: none;
  transition: opacity .2s;
  border-radius: 1.3px;
  &::-webkit-slider-thumb {
     -webkit-appearance: none;
     height: 18px;
     width: 18px;
     border-radius: 50%;
     cursor: pointer;
     margin-top: -5px;
     border: 1px solid #a9fd0d;
     background-color: #383838;
  }
  `;

export const BarPlayerBlock = styled.div`
height: 73px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
export const BarPlayer = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
export const PlayerControls = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
padding: 0 27px 0 31px;
`
export const PlayerBtnPrev = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-right: 23px;
`
export const BtnPrevSvg = styled.svg`
width: 15px;
height: 14px;
`
export const BtnPlaySvg = styled.svg`
width: 22px;
height: 20px;
fill: #d9d9d9;
`
// СТИЛИ ДЛЯ BUTTON

// _btn
const StyledGlobalButtonStyles = styled.div`
cursor: pointer;
`
// _btn-icon
const StyledGlobalButtonIcon = styled.div`
&:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}
&:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}
`

// СТИЛИ ДЛЯ PLAYER

export const PlayerButtonPlay = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-right: 23px;
${StyledGlobalButtonStyles} {
  cursor: pointer;
}
`
export const PlayerButtonNext = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-right: 28px;
fill: #a53939;
`
export const PlayerBtnNextSvg = styled.svg`
width: 15px;
height: 14px;
fill: inherit;
stroke: #d9d9d9;
`
export const PlayerBtnRepeat = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-right: 24px;
${StyledGlobalButtonIcon} {
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    
}
}
`
export const PlayerBtnRepeatSvg = styled.svg`
width: 18px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const PlayerBtnShuffle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
${StyledGlobalButtonIcon} {
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    
}
}
`
export const PlayerBtnShuffleSvg = styled.svg`
width: 19px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const TrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
`
export const TrackPlayContain = styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author" "image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
export const TrackPlayImg = styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 12px;
grid-row: 1;
-ms-grid-row-span: 2;
grid-column: 1;
grid-area: image;
`
export const TrackPlaySvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`
export const TrackPlayAuthor = styled.div`
grid-row: 1;
grid-column: 2;
grid-area: author;
min-width: 49px;
`
export const TrackPlayAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
white-space: nowrap;
`
export const TrackPlayAlbum = styled.div`
grid-row: 2;
grid-column: 2;
grid-area: album;
min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #ffffff;
`
export const TrackPlayLikeDis = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-left: 26%;
`
export const TrackPlayLike = styled.div`
padding: 5px;
${StyledGlobalButtonIcon} {
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff; 
}
}
`
export const TrackPlayLikeSvg = styled.svg`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const TrackPlayDislike = styled.div`
padding: 5px;
margin-left: 28.5px;
${StyledGlobalButtonIcon} {
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff; 
}
}
`
export const TrackPlayDislikeSvg = styled.svg`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;
`

// СТИЛИ ДЛЯ VOLUME

export const BarVolumeBlock = styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: end;
`
export const VolumeImg = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`
export const VolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;
`
export const VolumeProgress = styled.div`
width: 109px;
${StyledGlobalButtonStyles} {
  cursor: pointer;
}
`

export const VolumeProgressLine = styled.input.attrs( props => ({
  style: {
    background: `linear-gradient(
      to right, 
      #a9fd0d 0%, #a9fd0d ${(props.value / props.max) * 100}%, 
      #383838 ${(props.value / props.max) * 100}%, #383838 100%
    )`
  },
  type: 'range',
}))
`
  -webkit-appearance: none; 
  appearance: none;
  height: 3px;
  outline: none;
  transition: opacity .2s;
  border-radius: 1.3px;
  &::-webkit-slider-thumb {
     -webkit-appearance: none;
     height: 18px;
     width: 18px;
     border-radius: 50%;
     cursor: pointer;
     margin-top: -3px;
     border: 1px solid #a9fd0d;
     background-color: #383838;
  }
  &::-moz-range-thumb {
     width: 18px;
     height: 18px;
     border-radius: 50%;
     border: 1px solid #a9fd0d;
     background-color: #383838; 
     cursor: pointer;
   }
   ${StyledGlobalButtonStyles} {
     cursor: pointer;
   }
  `;

  export const RemainingTime = styled.div`
  margin-right: 25px;
  `
  export const CurrentTime = styled.div`
  margin-left: 25px;
  `
