import React from "react";
// import logo from "../images/logo.png";
// import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import avatar from "../images/avatar.jpeg";

export default function Navbar() {
  return (
    <header className="header-bar">
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="#" className="logo">
              <img src={logo3} alt="" />
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Discovery</a>
          </li>
          <li>
            <a href="#">Library</a>
          </li>
        </ul>
      </nav>
      <div className="user-bar">
        <input type="text" className="search-bar" placeholder="Search" />
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
    </header>
  );
}
