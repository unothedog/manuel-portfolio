import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll';
import Resume from './resume.pdf';

const Navbar = () => {
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
              <Link activeClass="active" to="Navbar" smooth={true}>
                Home
              </Link>
            </li>
            <Link to="services" smooth={true}>
              About me
            </Link>
            <li>
              <Link to="works" smooth={true}>
                Skills
              </Link>
            </li>

            <li>
              <Link to="portfolio" smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true}>
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

export default Navbar;
