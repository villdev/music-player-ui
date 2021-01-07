import React from "react";
import cover from "../images/covers/test.jpg";

export default function Playlist() {
  return (
    <div className="playlist">
      <div className="playlist-header">
        <div>Favourite Playlists</div>
        <a href="#" className="view-all-btn">
          View All
        </a>
      </div>
      <ul className="playlist-items">
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__details">
            <div className="recent-item__title">Name</div>
            <div className="recent-item__by">by Temp</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
