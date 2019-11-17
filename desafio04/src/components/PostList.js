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
            content: `A Rocketseat
            está sempre em busca de novos membros para o
            time, e geralmente ficamos de olho em quem se
            destaca no Bootcamp, inclusive 80% do nosso time
            de devs é composto por alunos do Bootcamp.
            Além disso, se você tem vontade de ensinar gravando vídeos
            e criando posts, pode me chamar no Discord!
            (Sério, me chamem mesmo, esse comentário é real)`
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
            content: "Poxa que legal\nBora codar!"
          },
          {
            id: 2,
            author: {
              name: "Squall",
              avatar: "https://gamerdan.com/dffoo/wp-content/uploads/sites/5/2018/03/squall.309e23f.jpg"
            },
            content: "Whatever..."
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
