import React from 'react';
import * as S from './style'

function TrackSkeleton() {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackSkeleton>
          <S.TrackSkeletonRec style={{ width: '5%' }}></S.TrackSkeletonRec>
          <S.TrackSkeletonRec style={{ width: '80%', height: '30px' }}></S.TrackSkeletonRec>
          <S.TrackSkeletonRec style={{ width: '15%', height: '30px' }}></S.TrackSkeletonRec>
        </S.TrackSkeleton>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}

export default TrackSkeleton;