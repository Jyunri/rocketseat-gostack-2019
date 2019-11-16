import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://gamegfx.spielaffe.de/images/game/17/17892/442243_megaanimeavatarcreator.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://www.github.com/diego3g.png"
            },
            content: "Sim estamos sim"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://maisdeoitomil.files.wordpress.com/2010/04/entei3.jpg"
        },
        date: "04 Jun 2019",
        content: "Fala galera beleza?\n\nEstou fazendo o Bootcamp e está sendo muito massa!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://www.github.com/diego3g.png"
            },
            content: "Poxa que legal"
          },
          {
            id: 2,
            author: {
              name: "Squall",
              avatar: "https://gamerdan.com/dffoo/wp-content/uploads/sites/5/2018/03/squall.309e23f.jpg"
            },
            content: "Whatever"
          },
        ]
      },
    ]
  };

  render() {
    return(
      <div className="postlist">
        {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    );
  }
}

export default PostList;
