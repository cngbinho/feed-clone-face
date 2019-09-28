import React, { Component } from "react";

import Post from "../components/Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "bill"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "diego"
            },
            content: "Cara não sei mas sempre aprarece umas vagas lá."
          },
          {
            id: 2,
            author: {
              name: "Jeni",
              avatar: "gatinha"
            },
            content: "Poxa semanada passada tinha uma vaga pra front."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Fernando Moura",
          avatar: "risadinha"
        },
        date: "04 Set 2019",
        content: "E ae pessoal como está os dev?",
        comments: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "risadao"
            },
            content: "Cara tá amilhão muito dev em python aqui."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post => {
          return <Post key={post.id} posts={post} />;
        })}
      </div>
    );
  }
}

export default PostList;
