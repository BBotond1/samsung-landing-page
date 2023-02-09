import React from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

import samsung from "./img/Samsung-Galaxy-S23.png";
import samsungWashing from "./img/Samsung-washing.jpg";
import samsungTV from "./img/samsung-tv-image.jpeg";
import samsungMView from "./img/Samsung-Galaxy-S23-mobileView.jpg"
import samsungWashingMView from "./img/samsung-washing-mobileview.jpg"

import "swiper/css";
import "./Imageslideshow.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Pagination, Navigation, EffectFade } from "swiper";



function Imageslideshow() {
  const mobileView = useMediaQuery({ query: `(max-width: 535px)` });
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        loop
        speed={500}
        className="slideshow-swiper"
      >
        <SwiperSlide>
          <img src={mobileView ? samsungMView : samsung} alt="samsung s23 series" />
          <div className="samsung-phones-text">
            <h1 className="title">Samsung S23 Series</h1>
            <button className="order-button">Pre-order now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="tv-image" src={samsungTV} alt="samsung TV" />
          <div className="samsung-TV-text">
            <h1 className="title">Experience More <br /> Wow Than Ever</h1>
            <button className="register-button">Pre-register</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="washing-image" src={mobileView ? samsungWashingMView : samsungWashing} alt="samsung washing" />
          <div className="samsung-washing-text">
            <h1 className="title">BESPOKE Home</h1>
            <button className="buy-button">Buy now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Imageslideshow;
