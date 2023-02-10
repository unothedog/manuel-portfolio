import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll';
import Resume from './resume.pdf';

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <Link to="about" spy={true} smooth={true}>
              About me
            </Link>
            <li>
              <Link to="framework" spy={true} smooth={true}>
                Skills
              </Link>
            </li>

            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a href={Resume} download>
          <button className="button n-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default navbar;
