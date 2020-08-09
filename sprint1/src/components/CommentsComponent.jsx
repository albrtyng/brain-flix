import React from 'react';

import CommmentFormComponent from './CommentFormComponent';
import CommentItemComponent from './CommentItemComponent';

// The container wrapping each CommentItemComponent
const CommentsComponent = (props) => {
  return(
    <div className='comments'>
      <h3 className='comments__count'>{`${props.comments.length} Comments`}</h3>
      <CommmentFormComponent  handleSubmit={props.handleSubmit} />
      {
        props.comments.slice(0).reverse().map(comment => <CommentItemComponent
          key={`${comment.author}-${comment.timestamp}`}
          {...comment}
        />)
      }
    </div>
  )
}

export default CommentsComponent;
