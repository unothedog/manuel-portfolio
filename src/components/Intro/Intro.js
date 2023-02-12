import React, { useContext } from 'react';
import './Intro.css';
import me from '../../img/mebanner.png';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import { themeContext } from '../../Context';

import { Link } from 'react-scroll';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? 'white' : '' }}>
            Hi! I Am Manuel Rodriguez
          </span>

          <span
            style={{
              fontSize: '3.7rem',
              fontWeight: 'bolder',
            }}
          >
            Web Developer
          </span>
        </div>
        <Link to="portfolio" smooth={true} spy={true}>
          <button className="button i-button">Projects</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/unothedog" target={'_blank'} rel="">
            <img src={Github} alt="" />
          </a>

          <a
            href="https://www.linkedin.com/in/manuel-rodriguez-b07738176/"
            target={'_blank'}
            rel=""
          >
            <img src={LinkedIn} alt="" rel="" />
          </a>

          <a href="" target={'_blank'}></a>
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img
          src={me}
          alt=""
          style={{ maxHeight: '1200px', maxWith: '1000px' }}
        />
      </div>
    </div>
  );
};

export default Intro;
