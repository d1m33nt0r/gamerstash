import React from 'react';

const VideoView = ({ content, onLoad }) => {
  return (
    <video
      style={{ width: '100%', height: '100%' }}
      autoPlay
      muted
      loop
      onLoadedData={onLoad}
    >
      <source src={content} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoView;
