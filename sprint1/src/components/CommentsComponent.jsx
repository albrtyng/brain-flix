import React, { useState } from 'react';
import CommmentFormComponent from './CommentFormComponent';
import CommentItemComponent from './CommentItemComponent';

const CommentsComponent = () => {
  const [comments, setComments] =  useState([
    {
      author: 'Theodore Duncan',
      timestamp: '11/15/2018',
      text: `How can someone be so good!!! You can tell he
      lives for this and loves to do it every day. Everytime
      I see him I feel instantly happy! He’s definitely my
      favorite ever!`,
      src: ''
    },
    {
      author: 'Gary Wong',
      timestamp: '12/18/2018',
      text: `Every time I see him shred I feel so motivated
      to get off my couch and hop on my board. He’s so talented!
      I wish I can ride like him one day so I can really enjoy myself!`,
      src: ''
    },
    {
      author: 'Micheal Lyons',
      timestamp: '12/18/2018',
      text: `They BLEW the ROOF off at their last show, once
      everyone started figuring out they were going.
      This is still simply the greatest opening of a
      concert I have EVER witnessed.`,
      src: ''
    }
  ]);

  return(
    <div className='comments'>
      <h3 className='comments__count'>{`${comments.length} Comments`}</h3>
      <CommmentFormComponent />
      {
        comments.map(comment => <CommentItemComponent key={`${comment.author}-${comment.timestamp}`} {...comment}/>)
      }
    </div>
  )
}

export default CommentsComponent;
