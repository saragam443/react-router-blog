import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import Error from "./components/Error";
import postList from "./data/postData";
import { format } from "date-fns";

const App = () => {
  const [posts, setPosts] = React.useState(postList);
  const [search, setSearch] = React.useState("");
  const [searchArray, setSearchArray] = React.useState([]);
  const [postTitle, setPostTitle] = React.useState("");
  const [postContent, setPostContent] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const filterArray = posts.filter(
      (post) =>
        post.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchArray(filterArray.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts.length + 1 : 1;
    const date = format(new Date(), "MMM dd, yyyy pp");
    const newPost = { id, title: postTitle, date, content: postContent };
    const allPosts = [...posts, newPost];
    console.log(allPosts);
    setPosts(allPosts);
    setPostTitle("");
    setPostContent("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id.toString() !== id);
    setPosts(postList);
    navigate("/");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout search={search} setSearch={setSearch} />}
        >
          <Route index element={<Home posts={searchArray} />} />
          <Route
            path="new-post"
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                postContent={postContent}
                setPostTitle={setPostTitle}
                setPostContent={setPostContent}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route
            path="post/:id"
            element={<Post posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
