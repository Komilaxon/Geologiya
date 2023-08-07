import "./hero_slider.css";
import React from "react";
import Slider from "react-slick";

export const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div style={{ display: "flex" }} className="slider_block">
        <div className="carousel-box__text">
          <h3 className="header_slider_text">
            Tog‘-kon sanoatida ilg’or texnologiyalar
          </h3>
        </div>
      </div>
      <div className="slider_block">
        <h3 className="header_slider_text">
          Tog‘-kon sanoatida ilg’or texnologiyalar
        </h3>
      </div>
      <div className="slider_block">
        <h3 className="header_slider_text">
          Tog‘-kon sanoatida ilg’or texnologiyalar
        </h3>
      </div>
      <div className="slider_block">
        <h3 className="header_slider_text">
          Tog‘-kon sanoatida ilg’or texnologiyalar
        </h3>
      </div>
    </Slider>
  );
};
