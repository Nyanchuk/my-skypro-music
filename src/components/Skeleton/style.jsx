import styled from 'styled-components';

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
export const TrackSkeleton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
width: 100%;
`
export const TrackSkeletonRec = styled.div`
background-color: #e0e0e035;
border-radius: 5px;
height: 50px;
width: 20%;
animation: pulse 2s ease-in-out infinite;

@keyframes pulse {
  0% {
    background-color: #e0e0e035;
  }
  50% {
    background-color: #e0e0e050;
  }
  100% {
    background-color: #e0e0e035;
  }
}
`