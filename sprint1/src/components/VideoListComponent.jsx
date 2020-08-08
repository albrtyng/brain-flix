import React from 'react';
import VideoListItemComponent from './VideoListItemComponent';

const VideoListComponent = (props) => {
  return (
    <div className='videos'>
      <h3 className='videos__next'>Next video</h3>
      { props.videos.map(video => <VideoListItemComponent key={video.id} {...video} />) }
    </div>
  )
}

export default VideoListComponent;