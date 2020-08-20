import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/UploadPage.scss';

import Thumbnail from '../assets/images/upload-video-preview.jpg';

class UploadPage extends Component {
  render() {
    return (
      <div className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
        <div className='upload__left'>
          <label className='upload__label'>Video Thumbnail</label>
          <img
            className='upload__thumbnail'
            src={Thumbnail}
            alt='The video thumbnail'
          />
        </div>
        <form className='upload__form'>
          <label className='upload__label'>Title your video</label>
          <input
            className='text-input text-input--vid-title'
            type='text'
            name='title'
            placeholder='Add a title to your video'
            required
          />
          <label className='upload__label'>Add a video description</label>
          <textarea
            className='text-input text-input--vid-desc'
            name='description'
            placeholder='Add a description of your video' />
        </form>
        <div className='upload__button-container'>
          <button className='btn btn--publish'>Publish</button>
          <Link className='upload__cancel' to='/videos'>Cancel</Link>
        </div>
      </div>
    )
  }
}

export default UploadPage;