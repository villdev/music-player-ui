import React from "react";
import Navbar from "./Navbar";
import Recent from "./Recent";
import Playlist from "./Playlist";
import Trending from "./Trending";

export default function Main() {
  return (
    <div className="main-content">
      <Navbar />
      <Recent />
      <Playlist />
      <Trending />
    </div>
  );
}
