const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const videosJsonPath = '../data/videos.json';
const videos = require(videosJsonPath);

router.get('/videos', (req, res) => {
  return res.json(
    videos.reduce((accumulator, curr) => {
      accumulator.push({ // Reduce video info array down to the required attributes per video
        id: curr.id,
        title: curr.title,
        channel: curr.channel,
        image: curr.image,
      });
    
      return accumulator;
    }, [])
  );
});

router.get('/videos/:id', (req, res) => {
  const id = req.params.id;
  const video = videos.find(video => video.id === id);

  if (video) {
    return res.json(video);
  } else {
    return res.status(404).send({
      message: 'No video with that id exists'
    })
  }
});

router.post('/videos/:id/comments', (req, res) => {
  const index = videos.findIndex(video => video.id === req.params.id);

  if (index !== -1) {
    const newComment = {
      ...req.body,
      id: uuidv4(),
      timestamp: new Date().getTime(),
      likes: 0
    }

    videos[index].comments.push(newComment);

    res.json(newComment);
  } else {
    res.status(404).json({
      message: 'No video with that id exists'
    })
  }
});

router.post('/videos', (req, res) => {
  const date = new Date();
  const newVideo = {
    ...req.body, //title, channel, description, image
    id: uuidv4(),
    views: 0,
    likes: 0,
    duration: '0:20',
    timestamp: date.getTime(),
    video: '../assets/video/brainstation-sample-video.mp4',
    comments: []
  }

  videos.push(newVideo);

  return res.json(newVideo);
})

router.put('/videos/:id/like', (req, res) => {
  const { id } = req.params;
  const video = videos.find(video => video.id === id);

  if (!video.liked) {
    video.likes += 1;
  } else {
    video.likes -= 1;
  }

  video.liked = !video.liked;
  return res.status(200).send();
})

module.exports = router