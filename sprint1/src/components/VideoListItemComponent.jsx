import React from 'react';

// A component for a suggested video item
const VideoListItemComponent = (props) => {
  return (
    <div className='video-item'>

      {/* The video thumbnail */}
      <img
        className='video-item__img'
        src={require(`../assets/images/${props.image}.jpg`)}
        alt='The video thumbnail' />

      {/* The video details */}
      <div className='video-item__right'>
        <h3 className='video-item__title'>{props.title}</h3>
        <p className='video-item__channel'>{props.channel}</p>
      </div>
    </div>
  )
}

export default VideoListItemComponent;
