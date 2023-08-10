import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Sponsor({ children }) {
  const sponsorSlider = {
    slidesPerView: 'auto',
    speed: 1200,
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    roundLengths: true,

    breakpoints: {
      280: {
        slidesPerView: 2,
        navigation: false,
      },
      320: {
        slidesPerView: 2,
        navigation: false,
      },
      576: {
        slidesPerView: 3,
        navigation: false,
      },
      768: {
        slidesPerView: 4,
        navigation: false,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  };

  const partnerImages = [
    'assets/images/portfolio/node.png',
    'assets/images/portfolio/redux.png',
    'assets/images/portfolio/JavaScript-logo.png',
    'assets/images/portfolio/react.png',
    'assets/images/portfolio/next.default',
    'assets/images/portfolio/servidor-sql.png',
  ];

  return (
    <div className='partner-section p-20'>
      <div className='container'>
        {children}
        <div className='row justify-center'>
          <Swiper {...sponsorSlider} className='swiper partner-slider'>
            <div className='swiper-wrapper'>
              {partnerImages.map((imageSrc, index) => (
                <SwiperSlide key={index} className='swiper-slide'>
                  <div className='partner-single'>
                    <img src={imageSrc} alt={`Partner ${index + 1}`} className='w-auto h-16 md:h-24' />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
