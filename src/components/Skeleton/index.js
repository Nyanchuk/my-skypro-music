import React from 'react';

function TrackSkeleton() {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track-skeleton">
          <div className="track-skeleton__rectangle" style={{ width: '5%' }}></div>
          <div className="track-skeleton__rectangle" style={{ width: '80%', height: '30px' }}></div>
          <div className="track-skeleton__rectangle" style={{ width: '15%', height: '30px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default TrackSkeleton;