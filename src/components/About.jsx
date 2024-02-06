import React from "react";
import Footer from "./Footer";
import { useMediaQueries } from "../hooks/getWindowSize";
import AboutImg from "../assets/Alessandro Bravi About.png";

export default function About() {
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueries();

  return (
    <>
      {isDesktopOrLaptop && (
        <main>
          <section className="flex-row">
            <div className="col-50-img margin-large ">
              <img id="imgAbout" src={AboutImg} alt="" />
            </div>
            <div className="col-50 margin-large top flex-column gap-column-large">
              <div className="flex-row">
                <div className="text">iaanBrv</div>
                <div className="text">{new Date().getFullYear()}</div>
              </div>
              <div className="flex-column gap-column-medium">
                <p className="text">
                  Experienced graphic designer and video creator, able to use a
                  variety of visual languages for projects. Demostrates mastery
                  in graphic design, motion graphics, and video editing. Strong
                  conceptual skills and abilityy to convey compelling narratives
                  through images. Adaptive and detail-oriented, consistently
                  delivers aesthetically pleasing and effective solutions.
                </p>
                <div className="flex-column gap-column-small">
                  <p className="text">
                    <b>Education.</b> <br></br>
                    2012-2017 Liceo Artistico "Scuola del libro" di Urbino,
                    indirizzo Grafica pubblicitaria.
                    <br></br>
                    2019-2021 Laurea in Design della comunicazione Visiva presso
                    IED Firenze.
                  </p>

                  <p className="text">
                    <b>My Freelance work at.</b> <br></br>
                    MELPOMENE STUDIO video production agency. <br></br>
                    ARCHIMEDE6 creative studio
                  </p>

                  <p className="text">
                    <b>Language.</b> <br></br>
                    Italiano <br></br>
                    Inglese
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {isTabletOrMobile && (
        <main>
          <section className="flex-column half-page-about">
            <div className="custom-img">
              <img id="imgAbout" src={AboutImg} alt="" />
            </div>
            <div className=" flex-column gap-column-large">
              <div className="flex-row">
                <div className="text">iaanBrv</div>
                <div className="text">{new Date().getFullYear()}</div>
              </div>
              <div className="flex-column gap-column-medium flex-column-50ch">
                <p className="text">
                  Experienced graphic designer and video creator, able to use a
                  variety of visual languages for projects. Demostrates mastery
                  in graphic design, motion graphics, and video editing. Strong
                  conceptual skills and abilityy to convey compelling narratives
                  through images. Adaptive and detail-oriented, consistently
                  delivers aesthetically pleasing and effective solutions.
                </p>
                <div className="flex-column gap-column-small">
                  <p className="text">
                    <b>Education.</b> <br></br>
                    2012-2017 Liceo Artistico "Scuola del libro" di Urbino,
                    indirizzo Grafica pubblicitaria.
                    <br></br>
                    2019-2021 Laurea in Design della comunicazione Visiva presso
                    IED Firenze.
                  </p>
                  <p className="text">
                    <b>My Freelance work at.</b> <br></br>
                    MELPOMENE STUDIO video production agency. <br></br>
                    ARCHIMEDE6 creative studio
                  </p>
                  <p className="text">
                    <b>Language.</b> <br></br>
                    Italiano <br></br>
                    Inglese
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer></Footer>
    </>
  );
}
