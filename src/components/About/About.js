import React, { useContext } from 'react';
import './about.css';

import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import Resume from './resume.pdf';

const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? 'white' : '' }}>All about me!</span>

        <span style={{ fontSize: '1.5rem' }}>
          Successful Customer Service Advocate with 8 years of experience
          addressing customer requests and concerns. Upbeat and energetic with
          grace in handling diffult situations through resourcefulness and
          adaptability.
          <br />
          <br />A hard-working starter web developer with the ability to create
          elegant solutions in the least amount of time. Proficient in HTML5,
          CSS3, Bootstrap, JavaScript, ReactJS, MUI, ANTUI and able to
          effectively self-manage a project as well as collaborate in a team
          setting. And willing to learn more.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <a href="https://www.freecodecamp.org/unothedog" target={'_blank'}>
          <button className="button s-button">Certification</button>
        </a>
        <br />
        <span> freecodecamp.org</span>
      </div>
      {/* right */}
      <div className="cards">{/* first card */}</div>
    </div>
  );
};

export default About;
