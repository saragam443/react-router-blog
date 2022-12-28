import React from "react";

const NewPost = ({
  handleSubmit,
  postTitle,
  postContent,
  setPostTitle,
  setPostContent,
}) => {
  return (
    <main>
      <div className="new-post container">
        <h2 className="new-post-title">Create new post</h2>
        <form className="new-post-form" onSubmit={handleSubmit}>
          <label className="post-label" htmlFor="postTitle">
            Post title:
          </label>
          <input
            className="input"
            type="text"
            id="postTitle"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <label className="post-label" htmlFor="postContent">Content:</label>
          <textarea
            className="input"
            id="postContent"
            required
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
          <button className="submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default NewPost;
