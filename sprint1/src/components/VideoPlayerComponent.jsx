import React from 'react';

import FullscreenIcon from '../assets/icons/svg/icon-fullscreen.svg';
// import PauseIcon from '../assets/icons/svg/icon-pause.svg';
import PlayIcon from '../assets/icons/svg/icon-play.svg';
import VolumeIcon from '../assets/icons/svg/icon-volume.svg';

// The player controls for the selected video
const VideoPlayerComponent = (props) => {
  const {
    duration,
    image
  } = props.video;

  return (
    <div className='player'>

      {/* The controls */}
      <div className='player__controls'>
        <div className='player__control player__control--play'>
          <img
            className='player__control-icon'
            src={PlayIcon}
            alt='The play icon'
          />
        </div>
        <div className='player__control player__control--progress'>
          <progress value='0' max='100'></progress>
          <p className='player__time'>{ `0:00 / ${duration === '' ? '0:00' : duration}` }</p>
        </div>
        <div className='player__control player__control--fsvol'>
          <img
            className='player__control-icon'
            src={FullscreenIcon}
            alt='The fullscreen icon'
          />
          <img
            className='player__control-icon'
            src={VolumeIcon}
            alt='The volume control icon'
          />
        </div>
      </div>

      {/* The video */}
      <video
        className='player__video'
        poster={require(`../assets/images/${image}.jpg`)}
      >
      </video>
    </div>
  );
}

export default VideoPlayerComponent;