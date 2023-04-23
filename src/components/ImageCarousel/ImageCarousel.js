import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageCarousel.style.css";
import imageCar from "../img/carousel-img.svg";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const ImageCarousel = () => {
  return (
    <>
      <h2 className="carousel-page-head">WHAT OUR CLIENTS ARE SAYING</h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-box">
            <img src={imageCar} alt="carousel" className="carousel-img"></img>
            <h2 className="carousel-header">Oluwaseyi Ajewole</h2>
            <p className="carousel-paragraph">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-box">
            <img src={imageCar} alt="carousel" className="carousel-img"></img>
            <h2 className="carousel-header">Oluwaseyi Ajewole</h2>
            <p className="carousel-paragraph">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-box">
            <img src={imageCar} alt="carousel" className="carousel-img"></img>
            <h2 className="carousel-header">Oluwaseyi Ajewole</h2>
            <p className="carousel-paragraph">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageCarousel;
