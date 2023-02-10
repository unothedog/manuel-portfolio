import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import fatandcap from '../../img/projectportfolio.png';

import { themeContext } from '../../Context';
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://fatandcap-online-shop.onrender.com"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={fatandcap} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
