import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({search, setSearch}) => {
  return (
    <nav className="nav">
      <form className="nav-form" onSubmit={(e) => e.preventDefault()}>
        <input
        className="search-input"
          id="search"
          type="text"
          placeholder="Search Article"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </form>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new-post">New Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
