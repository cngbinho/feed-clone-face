import React, { Component } from "react";

import Comment from "../components/Comment";
import profile from "../assets/profile.png";
import risadinha from "../assets/risadinha.png";
import risadao from "../assets/risadao.png";
import gatinha from "../assets/gatinha.png";
import bill from "../assets/bill.png";
import diego from "../assets/diego.png";

function Post({ posts }) {
  switch (posts.author.avatar) {
    case "bill":
      posts.foto = bill;
      break;
    case "risadinha":
      posts.foto = risadinha;
      break;
    case "gatinha":
      posts.foto = gatinha;
      break;
    case "diego":
      posts.foto = diego;
      break;
    case "risadao":
      posts.foto = risadao;
      break;
    case "profile":
      posts.foto = profile;
      break;
  }

  return (
    <div className="post">
      <div className="post_profile">
        <img className="avatar" src={posts.foto} />
        <div className="profile_name">
          <span className="name">{posts.author.name}</span>
          <span className="date">{posts.date}</span>
        </div>
      </div>
      <div className="post_content">{posts.content}</div>
      {posts.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default Post;
