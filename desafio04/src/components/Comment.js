import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="comment-container">
        <img className="avatar" width="200" src={comment.author.avatar} />
        <div className="comment-box">
          <div><strong>{comment.author.name}</strong>{ comment.content }</div>
        </div>
      </div>
    );
  }
}

export default Comment;
