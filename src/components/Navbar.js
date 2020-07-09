import React from "react";
import logo from "../img/youtube_logo.png";
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="60"
            height="50"
            className="d-inline-block"
            alt="Youtube Logo"
            loading="lazy"
          />
          <span className="logo-title">Hamro YouTube</span>
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
