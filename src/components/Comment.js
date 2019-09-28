import React, { Component } from "react";

import profile from "../assets/profile.png";

import risadinha from "../assets/risadinha.png";
import risadao from "../assets/risadao.png";
import gatinha from "../assets/gatinha.png";
import bill from "../assets/bill.png";
import diego from "../assets/diego.png";

class Comment extends Component {
  render() {
    const { comment } = this.props;

    switch (comment.author.avatar) {
      case "bill":
        comment.foto = bill;
        break;
      case "risadinha":
        comment.foto = risadinha;
        break;
      case "gatinha":
        comment.foto = gatinha;
        break;
      case "diego":
        comment.foto = diego;
        break;
      case "risadao":
        comment.foto = risadao;
        break;
      case "profile":
        comment.foto = profile;
        break;
    }

    return (
      <div className="comment">
        <img className="avatar" src={comment.foto} />
        <div className="coment_content">
          <span>{comment.author.name}</span> {comment.content}
        </div>
      </div>
    );
  }
}

export default Comment;
