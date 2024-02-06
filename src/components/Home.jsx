// Home.jsx
import React from "react";
import Footer from "./Footer";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQueries } from "../hooks/getWindowSize";
import "../App.css";

import VideoHomeWEB from "../assets/Alessandro Bravi Portfolio WEB.webm";
import VideoHomeMP4 from "../assets/Alessandro Bravi Portfolio MP4.mp4";

export default function Home() {
  const { pathname } = useLocation();
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueries();

  return (
    <>
      <h1>Alessandro Bravi</h1>
      {isDesktopOrLaptop ? (
        <div className="absolute flex-center">
          <section>
            <div className="video-container">
              <div className="video-wrapper">
                <video
                  id="fullVideo"
                  className="full-height-video"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src={VideoHomeWEB} type="video/webm" />
                  <source src={VideoHomeMP4} type="video/mp4" />
                </video>
              </div>
            </div>
            {/* <div id="videoHome">
              <video src={VideoHome}></video>
            </div>
            */}
          </section>
        </div>
      ) : (
        <div className="flex-center flex-column">
          <section>
            <div id="videoHome" className="video-container">
              <video
                id="fullVideo"
                className="responsive-video"
                playsInline
                autoPlay
                muted
                loop
              >
                <source src={VideoHomeWEB} type="video/webm" />
                <source src={VideoHomeMP4} type="video/mp4" />
              </video>
            </div>
          </section>
          <header>
            <nav>
              <ul className="flex-column flex-center">
                <li>
                  <NavLink to="/projects" className="larger-font">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="larger-font">
                    About
                  </NavLink>
                </li>
                <li>
                  <a
                    className="larger-font"
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IG
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
      <Footer />
    </>
  );
}
