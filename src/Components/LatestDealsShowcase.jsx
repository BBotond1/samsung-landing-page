import React from "react";
import { useState, useEffect } from "react";
import "./LatestDealsShowcase.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import newInMainBox from "./img/LatestDealsShowcase/NewIn/HOME_DM1_DM2_KV_Merchandising_376X376_pc.avif";
import newInBottomRight from "./img/LatestDealsShowcase/NewIn/book3pro360_preorder_1.jpg";
import newInTopRight from "./img/LatestDealsShowcase/NewIn/S23Ultra_SmallTile_DT_330x330.avif";
import newInBottomLeft from "./img/LatestDealsShowcase/NewIn/SmallTile_HA-TradeUp1.jpg";
import newInTopLeft from "./img/LatestDealsShowcase/NewIn/TV-TradeUp1.jpg";

import mobileMainbox from "./img/LatestDealsShowcase/Mobile/HOME_DM3_KV_Merchandising_376X376_pc.avif";
import mobileTopRight from "./img/LatestDealsShowcase/Mobile/Home_B4_KV_Merchandising_160X160_pc.webp";
import mobileBottomRight from "./img/LatestDealsShowcase/Mobile/Q4-160x160.webp";
import mobileTopLeft from "./img/LatestDealsShowcase/Mobile/S23Combo-Plus_SmallTile_DT_330x330.avif";
import mobileBottomLeft from "./img/LatestDealsShowcase/Mobile/TabletGTI_SmallTile_DT_330x330.avif";

import tvMainbox from "./img/LatestDealsShowcase/TV&AV/TV-JanuaryCashback_bigtile_dt_684x684.avif";
import tvTopLeft from "./img/LatestDealsShowcase/TV&AV/TV-SmallTile_TradeUp_dt_330x330.avif";
import tvTopRight from "./img/LatestDealsShowcase/TV&AV/TV-Offers_FreeFold4_dt_330x330.avif";
import tvBottomLeft from "./img/LatestDealsShowcase/TV&AV/Frame-Soundbar_SmallTile_DT_330x330.avif";
import tvBottomRight from "./img/LatestDealsShowcase/TV&AV/SmartTV-Package_SmallTile_DT_330x330.webp";

import homeMainbox from "./img/LatestDealsShowcase/Home/BigTile_HA-TradeUp_dt_684x684.avif";
import homeTopLeft from "./img/LatestDealsShowcase/Home/RF65A967FB1_EU_330x3301.avif";
import homeTopRight from "./img/LatestDealsShowcase/Home/WW12T504DAN_S1_330x330.avif";
import homeBottomLeft from "./img/LatestDealsShowcase/Home/bundle_330x330.avif";
import homeBottomRight from "./img/LatestDealsShowcase/Home/VS20R9042T2_EU_dt_330x330.avif";

import laptopMainbox from "./img/LatestDealsShowcase/Laptops&Monitors/Big-tile-book3pro-d.webp";
import laptopTopLeft from "./img/LatestDealsShowcase/Laptops&Monitors/Small-tile-book3series-d.avif";
import laptopTopRight from "./img/LatestDealsShowcase/Laptops&Monitors/G7_smalltile_DT_330x330.avif";
import laptopBottomLeft from "./img/LatestDealsShowcase/Laptops&Monitors/Small-tile-book3ultra-d.avif";
import laptopBottomRight from "./img/LatestDealsShowcase/Laptops&Monitors/SmallTile_Monitor-TradeUp_dt_330x330.avif";

