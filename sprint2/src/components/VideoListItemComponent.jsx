import React, { Component } from 'react';

// A component for a suggested video item
class VideoListItemComponent extends Component {
  render() {
    const {
      image,
      title,
      channel
    } = this.props;

    return (
      <div className='video-item'>

        {/* The video thumbnail */}
        <img
          className='video-item__img'
          src={require(`../assets/images/${image}.jpg`)}
          alt='The video thumbnail' />

        {/* The video details */}
        <div className='video-item__right'>
          <h3 className='video-item__title'>{title}</h3>
          <p className='video-item__channel'>{channel}</p>
        </div>
      </div>
    )
  }
}

export default VideoListItemComponent;
