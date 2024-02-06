// Footer.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaQueries } from "../hooks/getWindowSize";

export default function Footer() {
  const { pathname } = useLocation();
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueries();
  const isProjectsPage = pathname === "/projects";

  return (
    <>
      {isDesktopOrLaptop ? (
        <footer className={isProjectsPage ? "mix-blend" : ""}>
          <div className="col-50">
            <div className="flex-column">
              <div className="text">ianBrv</div>
              <div className="text col-82">
                Born in Urbino (ITA) 1998 <br></br>
                Experienced graphic designer and video editor adept at solving
                visual challenges with digital images editing tools.
              </div>
            </div>
          </div>
          <div className="col-50 flex-row">
            <div className="flex-row align-items-end gap">
              <div className="flex-column">
                <div className="text">Contacts</div>
                <a href="mailto:bravirossi@gmail.com">
                  E-mail: bravirossi@gmail.com
                </a>
                <a href="tel:+393319224639 ">Cell: +39 3319224639</a>
              </div>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                IG: @alessandro_bravi
              </a>
            </div>
            <div className="flex-column justify-content-end">
              <a
                href="https://mattiatisi.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                developed by Mattia Tisi
              </a>
              <div className="text">
                official website {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer>
          <div className="fit-content">
            <div className="flex-row align-items-end gap">
              <div className="flex-column">
                <div className="text">Contacts</div>
                <a href="mailto:bravirossi@gmail.com">
                  E-mail: bravirossi@gmail.com
                </a>
                <a href="tel:+393319224639 ">Cell: +39 3319224639</a>
              </div>
            </div>
          </div>
          <div className="fit-content flex-column justify-content-end align-items-end">
            <div className="">
              <a
                href="https://mattiatisi.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                developed by Mattia Tisi
              </a>
              <div className="text">
                official website {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
