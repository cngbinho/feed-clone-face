import React from "react";

import profile from "../assets/profile.png";
import logo from "../assets/facebook-1.svg";

function TopBar() {
  return (
    <div className="topbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="profile">
        <span>Meu Perfil</span>
        <img src={profile} />
      </div>
    </div>
  );
}

export default TopBar;
