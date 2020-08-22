import React, { Component } from 'react';

import '../styles/components/VideoInfoComponent.scss';

import LikesIcon from '../assets/icons/png/icon-likes.png';
import LikesIconBlue from '../assets/icons/png/icon-likes-blue.png';
import ViewsIcon from '../assets/icons/png/icon-views.png';

// The info component displaying title, description, likes, etc for the selected video
class VideoInfoComponent extends Component {
  render() {
    const {
      title,
      channel,
      timestamp,
      views,
      likes,
      description,
    } = this.props.video;

    const date = timestamp ? new Date(timestamp).toLocaleDateString() : 'Unknown date';
    return (
      <div className='video-info'>

        <h1 className='video-info__title'>{title}</h1>

        {/* The channel and the date of upload */}
        <div className='video-info__second-row'>
          <h3 className='video-info__channel'>{`By ${channel}`}</h3>
          <p className='video-info__timestamp'>{date}</p>
        </div>

        {/* The video's views and likes */}
        <div className='video-info__third-row'>
          <img className='video-info__icon' src={ViewsIcon} alt='The views icon' />
          <p className='video-info__count'>{views ? views : 0}</p>
          <img
            className='video-info__icon'
            src={this.props.liked ? LikesIconBlue : LikesIcon} alt='The likes icon'
            onClick={this.props.handleLike}
          />

          <p className='video-info__count'>{likes ? likes: 0}</p>
        </div>

        <p className='video-info__desc'>{description ? description: 'No description'}</p>
      </div>
    )
  }
}

export default VideoInfoComponent;
