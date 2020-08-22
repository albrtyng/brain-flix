import React, { Component } from 'react';
import axios from 'axios';

import CommentsComponent from '../components/CommentsComponent';
import VideoInfoComponent from '../components/VideoInfoComponent';
import VideoListComponent from '../components/VideoListComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent';

import '../styles/pages/VideoPage.scss';

class VideoPage extends Component {
  state = {
    videos: [],
    selected: {},
    comments: [],
    liked: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.persist();

    const comment = event.target.comment.value;
    event.target.reset();

    axios.post(
      `/videos/${this.state.selected.id}/comments`,
      {
        name: 'Mohan Muruge',
        comment: comment
      }
    )
    .then(response => {
      this.fetchSelectedVideo(false);
    })
  }

  handleLike = (event) => {
    event.preventDefault();

    axios.put(
      `/videos/${this.state.selected.id}/like`, {}
    )
    .then(response => {
      this.fetchSelectedVideo();
    })
  }

  fetchSelectedVideo = () => {
    const id  = this.props.match.params.id || this.state.videos[0].id;

    axios.get(`/videos/${id}`)
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        selected: response.data,
        comments: response.data.comments,
        liked: response.data.liked
      }))
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    axios.get(`/videos`)
    .then(response => {
      // If we have an id from url, use it. Otherwise, default to first in response array
      const id  = this.props.match.params.id || response.data[0].id;

      // Chaining these two requests together prevents one extra render by setting state once
      axios.get(`/videos/${id}`)
      .then(response2 => {
        this.setState({
          videos: response.data,
          selected: response2.data,
          comments: response2.data.comments,
          liked: response.data.liked
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;

    if ((id && prevState.selected.id !== id)
      || prevProps.match.params.id !== id) {
      this.fetchSelectedVideo();
    }
  }

  render() {
    const {
      videos,
      selected,
      comments,
      liked
    } = this.state;

    return (
      <>
        <VideoPlayerComponent video={selected}/>
        <div className='video__container'>
          <div className='video__left'>
            <VideoInfoComponent
              video={selected}
              handleLike={this.handleLike}
              liked={liked}
            />
            <CommentsComponent
              comments={comments.sort((a,b) => b.timestamp - a.timestamp)}
              handleSubmit={this.handleSubmit}
            />
          </div>
          <VideoListComponent videos={videos.filter(video => video.id !== selected.id)}/>
        </div>
      </>
    )
  }
}

export default VideoPage;