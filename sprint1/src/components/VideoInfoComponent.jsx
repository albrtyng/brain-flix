import React from 'react';

import LikesIcon from '../assets/icons/svg/icon-likes.svg';
import ViewsIcon from '../assets/icons/svg/icon-views.svg';

const VideoInfoComponent = () => {
  return (
    <>
      <h1>BMX Rampage: 2018 Highlights</h1>
      <h3>By Red Cow</h3>
      <p>12/18/2018</p>
      <img src={ViewsIcon} alt='The views icon' />
      <p>1,001,023</p>
      <img src={LikesIcon} alt='The likes icon' />
      <p>110,985</p>
      <p>
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
    </>
  )
}

export default VideoInfoComponent;
