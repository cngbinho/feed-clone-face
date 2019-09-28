import React, { Component } from "react";

import Post from "../components/Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 1,
            author: {
              name: "João Madruga",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário 2"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Robson sousa",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Set 2019",
        content: "E ae pessoal como está os dev?",
        comments: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post => {
          console.log(post);
          return <Post key={post.id} props={post} />;
        })}
      </div>
    );
  }
}

export default PostList;
