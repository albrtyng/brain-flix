import React, { Component, createRef } from 'react';

import '../styles/components/VideoPlayerComponent.scss'

import FullscreenIcon from '../assets/icons/svg/icon-fullscreen.svg';
import PlayIcon from '../assets/icons/svg/icon-play.svg';
import PauseIcon from '../assets/icons/svg/icon-pause.svg';
import VolumeIcon from '../assets/icons/svg/icon-volume.svg';

// The player controls for the selected video
class VideoPlayerComponent extends Component {
  state = {
    paused: true,
    muted: false,
    current: 0,
    videoLength: null
  }
  videoRef = createRef();
  scrubberRef = createRef();

  componentDidMount() {
    setInterval(() => this.getCurrentVideoTime(), 10);
    setInterval(() => {
      if (this.state.videoLength === null) {
        const { duration } = this.videoRef.current;
        if (duration) {
          this.setState({videoLength: duration.toFixed()})
        }
      }
    }, 250)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id 
      && !this.state.paused) {
      this.setState({ paused: true });
    }
  }

  handleScrubberChange() {
    this.videoRef.current.currentTime = this.scrubberRef.current.value;

    this.setState({
      current: this.scrubberRef.current.value
    });
  }

  getCurrentVideoTime() {
    let current = this.videoRef.current.currentTime.toFixed();
    let formattedTime = this.videoTimeConversion(current);

    this.setState({
      current: current,
      formattedTime: formattedTime
    });

    if (this.state.current === this.state.videoLength) {
      this.setState({ paused: true });
    }
  }

  play() {
    if (this.videoRef.current.getAttribute('src')) {
      this.setState({
        paused: this.state.paused !== undefined ? !this.state.paused : false
      }, () => {
        if (this.state.paused) {
          this.videoRef.current.pause();
        } else {
          this.videoRef.current.play();
        }
      });
    }
  }

  videoTimeConversion = (duration) => {
    const minutes = Math.floor((duration) / 60);
    const seconds = duration - minutes * 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  render() {
    const {
      duration,
      image,
      video
    } = this.props.video;

    return (
      <div className='player'>

        {/* The controls */}
        <div className='player__controls'>
          <div className='player__control player__control--play'>
            <img
              className='player__control-icon'
              src={this.state.paused ? PlayIcon : PauseIcon}
              alt='The play icon'
              onClick={() => this.play()}
            />
          </div>

          <div className='player__control player__control--progress'>
            <input
              ref={this.scrubberRef}
              type='range'
              onChange={() => this.handleScrubberChange()}
              value={this.state.current}
              step={0.1}
              min={0}
              max={this.state.videoLength}
            />
            <p className='player__time'>{ `${this.state.formattedTime} / ${duration ? duration : '0:00'}` }</p>
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
        <figure className='player__video'>
          <video
            ref={this.videoRef}
            poster={image ?
              (image.startsWith('https://')
                ? image
                : require('../assets/images/upload-video-preview.jpg'))
              : null }
            src={video ?
              (video.startsWith("https://")
                ? ''
                : require('../assets/video/brainstation-sample-video.mp4')
              ) : null}
          ></video>
        </figure>
      </div>
    );
  }
}

export default VideoPlayerComponent;