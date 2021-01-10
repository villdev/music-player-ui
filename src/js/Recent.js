import React, { useState } from "react";
import cover from "../images/covers/test.jpg";
import left from "../images/ant-design_left-square-filled.png";
import leftOutline from "../images/ant-design_left-square-outlined.png";
import right from "../images/ant-design_right-square-filled.png";
import rightOutline from "../images/ant-design_right-square-outlined.png";

function clamp(a, b, x) {
  return Math.max(a, Math.min(x, b));
}

export default function Recent() {
  function slideLeft() {
    // 20.6 * 5 = 103
    setSlideX((x) => clamp(-103, 0, x + 20.6));
  }
  function slideRight() {
    setSlideX((x) => clamp(-103, 0, x - 20.6));
  }

  const [slideX, setSlideX] = useState(0);
  return (
    <div className="recent">
      <div className="recent-header">
        <div>Recent</div>
        <div className="recent-controls">
          {slideX === 0 ? (
            <img onClick={slideLeft} src={leftOutline} alt="" />
          ) : (
            <img onClick={slideLeft} src={left} alt="" />
          )}
          {slideX === -103 ? (
            <img onClick={slideRight} src={rightOutline} alt="" />
          ) : (
            <img onClick={slideRight} src={right} alt="" />
          )}
          {/* <img onClick={slideLeft} src={left} alt="" /> */}
          {/* <img onClick={slideRight} src={right} alt="" /> */}
        </div>
      </div>
      <ul
        className="recent-items"
        style={{
          transform: `translateX(${slideX}%)`,
          transition: "all .2s linear",
        }}
      >
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Name</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Name</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Name</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Name</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Believer5</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Believer6</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Believer7</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Believer8</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Believer9</div>
          <div className="recent-item__by">by Temp</div>
          <div className="recent-item__type">Playlist</div>
        </li>
        <li>
          <img src={cover} alt="" />
          <div className="recent-item__title">Believer10</div>
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
