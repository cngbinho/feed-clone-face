import React, { Component } from "react";

import Comment from "../components/Comment";
import profile from "../assets/profile.png";

function Post(...props) {
  return (
    <div className="post">
      <div className="post_profile">
        <img className="avatar" src={profile} />
        <div className="profile_name">
          <span className="name">{props[0].props.author.name}</span>
          <span className="date">{props[0].props.date}</span>
        </div>
      </div>
      <div className="post_content">{props[0].props.content}</div>
      <div className="post_content">
        {console.log(indexOf(props[0].props.comments))}
      </div>
      <Comment key={props[0].props.coments} coments={props[0].props.coments} />
    </div>
  );
}

export default Post;
