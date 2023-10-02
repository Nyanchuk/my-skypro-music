import styled from 'styled-components';

// Стили для главной страницы

export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
background-color: #383838;
`
export const Container = styled.div`
max-width: 1920px;
height: auto;
margin: 0 auto;
position: relative;
background-color: #181818;
`
export const Main = styled.main`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
export const MainCenterBlock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`
export const CenterBlockSearch = styled.div`
width: 100%;
border-bottom: 1px solid #4e4e4e;
margin-bottom: 51px;
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
`
export const SearchSvg = styled.svg`
width: 17px;
height: 17px;
margin-right: 5px;
stroke: #ffffff;
fill: transparent;
`
export const SearchText = styled.input`
-webkit-box-flex: 100;
-ms-flex-positive: 100;
flex-grow: 100;
background-color: transparent;
border: none;
padding: 13px 10px 14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
&:-webkit-input-placeholder {
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
&:-ms-input-placeholder {
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
&:-ms-input-placeholder {
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
&:placeholder {
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
`
export const CenterBlockH2 = styled.h2`
color: violet;
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`
export const CenterBlockFilter = styled.div`
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
margin-bottom: 51px;
`
export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`
export const FilterPerformWrap = styled.div`
position: relative;
`
export const FilterPerformList = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 10px;
font-weight: 300;
font-size: 14px;
height: 200px;
position: absolute;
left: 15px;
right: 0;
padding: 10px;
width: 200px;
background-color: #454444;
border: 1px solid transparent;
border-radius: 10px;
z-index: 1;
margin-top: 10px;
overflow-y: auto;
&::-webkit-scrollbar {
  border: 1px solid #5e5d5d;
  border-radius: 10px;
  width: 8px;
  background-color: #5e5d5d;
}
&::-webkit-scrollbar-thumb {
  border: 1px solid violet;
  border-radius: 10px;
  background-color: violet;
}
`
export const FilterPerformItem = styled.div`
padding: 5px 10px;
cursor: pointer;
transition: all .5s;
&:hover {
  color: violet;
  transform: scale(1.02);
}
`
export const CenterBlockContent = styled.div`
padding-bottom: 50px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`
export const ContentTitle = styled.div`
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
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;
`
export const PlaylistTitleCol = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
${({ $columnType }) =>
    $columnType === 'c_ol01' &&
    `
    width: 447px;
  `}

  ${({ $columnType }) =>
    $columnType === 'c_ol02' &&
    `
    width: 321px;
  `}

  ${({ $columnType }) =>
    $columnType === 'c_ol03' &&
    `
    width: 245px;
  `}

  ${({ $columnType }) =>
    $columnType === 'c_ol04' &&
    `
    width: 60px;
    text-align: end;
  `}
`
export const PlaylistTitleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const ContentPlaylist = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;
`
export const PlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
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
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
export const TrackTitle = styled.div`
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
width: 447px;
`
export const TrackTitleImg = styled.div`
width: 51px;
height: 51px;
padding: 16px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 17px;
`
export const TrackTitleSvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`
export const TrackTitleText = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`
export const TrackTitleLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
`
export const TrackTitleSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4e4e4e;
`
export const TrackAuthor = styled.div`
width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
export const TrackAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
text-align: left;
`
export const TrackAlbum = styled.div`
width: 245px;
`
export const TrackAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`
export const TrackTime = styled.div`

`
export const TrackTimeSvg = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`
export const TrackTimeText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`
export const Footer = styled.footer`

`

