import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// A component for a suggested video item
class VideoListItemComponent extends Component {
  render() {
    const {
      id,
      image,
      title,
      channel
    } = this.props;

    return (
      <Link to={`/videos/${id}`} className='video-item'>

        {/* The video thumbnail */}
        <img
          className='video-item__img'
          src={image}
          alt='The video thumbnail' />

        {/* The video details */}
        <div className='video-item__right'>
          <h3 className='video-item__title'>{title}</h3>
          <p className='video-item__channel'>{channel}</p>
        </div>
      </Link>
    )
  }
}

export default VideoListItemComponent;
