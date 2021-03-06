import React from 'react';
import Comment from './Comment';

function Post({ post }) {
  return(
    <div className="post">
      <div className="post-header">
        <img className="avatar" width="200" src={post.author.avatar} />
        <div>
          <div className="post-author"><strong>{post.author.name}</strong></div>
          <div className="post-date">{post.date}</div>
        </div>
      </div>
      <div className="post-content">{post.content}</div>
      <div className="separator"></div>
      <div>
        {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
}

export default Post;
