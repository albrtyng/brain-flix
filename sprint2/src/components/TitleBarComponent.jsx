import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Logo from '../assets/logo/logo-brainflix.svg';
import SearchIcon from '../assets/icons/svg/icon-search.svg'
import UploadIcon from '../assets/icons/svg/icon-upload.svg'

// The title bar at the top of the page
class TitleBarComponent extends Component {
  render() {
    return (
      <div className='title-bar'>

        <Route render={({ history }) => (
          <div
            className='title-bar__logo-container'
            onClick={() => history.push('/videos')}
          >
            <img
              className='title-bar__logo'
              src={Logo}
              alt='The Brainflix Logo'

            />
          </div>
        )} />

        <div className='title-bar__search-container'>
          <img
            className='title-bar__icon'
            src={SearchIcon}
            alt='The search icon'
          />
          <input
            className='text-input text-input--search'
            type='text'
            placeholder='Search'
          />
        </div>

        <Route render={({ history }) => (
          <button
            className='btn btn--upload'
            onClick={() => history.push('/upload')}
          >
            <img src={UploadIcon} alt='The upload icon'/>
            upload
          </button>
        )} />

        <img
          className='title-bar__pfp'
          src={this.props.image}
          alt={'The user\'s profile'}
        />
      </div>
    );
  }
}

export default TitleBarComponent;