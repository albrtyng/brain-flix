import React, { Component } from 'react';

import VideoListItemComponent from './VideoListItemComponent';

// The container for the list of suggested videos
class VideoListComponent extends Component {
  render () {
    return (
      <div className='videos'>
        <h3 className='videos__next'>Next video</h3>
        { this.props.videos.map(video => <VideoListItemComponent key={video.id} {...video} />) }
      </div>
    )
  }
}

export default VideoListComponent;