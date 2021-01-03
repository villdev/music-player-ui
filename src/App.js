import React, { useEffect, useState } from "react";
import * as Vibrant from "node-vibrant";
import Main from "./js/Main";
import Player from "./js/Player";
// import cover from "./images/covers/test.jpg";
import cover from "./images/covers/test2.webp";
import "./css/style.css";

export default function App() {
  const [color, setColor] = useState([0, 0, 0]);

  useEffect(() => {
    Vibrant.from(cover).getPalette((err, palette) =>
      setColor(palette.DarkVibrant._rgb)
    );
  }, []);
  return (
    <div
      className="container"
      style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }}
    >
      <Main />
      <Player cover={cover} />
    </div>
  );
}
