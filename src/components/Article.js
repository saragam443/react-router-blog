import React from "react";
import { Link } from "react-router-dom";

const Article = ({ post }) => {
  return (
    <article className="single-post">
      <h2>{post.title}</h2>
      <h3>{post.date}</h3>
      <p>
        {`${post.content.slice(0, 150)}..... `}
        <Link className="view-more" to={`/post/${post.id}`}>view more</Link>
      </p>
    </article>
  );
};

export default Article;
