import React, { useState } from 'react';
import VideoItemComponent from './VideoItemComponent';

const VideoListComponent = () => {
  const [videos, setVideos] = useState([
    // {
    //   src: 'video-list-0',
    //   title: 'BMX Rampage: 2018 Highlights',
    //   author: 'Red Cow'
    // },
    {
      src: 'video-list-1',
      title: 'Become A Travel Pro In One Easy Lesson…',
      author: 'Scotty Cranmer'
    },
    {
      src: 'video-list-2',
      title: 'Les Houches The Hidden Gem Of The…',
      author: 'Scotty Cranmer'
    },
    {
      src: 'video-list-3',
      title: 'Travel Health Useful Medical Information…',
      author: 'Scotty Cranmer'
    },
    {
      src: 'video-list-4',
      title: 'Cheap Airline Tickets Great Ways To Save',
      author: 'Emily Harper'
    },
    {
      src: 'video-list-5',
      title: 'Take A Romantic Break In A Boutique Hotel',
      author: 'Ethan Owen'
    },
    {
      src: 'video-list-6',
      title: 'Choose The Perfect Accommodations',
      author: 'Lydia Perez'
    },
    {
      src: 'video-list-7',
      title: 'Cruising Destination Ideas',
      author: 'Timothy Austin'
    },
    {
      src: 'video-list-8',
      title: 'Train Travel On Track For Safety',
      author: 'Scotty Cranmer'
    }
  ]);

  return (
    <div className='videos'>
      <h3 className='videos__next'>Next video</h3>
      { videos.map(video => <VideoItemComponent key={video.src} {...video} />) }
    </div>
  )
}

export default VideoListComponent;