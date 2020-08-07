import React from 'react';

import LikesIcon from '../assets/icons/svg/icon-likes.svg';
import ViewsIcon from '../assets/icons/svg/icon-views.svg';

const VideoInfoComponent = () => {
  return (
    <div className='video-info'>
      <h1 className='video-info__title'>BMX Rampage: 2018 Highlights</h1>
      <div className='video-info__second-row'>
        <h3 className='video-info__author'>By Red Cow</h3>
        <p className='video-info__timestamp'>12/18/2018</p>
      </div>
      <img className='video-info__icon' src={ViewsIcon} alt='The views icon' />
      <p className='video-info__count'>1,001,023</p>
      <img className='video-info__icon' src={LikesIcon} alt='The likes icon' />
      <p className='video-info__count'>110,985</p>
      <p className='video-info__desc'>
        On a gusty day in Southern Utah, a group of 25
        daring mountain bikers blew the doors off what is
        possible on two wheels, unleashing some of the
        biggest moments the sport has ever seen. While
        mother nature only allowed for one full run before
        the conditions made it impossible to ride, that was
        all that was needed for event veteran Kyle Strait,
        who won the event for the second time -- eight years
        after his first Red Cow Rampage title
      </p>
    </div>
  )
}

export default VideoInfoComponent;
