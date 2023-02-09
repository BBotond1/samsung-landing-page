import React from "react";
import "./LatestDealsShowcase.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function LatestDealsShowcase() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const buttonName = [
        "New In",
        "Mobile",
        "TV&AV",
        "Home Aplpliance",
        "Laptops&Monitors",
      ];
      if (index === 0) {
        return (
          '<div class="buttons-div"><div id="bullets" class="' +
          className +
          '">' +
          buttonName[index] +
          "</div>"
        );
      } else if (index === 4) {
        return (
          '<div id="bullets" class="' +
          className +
          '">' +
          buttonName[index] +
          "</div></div>"
        );
      } else {
        return (
          '<div id="bullets" class="' +
          className +
          '">' +
          buttonName[index] +
          "</div>"
        );
      }
    },
  };

  return (
    <div className="showcase-section">
      <Swiper
        className="showcase-swiper"
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="swiper-container">
            <div className="big-box">main</div>
            <div className="small-box">small 1</div>
            <div className="small-box">small 2</div>
            <div className="small-box">small 3</div>
            <div className="small-box">small 4</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="big-box">main</div>
            <div className="small-box">small 1</div>
            <div className="small-box">small 2</div>
            <div className="small-box">small 3</div>
            <div className="small-box">small 4</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="big-box">main</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="big-box">main</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="big-box">main</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
            <div className="small-box">small</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LatestDealsShowcase;
