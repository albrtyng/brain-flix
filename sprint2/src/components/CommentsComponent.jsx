import React, { Component } from 'react';

import CommmentFormComponent from './CommentFormComponent';
import CommentItemComponent from './CommentItemComponent';

// The container wrapping each CommentItemComponent
class CommentsComponent extends Component {
  render() {
    const {
      comments,
      handleSubmit
    } = this.props;

    return(
      <div className='comments'>
        <h3 className='comments__count'>{`${comments.length} Comments`}</h3>
        <CommmentFormComponent  handleSubmit={handleSubmit} />
        {
          comments.slice(0).reverse().map(comment => <CommentItemComponent
            key={`${comment.author}-${comment.timestamp}`}
            {...comment}
          />)
        }
      </div>
    )
  }
}

export default CommentsComponent;
