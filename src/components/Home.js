import React from "react";
import Article from "./Article";
import { Outlet } from "react-router-dom";

const Home = ({ posts }) => {
  const postElement = posts.length ? (
    posts.map((post) => <Article key={post.id} post={post} />)
  ) : (
    <p>No post to display</p>
  );
  return (
    <>
      <div className="post-section container">
      {postElement}
      <Outlet />
      </div>
    </>
  );
};

export default Home;
