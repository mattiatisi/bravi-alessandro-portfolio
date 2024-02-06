import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useMediaQueries } from "../hooks/getWindowSize";
import React, { useState } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueries();

  // Function to format the pathname
  const formatPathname = (path) => {
    // Remove the leading slash and capitalize the first letter
    return path.substring(1).charAt(0).toUpperCase() + path.substring(2);
  };

  // Function to determine if the current route is the home page
  const isHomePage = pathname === "/";
  const isProjectsPage = pathname === "/projects";
  const isAboutPage = pathname === "/about";

  const [hoverStates, setHoverStates] = useState({
    home: false,
    about: false,
  });

  const handleHover = (navLink) => {
    setHoverStates({
      ...hoverStates,
      [navLink]: !hoverStates[navLink], // Toggle the hover state for the specific NavLink
    });
  };

  return (
    <>
      {isDesktopOrLaptop && !isProjectsPage && (
        <div>
          <header className={isProjectsPage ? "mix-blend" : ""}>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    Alessandro Bravi
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? "active absolute-center"
                        : "inactive absolute-center"
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}

      {isDesktopOrLaptop && isProjectsPage && (
        <div>
          <li>
            <NavLink
              to="/"
              className={
                hoverStates.home ? "absolute-left" : "mix-blend absolute-left"
              }
              onMouseEnter={() => handleHover("home")}
              onMouseLeave={() => handleHover("home")}
            >
              Alessandro Bravi
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "active absolute-center-projects"
                  : "inactive absolute-center"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={
                hoverStates.about
                  ? "absolute-right"
                  : "mix-blend absolute-right"
              }
              onMouseEnter={() => handleHover("about")}
              onMouseLeave={() => handleHover("about")}
            >
              About
            </NavLink>
          </li>
        </div>
      )}

      {isTabletOrMobile && isHomePage && (
        <header>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "active line-height-large"
                : "inactive line-height-large"
            }
          >
            Alessandro Bravi
          </NavLink>
          <div className="col-50 mobile small-margin-top">
            <div className="flex-column">
              <div className="text">ianBrv</div>
              <p className="text">
                Nihil et doloremod quas enissequi ut expelliqui sequis ea qui
                unt quia volestrum dipsunto vitiur am fugit odignienia vit
                everehendent voluptas quis quaspernatet aut vo
              </p>
            </div>
          </div>
        </header>
      )}

      {!isHomePage && isTabletOrMobile && (
        <>
          <NavLink
            to={pathname}
            className={({ isActive }) =>
              isActive
                ? "active absolute-center larger-font"
                : "inactive absolute-center larger-font"
            }
          >
            {formatPathname(pathname)}
          </NavLink>
          <header className={`fixed ${isProjectsPage ? "mix-blend" : ""}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active line-height-large"
                  : isProjectsPage
                  ? "mix-blend line-height-large"
                  : "inactive line-height-large"
              }
            >
              Alessandro Bravi
            </NavLink>
          </header>
        </>
      )}

      <Outlet />
    </>
  );
}
