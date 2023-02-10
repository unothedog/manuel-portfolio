import React, { useContext } from 'react';
import './framework.css';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';
import sweetalert from '../../img/sweet_alert-removebg-preview.png';
import redux from '../../img/redux-removebg-preview.png';
import mui from '../../img/mui-removebg-preview.png';
import antui from '../../img/ant_ui-removebg-preview.png';
import emailjs from '../../img/email_js-removebg-preview.png';
import nodeexpress from '../../img/node_and_express-removebg-preview.png';
import react from '../../img/react-removebg-preview.png';
import mongodb from '../../img/mongodb-removebg-preview.png';
import bootstrap from '../../img/bootstrap-removebg-preview.png';
import htmlcssjs from '../../img/htmlcssjs-removebg-preview.png';
import { Margin } from '@mui/icons-material';

const Framework = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="framework">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Experience</span>
          <span>Tools and Frameworks</span>
          <span>
            React.js Material UI, Ant UI, Sweet Alert
            <br />
            Redux Tool Kit
            <br />
            Hmtl, CSS, Js
            <br />
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        {/* background Circles */}
        {/* <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div> */}
        <div>
          <img
            src={htmlcssjs}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />
          <img
            src={bootstrap}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />

          <img
            src={antui}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />
          <img
            src={mui}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />
          <img
            src={sweetalert}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />

          <img
            src={react}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />
          <img
            src={redux}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />
          <img
            src={mongodb}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />
          <img
            src={nodeexpress}
            alt=""
            style={{ maxWidth: '150px', maxHeight: '100px', margin: '30px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Framework;
