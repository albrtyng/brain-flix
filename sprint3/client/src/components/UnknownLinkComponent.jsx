import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/UnknownLinkComponent.scss';

// A component for when a url is not found on Brainflix
class UnknownLinkComponent extends Component {
  render() {
    return (
      <div className='unknown'>
        <h2 className='unknown__heading'>Oops!</h2>
        <p className='unknown__text'>
          Looks like the url you tried accessing was not found.
        </p>
        <Link className='unknown__cancel' to='/videos'>
          Click here for the home page.
        </Link>
      </div>
    )
  }
}

export default UnknownLinkComponent;