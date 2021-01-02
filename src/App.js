import React from "react";
import "./css/style.css";
import * as Vibrant from "node-vibrant";
import cover from "./images/covers/test.jpg";

Vibrant.from(cover).getPalette((err, palette) => console.log(palette));

export default function App() {
  return (
    <div className="container">
      <div className="main-content">
        <h1>TEST</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          explicabo earum ut labore libero, magnam sint ad modi quisquam hic
          minima eveniet totam sunt officiis ipsum repudiandae aspernatur
          facilis! Quod.
        </p>
      </div>
      <div className="side-content">
        <h2>test</h2>
        <img src={cover} alt="" />
      </div>
    </div>
  );
}
