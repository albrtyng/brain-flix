import React, { Component } from 'react';

// A component for every comment on the page
class CommentItemComponent extends Component {
  state = {
    time: '0 seconds ago'
  }

  componentDidMount() { // Set an update interval on mount for the dynamic timestamp
    const { timestamp } = this.props;

    this.timer = setInterval(() => {
      const msPerMinute = 60000;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;

      const current = new Date();
      var diff = current.getTime() - timestamp;

      if (diff < msPerMinute) {
        this.setState({ time: `${Math.round(diff / 1000)} seconds ago` });
      } else if (diff < msPerHour) {
        const minutes = Math.round(diff / msPerMinute);
        this.setState({ time: `${minutes === 1 ? 'a minute' : `${minutes} minutes`} ago` });
      } else if (diff < msPerDay ) {
        const hours = Math.round(diff / msPerHour);
        this.setState({ time: `${hours === 1 ? 'an hour': `${hours} hours`} ago` });
      } else {
        const date = new Date(timestamp);
        this.setState({ time: date.toLocaleDateString('en-ca') });
      }
    }, 2500);
  };

  componentWillUnmount() { // clearInterval to stop firing after unmount
    clearInterval(this.timer);
  }

  render() {
    const {
      src,
      name,
      comment
    } = this.props;

    return (
      <div className='comment'>
        {
          src
            ? <img className='comment__pfp' src={src} alt={'The user\'s profile'}/> 
            : <div className='comment__pfp'></div>
        }
        <h3 className='comment__author'>{name}</h3>
        <h3 className='comment__timestamp'>{this.state.time}</h3>
        <p className='comment__text'>{comment}</p>
      </div>
    )
  }
}

export default CommentItemComponent;
