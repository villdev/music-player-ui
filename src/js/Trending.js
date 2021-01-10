import React from "react";
import cover from "../images/covers/test.jpg";
import like from "../images/mdi-light_heart.png";

export default function Trending() {
  return (
    <div className="trending">
      <div className="trending-header">
        <div>Trending</div>
      </div>
      <ul className="trending-items">
        <li>
          <div className="trending-item__number">01</div>
          <div className="trending-item__cover">
            <img src={cover} alt="" />
          </div>
          <div className="trending-item__title">
            <div className="trending-name">Some Name</div>
            <div className="trending-artist">Some Band</div>
          </div>
          <div className="like-btn">
            <img src={like} alt="" />
          </div>
          <div className="trending-length">4:30</div>
        </li>
        <li>
          <div className="trending-item__number">02</div>
          <div className="trending-item__cover">
            <img src={cover} alt="" />
          </div>
          <div className="trending-item__title">
            <div className="trending-name">Some Name</div>
            <div className="trending-artist">Some Band</div>
          </div>
          <div className="like-btn">
            <img src={like} alt="" />
          </div>
          <div className="trending-length">4:30</div>
        </li>
        <li>
          <div className="trending-item__number">03</div>
          <div className="trending-item__cover">
            <img src={cover} alt="" />
          </div>
          <div className="trending-item__title">
            <div className="trending-name">Some Name</div>
            <div className="trending-artist">Some Band</div>
          </div>
          <div className="like-btn">
            <img src={like} alt="" />
          </div>
          <div className="trending-length">4:30</div>
        </li>
        <li>
          <div className="trending-item__number">04</div>
          <div className="trending-item__cover">
            <img src={cover} alt="" />
          </div>
          <div className="trending-item__title">
            <div className="trending-name">Some Name</div>
            <div className="trending-artist">Some Band</div>
          </div>
          <div className="like-btn">
            <img src={like} alt="" />
          </div>
          <div className="trending-length">4:30</div>
        </li>
        <li>
          <div className="trending-item__number">05</div>
          <div className="trending-item__cover">
            <img src={cover} alt="" />
          </div>
          <div className="trending-item__title">
            <div className="trending-name">Some Name</div>
            <div className="trending-artist">Some Band</div>
          </div>
          <div className="like-btn">
            <img src={like} alt="" />
          </div>
          <div className="trending-length">4:30</div>
        </li>
      </ul>
    </div>
  );
}
