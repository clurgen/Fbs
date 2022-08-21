import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logo_fbs from "../../../images/logo_fbs.png";
import CarousselArticles from "../Article/CarousselArticles";
const playlists = ["Opening", "fbs"];

export default function Home() {
  return (
    <div className="content">
      <div className="wrapperHome">
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
          {playlists.map((val) => {
            return (
              <div className="pt-5">
                <h2 className="pt-5 text-uppercase text-center homeSubTitle">
                  <span className="">Mes derniers {val}</span>
                </h2>
                <CarousselArticles playlist={val} />
              </div>
            );
          }, [])}
        </div>
      </div>
    </div>
  );
}
