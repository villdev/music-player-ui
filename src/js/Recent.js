import React from "react";
import cover from "../images/covers/test.jpg";
import left from "../images/ant-design_left-square-filled.png";
import right from "../images/ant-design_right-square-filled.png";

export default function Recent() {
  return (
    <div className="recent">
      <div className="recent-header">
        <h1>Recent</h1>
        <div className="recent-controls">
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
      </div>
      <ul className="recent-items">
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Name</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
      </ul>
      {/* <div className="recent-item">
        <img src={cover} alt="" />
        <div className="recent-item__title">Name</div>
        <div className="recent-item__by">by Temp</div>
        <div className="recent-item__type">Playlist</div>
      </div> */}
    </div>
  );
}
