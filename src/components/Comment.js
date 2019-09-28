import React, { Component } from "react";

import profile from "../assets/profile.png";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <img className="avatar" src={profile} />
        <div className="coment_content">
          <span> Diego Fernandes</span> Seu comentário aqui
        </div>
      </div>
    );
  }
}

export default Comment;
