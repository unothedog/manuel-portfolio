import React from 'react';
import './Footer.css';
import Wave from '../../img/bg-portfolio-removebg-preview.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gitub from '@iconscout/react-unicons/icons/uil-github';
import { maxHeight } from '@mui/system';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%', maxHeight: '400px' }} />
      <div className="f-content">
        <span>welrodriguez2022@gmail.com</span>
        <div className="f-icons">
          <a href="" target={'_blank'}>
            <Insta color="white" size={'3rem'} />
          </a>

          <a href="https://www.facebook.com/unothedog2022" target={'_blank'}>
            <Facebook color="white" size={'3rem'} />
          </a>

          <a href="https://github.com/unothedog" target={'_blank'}>
            <Gitub color="white" size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
