import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Logo from '../assets/logo/logo-brainflix.svg';
import SearchIcon from '../assets/icons/svg/icon-search.svg'
import UploadIcon from '../assets/icons/svg/icon-upload.svg'

// The title bar at the top of the page
class TitleBarComponent extends Component {
  render() {
    return (
      <div className='title-bar'>

        {/* The Brainflix logo that redirects to the vidoes page */}
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

        {/* The search bar container for the input and icon */}
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

        {/* The upload button that redirects to the upload page */}
        <Link to='/upload' className='btn btn--upload'>
          <img src={UploadIcon} alt='The upload icon'/>
          upload
        </Link>

        {/* The profile picture */}
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