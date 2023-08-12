import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Autoplay]);

function PackageSlide({ imageSrc, date, title, link }) {
  return (
    <SwiperSlide className='swiper-slide'>
      <div className='tour-package-single2'>
        <div className='image'>
          <img src={imageSrc} className='img-fluid p-4' alt='image' />
          <span className='blog-date'>
            <i className='bi bi-calendar-check' />
            {date}
          </span>
        </div>
        <div className='content'>
          <h4>
            <a>{title}</a>
          </h4>
        </div>
      </div>
    </SwiperSlide>
  );
}

function Home3Package() {
  const packageSlides = [
    {
      imageSrc: 'assets/images/bg/web-development.png',
      date: '+3 years',
      title: 'Web Development',
      link: '/tour-package-details',
    },
    {
      imageSrc: 'assets/images/bg/web-design.jpeg',
      date: '+3 years',
      title: 'Web Design',
      link: '/tour-package-details',
    },
    {
      imageSrc: 'assets/images/bg/digital-marketing.webp',
      date: '+2 years',
      title: 'Digital Marketing',
      link: '/tour-package-details',
    },
    {
      imageSrc: 'assets/images/bg/social-media.png',
      date: '+2 years',
      title: 'Social Media',
      link: '/tour-package-details',
    },
  ];

  return (
    <div className='tour-package-section2 pt-0 pb-0' id='services'>
      <div className='container p-12'>
        <div className='row justify-content-start align-items-center mb-60'>
          <div className='col-lg-6 col-md-8 text-md-start text-center'>
            <div className='section-title3 d-flex flex-column justify-content-center mb-0'>
              <span>Feature Services</span>
              <h2>My Services</h2>
            </div>
          </div>
          {/* <div className='col-lg-6 col-md-4'>
            <div className='slider-arrows arrows-style-4 text-center d-md-flex d-none flex-row gap-5 justify-content-end align-items-center pt-1'>
              <div className='package2-prev swiper-prev-arrow' tabIndex={0} role='button' aria-label='Previous slide'>
                <i className='bi bi-arrow-left' />
              </div>
              <div className='package2-next swiper-next-arrow' tabIndex={0} role='button' aria-label='Next slide'>
                <i className='bi bi-arrow-right' />
              </div>
            </div>
          </div> */}
        </div>
        <div className='row'>
          <div className='col-12'>
            <Swiper
              slidesPerView='auto'
              speed={800}
              loop={true}
              freeMode={true}
              spaceBetween={25}
              grabCursor={true}
              freeModeMomentum={false}
              navigation={{
                nextEl: '.package2-prev',
                prevEl: '.package2-next',
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: 'true',
              }}
              breakpoints={{
                280: {
                  slidesPerView: 1,
                  navigation: false,
                },
                420: {
                  slidesPerView: 1,
                  navigation: false,
                },
                576: {
                  slidesPerView: 2,
                  navigation: false,
                },
                768: {
                  slidesPerView: 2,
                  navigation: false,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 3,
                },
                1500: {
                  slidesPerView: 4,
                },
              }}
              className='swiper package-slider2'
            >
              <div className='swiper-wrapper'>
                {packageSlides.map((slide, index) => (
                  <PackageSlide
                    key={index}
                    imageSrc={slide.imageSrc}
                    date={slide.date}
                    title={slide.title}
                    link={slide.link}
                  />
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Package;
