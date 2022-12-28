import React from "react";
import Navbar from "./Navbar";

function Header({ search, setSearch }) {
  return (
    <header>
      <div className="container header-navbar">
        <h1 className="blog-title">React-Router Blog Page</h1>
        <Navbar search={search} setSearch={setSearch} />
      </div>
    </header>
  );
}

export default Header;
