import React from 'react';

import LikesIcon from '../assets/icons/svg/icon-likes.svg';
import ViewsIcon from '../assets/icons/svg/icon-views.svg';

// The info component displaying title, description, likes, etc for the selected video
const VideoInfoComponent = (props) => {
  const {
    title,
    channel,
    timestamp,
    views,
    likes,
    description
  } = props.video;

  return (
    <div className='video-info'>

      <h1 className='video-info__title'>{title}</h1>

      <div className='video-info__second-row'>
        <h3 className='video-info__channel'>{`By ${channel}`}</h3>
        <p className='video-info__timestamp'>{timestamp === '' ? 'Unknown date' : timestamp}</p>
      </div>

      <div className='video-info__third-row'>
        <img className='video-info__icon' src={ViewsIcon} alt='The views icon' />
        <p className='video-info__count'>{views === '' ? 0 : views}</p>
        <img className='video-info__icon' src={LikesIcon} alt='The likes icon' />
        <p className='video-info__count'>{likes === '' ? 0 : likes}</p>
      </div>

      <p className='video-info__desc'>{description === '' ? 'No description' : description}</p>
    </div>
  )
}

export default VideoInfoComponent;
