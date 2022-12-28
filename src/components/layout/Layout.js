import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ search, setSearch }) => {
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
