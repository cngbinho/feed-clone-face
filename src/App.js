import React from "react";
import "./App.css";

import TopBar from "./components/TopBar";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="content">
      <TopBar />
      <PostList />
    </div>
  );
}

export default App;
