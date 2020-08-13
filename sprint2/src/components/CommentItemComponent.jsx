import React, { Component } from 'react';

// A component for every comment on the page
class CommentItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '0 seconds ago'
    }
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
        this.setState({ time: `${Math.round(diff / msPerMinute)} minutes ago` });
      } else if (diff < msPerDay ) {
        this.setState({ time: `${Math.round(diff / msPerHour )} hours ago` });
      } else {
        const date = new Date(timestamp);
        this.setState({ time: date.toLocaleDateString('en-ca') });
      }
    }, 2500);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      src,
      author,
      text
    } = this.props;

    return (
      <div className='comment'>
        {
          src
            ? <img className='comment__pfp' src={src} alt={'The user\'s profile'}/> 
            : <div className='comment__pfp'></div>
        }
        <h3 className='comment__author'>{author}</h3>
        <h3 className='comment__timestamp'>{this.state.time}</h3>
        <p className='comment__text'>{text}</p>
      </div>
    )
  }
}

export default CommentItemComponent;
