import React from 'react';

const VideoItemComponent = (props) => {
  return (
    <div className='video-item'>
      <img
        className='video-item__img'
        src={require(`../assets/images/${props.src}.jpg`)}
        alt='The video thumbnail' />
      <div className='video-item__right'>
        <h3 className='video-item__title'>{props.title}</h3>
        <p className='video-item__author'>{props.author}</p>
      </div>
    </div>
  )
}

export default VideoItemComponent;
