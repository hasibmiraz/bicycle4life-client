import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel w-full h-[60vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          alt=""
          src="https://ychef.files.bbci.co.uk/1376x774/p07phq4b.jpg"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          alt=""
          src="https://trek.scene7.com/is/image/TrekBicycleProducts/TK21_3000x1688_WBR?$responsive-pjpg$&cache=on,on&wid=1920"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          alt=""
          src="https://cd.bike-discount.de/media/image/fc/a2/23/629626_fahrradteile.jpg"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          alt=""
          src="https://www.bikethomson.com/wp-content/uploads/2021/09/ThomsonGravelBike-25-Crop-1140x732.jpg"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
