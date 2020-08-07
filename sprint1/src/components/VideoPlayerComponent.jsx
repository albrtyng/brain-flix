import React from 'react';

import VideoThumb from '../assets/images/video-list-0.jpg';
import FullscreenIcon from '../assets/icons/svg/icon-fullscreen.svg';
// import PauseIcon from '../assets/icons/svg/icon-pause.svg';
import PlayIcon from '../assets/icons/svg/icon-play.svg';
import VolumeIcon from '../assets/icons/svg/icon-volume.svg';

const VideoPlayerComponent = () => {
  return (
    <div className='player'>
      <div className='player__controls'>
      <div className='player__control player__control--play'>
          <img
            className='player__control-icon'
            src={PlayIcon}
          />
        </div>
        <div className='player__control player__control--progress'>
          <progress value="0" max="100"></progress>
        </div>
        <div className='player__control player__control--fsvol'>
          <img
            className='player__control-icon'
            src={FullscreenIcon}
          />
          <img
            className='player__control-icon'
            src={VolumeIcon}
          />
        </div>
      </div>
      <video
        className='player__video'
        poster={VideoThumb}
      >
      </video>
    </div>
  );
}

export default VideoPlayerComponent;