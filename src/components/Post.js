import React from "react";
import { Link, useParams } from "react-router-dom";

const Post = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main>
      <article className="container article-page">
        {post ? (
          <>
            <h2 className="article-title">{post.title}</h2>
            <h3 className="article-date">{post.date}</h3>
            <p className="article-content">{post.content}</p>
            <button className="del-btn" onClick={() => handleDelete(id)}>
              Delete post
            </button>
          </>
        ) : (
          <>
            <h2>Post not found </h2>
            <p>
              <Link to="/">Visit Home Page</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default Post;
