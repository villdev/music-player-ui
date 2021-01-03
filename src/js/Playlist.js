import React from "react";
import cover from "../images/covers/test.jpg";

export default function Playlist() {
  return (
    <div className="playlist">
      <div className="playlist-header">
        <h3>Favourite Playlists</h3>
        <a href="#" className="view-all-btn">
          View All
        </a>
      </div>
      <ul className="playlist-items">
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Name</div>
          <div className="recent-item__by">by Temp</div>
        </li>
      </ul>
      {/* <div className="playlist-item">
        <img src={cover} alt="" />
        <div className="recent-item__title">Name</div>
        <div className="recent-item__by">by Temp</div>
      </div> */}
    </div>
  );
}
