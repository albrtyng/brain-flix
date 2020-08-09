import { v4 as uuidv4 } from 'uuid';

// The initial state of the video page
const initialState = {
  videos: [
    {
      id: uuidv4(),
      image: 'video-list-0',
      title: 'BMX Rampage: 2018 Highlights',
      channel: 'Red Cow',
      description: `On a gusty day in Southern Utah,
      a group of 25 daring mountain bikers blew the
      doors off what is possible on two wheels, unleashing
      some of the biggest moments the sport has ever seen.
      While mother nature only allowed for one full run
      before the conditions made it impossible to ride,
      that was all that was needed for event veteran Kyle Strait,
      who won the event for the second time -- eight years
      after his first Red Cow Rampage title`,
      views: '1,001,023',
      likes: '110,985',
      duration: '0:42',
      timestamp: '12/18/2018',
      comments: [
        {
          author: 'Theodore Duncan',
          timestamp: '11/15/2018',
          text: `How can someone be so good!!! You can tell he
          lives for this and loves to do it every day. Everytime
          I see him I feel instantly happy! He’s definitely my
          favorite ever!`,
          src: ''
        },
        {
          author: 'Gary Wong',
          timestamp: '12/18/2018',
          text: `Every time I see him shred I feel so motivated
          to get off my couch and hop on my board. He’s so talented!
          I wish I can ride like him one day so I can really enjoy myself!`,
          src: ''
        },
        {
          author: 'Micheal Lyons',
          timestamp: '12/18/2018',
          text: `They BLEW the ROOF off at their last show, once
          everyone started figuring out they were going.
          This is still simply the greatest opening of a
          concert I have EVER witnessed.`,
          src: ''
        }
      ]
    },
    {
      id: uuidv4(),
      image: 'video-list-1',
      title: 'Become A Travel Pro In One Easy Lesson…',
      channel: 'Scotty Cranmer',
      duration: '',
      description: '',
      likes: '',
      views: '',
      timestamp: '',
      comments: []
    },
    {
      id: uuidv4(),
      image: 'video-list-2',
      title: 'Les Houches The Hidden Gem Of The…',
      channel: 'Scotty Cranmer',
      duration: '',
      description: '',
      likes: '',
      views: '',
      timestamp: '',
      comments: []
    },
    {
      id: uuidv4(),
      image: 'video-list-3',
      title: 'Travel Health Useful Medical Information…',
      channel: 'Scotty Cranmer',
      duration: '',
      description: '',
      likes: '',
      views: '',
      timestamp: '',
      comments: []
    },
    {
      id: uuidv4(),
      image: 'video-list-4',
      title: 'Cheap Airline Tickets Great Ways To Save',
      channel: 'Emily Harper',
      duration: '',
      description: '',
      likes: '',
      views: '',
      timestamp: '',
      comments: []
    },
    {
      id: uuidv4(),
      image: 'video-list-5',
      title: 'Take A Romantic Break In A Boutique Hotel',
      channel: 'Ethan Owen',
      duration: '',
      description: '',
      likes: '',
      views: '',
      timestamp: '',
      comments: []
    },
    {
      id: uuidv4(),
      image: 'video-list-6',
      title: 'Choose The Perfect Accommodations',
      channel: 'Lydia Perez',
      duration: '',
      description: '',
      likes: '',
      views: '',
      timestamp: '',
      comments: []
    },
    {
      id: uuidv4(),
      image: 'video-list-7',
      title: 'Cruising Destination Ideas',
      channel: 'Timothy Austin',
      duration: '',
      description: '',
      likes: '',
      views: '',
      timestamp: '',
      comments: []
    },
    {
      id: uuidv4(),
      image: 'video-list-8',
      title: 'Train Travel On Track For Safety',
      channel: 'Scotty Cranmer',
      duration: '',
      description: '',
      likes: '',
      views: '',
      timestamp: '',
      comments: []
    }
  ]
}

export default initialState;