function LatestDealsShowcase() {
  const [hoverBigbox, setHoverBigbox] = useState(false);
  const [hoverTopLeftbox, setHoverTopLeftbox] = useState(false);
  const [hoverTopRightbox, setHoverTopRightbox] = useState(false);
  const [hoverBottomLeftbox, setHoverBottomLeftbox] = useState(false);
  const [hoverBottomRightbox, setHoverBottomRightbox] = useState(false);
  

  const pagination = { 
    clickable: true,
    renderBullet: function (index, className) {
      const buttonName = [
        "New In",
        "Mobile",
        "TV&AV",
        "Home Appliances",
        "Laptops & Monitors",
      ];
      if (index === 0) {
        return (
          '<div id="buttons-div"><div class="bullets ' +
          className +
          '">' +
          buttonName[index] +
          "</div>"
        );
      } else if (index === 4) {
        return (
          '<div class="bullets ' +
          className +
          '">' +
          buttonName[index] +
          "</div></div>"
        );
      } else {
        return (
          '<div class="bullets ' +
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
      <h1 className="title">Latest Deals</h1>
      <Swiper
        className="showcase-swiper"
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide>   
          <div className="swiper-container">
            <div
              className="big-box"
              onMouseEnter={() => setHoverBigbox(true)}
              onMouseLeave={() => setHoverBigbox(false)}
            >
              <h1 className="newIn-big-box-corner-text">New</h1>
              <img
                className={
                  hoverBigbox ? "newInBigPicture-hover" : "newInBigPicture"
                }
                src={newInMainBox}
                alt="samsung s23"
              />
              <div className="newIn-big-box-text-container">
                <h1 className="newIn-big-box-title">Galaxy S23|S23+</h1>
                <p
                  className={
                    hoverBigbox ? "newIn-big-box-subtitle-hide" : "newIn-big-box-subtitle"
                  }
                >
                  Get a guaranteed £200 off when you trade in and use code
                  S23BOOST
                </p>
                <button
                  className={
                    hoverBigbox ? "newIn-cta-button-show" : "newIn-cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopLeftbox(true)}
              onMouseLeave={() => setHoverTopLeftbox(false)}>
              <img src={newInTopLeft} alt="samsung TV trade up" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Get up to £600 off a new TV</h1>
                <p
                  className={
                    hoverTopLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you recycle your old one for free
                </p>
                <button
                  className={
                    hoverTopLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomLeftbox(true)}
              onMouseLeave={() => setHoverBottomLeftbox(false)}>
              <img
                src={newInBottomLeft}
                alt="samsung trade up household appliances"
              />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Up to £200 off selected new home appliances</h1>
                <p
                  className={
                    hoverBottomLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you recycle your old one for free
                </p>
                <button
                  className={
                    hoverBottomLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopRightbox(true)}
              onMouseLeave={() => setHoverTopRightbox(false)}>
              <img src={newInTopRight} alt="samsung s23ultra series" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Get up to £750 off S23 Ultra</h1>
                <p
                  className={
                    hoverTopRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  when you trade in and use code S23BOOST
                </p>
                <button
                  className={
                    hoverTopRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomRightbox(true)}
              onMouseLeave={() => setHoverBottomRightbox(false)}>
              <img src={newInBottomRight} alt="samsung book pro 3" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Get free Galaxy Buds2 Pro (worth £219) </h1>
                <p
                  className={
                    hoverBottomRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  Get £100 off when you recycle your old laptop
                </p>
                <button
                  className={
                    hoverBottomRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div
              className="big-box"
              onMouseEnter={() => setHoverBigbox(true)}
              onMouseLeave={() => setHoverBigbox(false)}
            >
              <img
                className={
                  hoverBigbox ? "mobileBigPicture-hover" : "mobileBigPicture"
                }
                src={mobileMainbox}
                alt="samsung s23"
              />
              <div className="mobile-big-box-text-container">
                <h1 className="mobile-big-box-title">Galaxy S23 Ultra</h1>
                <p
                  className={
                    hoverBigbox ? "mobile-big-box-subtitle-hide" : "mobile-big-box-subtitle"
                  }
                >
                  Get up to £750 off when you trade in and use code S23BOOST
                </p>
                <button
                  className={
                    hoverBigbox ? "mobile-cta-button-show" : "mobile-cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopLeftbox(true)}
              onMouseLeave={() => setHoverTopLeftbox(false)}>
              <img src={mobileTopLeft} alt="samsung phones" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Get £100 off the new S23 and S23+</h1>
                <p
                  className={
                    hoverTopLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  with code S23SAVE
                </p>
                <button
                  className={
                    hoverTopLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomLeftbox(true)}
              onMouseLeave={() => setHoverBottomLeftbox(false)}>
              <img src={mobileBottomLeft} alt="samsung tablet" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Enjoy a guaranteed £150 off the Tab S8 and S7 FE</h1>
                <p
                  className={
                    hoverBottomLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you trade in any tablet
                </p>
                <button
                  className={
                    hoverBottomLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopRightbox(true)}
              onMouseLeave={() => setHoverTopRightbox(false)}>
              <img
                className="mobile-scale-picture"
                src={mobileTopRight}
                alt="samsung Z flip phone"
              />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Enjoy a guaranteed £150 off Galaxy Z Flip4</h1>
                <p
                  className={
                    hoverTopRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you trade in any smartphone
                </p>
                <button
                  className={
                    hoverTopRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomRightbox(true)}
              onMouseLeave={() => setHoverBottomRightbox(false)}>
              <img
                className="mobile-scale-picture"
                src={mobileBottomRight}
                alt="samsung phone"
              />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Enjoy a guaranteed £150 off Galaxy Z Fold4</h1>
                <p
                  className={
                    hoverBottomRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you trade in any smartphone
                </p>
                <button
                  className={
                    hoverBottomRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="big-box" onMouseEnter={() => setHoverBigbox(true)}
              onMouseLeave={() => setHoverBigbox(false)}>
              <img src={tvMainbox} alt="samsung tv" />
              <div className="tv-big-box-text-container">
                <h1 className="tv-big-box-title">Claim up to £300 cashback on <br/> selected TVs</h1>
                <p
                  className={
                    hoverBigbox ? "tv-big-box-subtitle-hide" : "tv-big-box-subtitle"
                  }
                >
                  And up to £250 on selected soundbars
                </p>
                <button
                  className={
                    hoverBigbox ? "tv-cta-button-show" : "tv-cta-button-hide"
                  }
                >
                 Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopLeftbox(true)}
              onMouseLeave={() => setHoverTopLeftbox(false)}>
              <img src={tvTopLeft} alt="samsung tv" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Get up to £600 off a new TV</h1>
                <p
                  className={
                    hoverTopLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you recycle your old TV for free⁵
                </p>
                <button
                  className={
                    hoverTopLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomLeftbox(true)}
              onMouseLeave={() => setHoverBottomLeftbox(false)}>
              <img src={tvTopRight} alt="samsung tv" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Claim a free Galaxy Z Fold4 or Galaxy S22</h1>
                <p
                  className={
                    hoverBottomLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you buy selected 8K TVs
                </p>
                <button
                  className={
                    hoverBottomLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopRightbox(true)}
              onMouseLeave={() => setHoverTopRightbox(false)}>
              <img src={tvBottomLeft} alt="samsung tv" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Get a free soundbar</h1>
                <p
                  className={
                    hoverTopRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you buy selected Frame & Serif TVs
                </p>
                <button
                  className={
                    hoverTopRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomRightbox(true)}
              onMouseLeave={() => setHoverBottomRightbox(false)}>
              <img src={tvBottomRight} alt="samsung tv" />
              <div className="small-box-text-container">
                <h1 className="mobile-small-box-title-bottom-right">Get a free Smart Start package worth over £160</h1>
                <p
                  className={
                    hoverBottomRightbox ? "mobile-small-box-subtitle-hide-bottom-right" : "mobile-small-box-subtitle-bottom-right"
                  }
                >
                 When you buy selected TVs
                </p>
                <button
                  className={
                    hoverBottomRightbox ? "mobile-cta-button-show-bottom-right" : "mobile-cta-button-hide-bottom-right"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="big-box" onMouseEnter={() => setHoverBigbox(true)}
              onMouseLeave={() => setHoverBigbox(false)}>
              <img src={homeMainbox} alt="fridge and washing machine" />
              <div className="home-big-box-text-container">
                <h1 className="home-big-box-title">Up to £200 off selected new home <br/> appliances</h1>
                <p
                  className={
                    hoverBigbox ? "home-big-box-subtitle-hide" : "home-big-box-subtitle"
                  }
                >
                  when you recycle your old one for free
                </p>
                <button
                  className={
                    hoverBigbox ? "home-cta-button-show" : "home-cta-button-hide"
                  }
                >
                 Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopLeftbox(true)}
              onMouseLeave={() => setHoverTopLeftbox(false)}>
              <img src={homeTopLeft} alt="samsung fridge" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Up to £540 off selected Fridge Freezers</h1>
                <p
                  className={
                    hoverTopLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  Finance options available
                </p>
                <button
                  className={
                    hoverTopLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomLeftbox(true)}
              onMouseLeave={() => setHoverBottomLeftbox(false)}>
              <img src={homeTopRight} alt="samsung washing machine" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Up to £120 off selected Washing Machines</h1>
                <p
                  className={
                    hoverBottomLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  5-year warranty available on selected appliances
                </p>
                <button
                  className={
                    hoverBottomLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopRightbox(true)}
              onMouseLeave={() => setHoverTopRightbox(false)}>
              <img src={homeBottomLeft} alt="fridge and washing machine" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Save 20% when you buy 3 selected appliances</h1>
                <p
                  className={
                    hoverTopRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  Or 15% when you buy two
                </p>
                <button
                  className={
                    hoverTopRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomRightbox(true)}
              onMouseLeave={() => setHoverBottomRightbox(false)}>
              <img src={homeBottomRight} alt="samsung vacuum cleaner" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Up to £300 off selected vacuum cleaners</h1>
                <p
                  className={
                    hoverBottomRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  Free delivery available in mainland UK.
                </p>
                <button
                  className={
                    hoverBottomRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="big-box" onMouseEnter={() => setHoverBigbox(true)}
              onMouseLeave={() => setHoverBigbox(false)}>
              <img src={laptopMainbox} alt="laptop" />
              <div className="laptop-big-box-text-container">
                <h1 className="laptop-big-box-title">Galaxy Book3 Pro 360</h1>
                <p
                  className={
                    hoverBigbox ? "laptop-big-box-subtitle-hide" : "laptop-big-box-subtitle"
                  }
                >
                  Get £100 off when you recycle your old laptop
                </p>
                <button
                  className={
                    hoverBigbox ? "laptop-cta-button-show" : "laptop-cta-button-hide"
                  }
                >
                 Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopLeftbox(true)}
              onMouseLeave={() => setHoverTopLeftbox(false)}>
              <img src={laptopTopLeft} alt="laptop" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Save 10% on the new Galaxy Book3 Series</h1>
                <p
                  className={
                    hoverTopLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                 When bought together with selected Galaxy products
                </p>
                <button
                  className={
                    hoverTopLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomLeftbox(true)}
              onMouseLeave={() => setHoverBottomLeftbox(false)}>
              <img src={laptopTopRight} alt="laptop" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">New Odyssey Neo G7 gaming monitor</h1>
                <p
                  className={
                    hoverBottomLeftbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  Pre order now and get a free 1TB portable SSD worth £134
                </p>
                <button
                  className={
                    hoverBottomLeftbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverTopRightbox(true)}
              onMouseLeave={() => setHoverTopRightbox(false)}>
              <img src={laptopBottomLeft} alt="pc monitor" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Galaxy Book3 Ultra</h1>
                <p
                  className={
                    hoverTopRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  Get £150 off when you recycle your old laptop
                </p>
                <button
                  className={
                    hoverTopRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="small-box" onMouseEnter={() => setHoverBottomRightbox(true)}
              onMouseLeave={() => setHoverBottomRightbox(false)}>
              <img src={laptopBottomRight} alt="pc monitor" />
              <div className="small-box-text-container">
                <h1 className="small-box-title">Get up to £200 off a new monitor</h1>
                <p
                  className={
                    hoverBottomRightbox ? "small-box-subtitle-hide" : "small-box-subtitle"
                  }
                >
                  When you recycle your old one for free
                </p>
                <button
                  className={
                    hoverBottomRightbox ? "cta-button-show" : "cta-button-hide"
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LatestDealsShowcase;
