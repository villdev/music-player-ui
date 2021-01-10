import React from "react";
import like from "../images/mdi-light_heart.png";
import prev from "../images/previous.png";
import play from "../images/play.png";
import next from "../images/next.png";
import volume from "../images/volume-up.png";
import repeat from "../images/repeat.png";
import shuffle from "../images/shuffle.png";

export default function Player({ cover }) {
  const sideContentStyle = {
    backgroundImage: `url(${cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="side-content" style={sideContentStyle}>
      <div className="player">
        <img src={cover} alt="" className="player-cover" />
        <div className="player-title">Green Light</div>
        <div className="player-artist">Lorde</div>
        <div className="player-album">Melodrama</div>
        <div className="player-seeker">
          <div className="current-time">1:32</div>
          <div className="seeker-bar">
            <div className="seeker-current"></div>
          </div>
          <div className="end-time">4:30</div>
        </div>
        <div className="controls">
          <div className="controls-main">
            <div className="controls-wrapper">
              <img className="like" src={like} alt="" />
            </div>
            <div className="controls-wrapper">
              <img className="prev" src={prev} alt="" />
            </div>
            <div className="controls-wrapper play-wrapper">
              <img className="play" src={play} alt="" />
            </div>
            <div className="controls-wrapper">
              <img className="next" src={next} alt="" />
            </div>
            <div className="controls-wrapper">
              <img className="volume" src={volume} alt="" />
            </div>
          </div>
          <div className="controls-playlist">
            <img src={repeat} alt="" />
            <div className="player-playlist">Playing from TEMP</div>
            <img src={shuffle} alt="" />
          </div>
        </div>
        <div className="player-lyrics">
          <div className="lyrics-header">Lyrics</div>
          <div className="lyrics">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              unde nostrum nihil non, eum molestias nobis itaque sed
              repellendus, hic iure. Sapiente ex error, similique corrupti
              quisquam autem assumenda qui!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              unde nostrum nihil non, eum molestias nobis itaque sed
              repellendus, hic iure. Sapiente ex error, similique corrupti
              quisquam autem assumenda qui!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              pariatur aperiam ab earum mollitia quo nostrum est incidunt,
              distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
