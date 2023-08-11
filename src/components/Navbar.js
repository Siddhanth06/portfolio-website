import { useState } from "react";
import "./Navbar.css";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaSquareYoutube,
} from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div id="nav">
      <nav className="nav">
        <div className="logo">
          <h1>
            <span style={{ color: "#ffb400", fontSize: "3rem" }}>S</span>
            iddhanth
          </h1>
        </div>
        <div className="links">
          <ul className="main-links">
            <li className="link">
              <a href="#projects">Projects</a>
            </li>
            <li className="link">
              <a href="#about">About</a>
            </li>
            <li className="link">
              <a href="#skills">Skills</a>
            </li>
            <li className="link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <div>
            <a
              href="https://www.instagram.com/siddhant_chauhan0611/"
              target="_b"
            >
              <FaSquareInstagram style={{ backgroundColor: "red" }} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/siddhanth-chauhan-30a7a0208/"
              target="_b"
            >
              <FaLinkedin style={{ backgroundColor: "blue" }} />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCUnZIBxP5rm_PitPcZl97uw"
              target="_b"
            >
              <FaSquareYoutube style={{ backgroundColor: "red" }} />
            </a>
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(true)}>
          <GiHamburgerMenu />
        </div>
        <div className={show ? "overlay-menu block" : "overlay-menu"}>
          <div className="hamburger-container">
            <ul>
              <li className="hamburger-link">
                <a className="ham-anchor" href="#projects">
                  Projects
                </a>
              </li>
              <li className="hamburger-link">
                <a className="ham-anchor" href="#skills">
                  Skills
                </a>
              </li>
              <li className="hamburger-link">
                <a className="ham-anchor" href="#about">
                  About
                </a>
              </li>
              <li className="hamburger-link">
                <a className="ham-anchor" href="#contact">
                  Contact
                </a>
              </li>
              <li className="hamburger-link" onClick={() => setShow(false)}>
                <button className="close-btn">X</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
