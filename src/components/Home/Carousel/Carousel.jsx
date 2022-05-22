import React from 'react';

const Carousel = () => {
  return (
    <div class="carousel w-full h-[60vh] bg-cover">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          alt=""
          src="https://ychef.files.bbci.co.uk/1376x774/p07phq4b.jpg"
          class="w-full bg-center bg-cover"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          alt=""
          src="https://trek.scene7.com/is/image/TrekBicycleProducts/TK21_3000x1688_WBR?$responsive-pjpg$&cache=on,on&wid=1920"
          class="w-full"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          alt=""
          src="https://cd.bike-discount.de/media/image/fc/a2/23/629626_fahrradteile.jpg"
          class="w-full"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          alt=""
          src="https://www.bikethomson.com/wp-content/uploads/2021/09/ThomsonGravelBike-25-Crop-1140x732.jpg"
          class="w-full"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
