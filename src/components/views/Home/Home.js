import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logo_fbs from "../../../images/logo_fbs.png";

export default function Home() {
  return (
    <div className="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <div className="container text-center align-items-center">
          <div className="row  pb-3">
            <a
              className="home-logo"
              href="https://www.youtube.com/c/FatBlackSekai"
              target="blank"
            >
              <img
                src={logo_fbs}
                alt="logo"
                className="pulse-anim image-zoom-home"
              />
            </a>
          </div>
        </div>
        <span className="apparitionHome">Bienvenue dans le</span>
        <br></br>
        <span className="apparitionHome">FATBLACK SEKAI</span>
      </div>
    </div>
  );
}
