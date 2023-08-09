import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { offerSlider } from '../../utils/offerSlider';
import OfferItem from './OfferItem';
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home3Offer() {
  const offers = [
    {
      imageSrc: 'assets/images/bg/offer-bg1.png',
      badgeSrc: 'assets/images/bg/offer-badge1.svg',
      reviewCount: 10,
      linkHref: '/tour-package-details',
      title: 'Palermojai',
      duration: '03 days / from $2500',
    },
    {
      imageSrc: 'assets/images/bg/offer-bg2.png',
      badgeSrc: 'assets/images/bg/offer-badge2.svg',
      reviewCount: 10,
      linkHref: '/tour-package-details',
      title: 'WebGeenix',
      duration: '5 days / from $900',
    },
    {
      imageSrc: 'assets/images/bg/offer-bg3.png',
      badgeSrc: 'assets/images/bg/offer-badge3.svg',
      reviewCount: 10,
      linkHref: '/tour-package-details',
      title: 'PsicoApp',
      duration: '2 days / from $900',
    },
    {
      imageSrc: 'assets/images/bg/offer-bg3.png',
      badgeSrc: 'assets/images/bg/offer-badge3.svg',
      reviewCount: 10,
      linkHref: '/tour-package-details',
      title: 'Vicla SA',
      duration: '2 days / from $900',
    },
  ];

  return (
    <div className='offer-section sibling-2 pt-120 pb-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <div className='section-title3'>
              <span>Work</span>
              <h2>My Latest Projects</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 '>
            <Swiper {...offerSlider} className='swiper offer-slider'>
              <div className='swiper-wrapper'>
                {offers.map((offer, index) => (
                  <SwiperSlide key={index} className='swiper-slide'>
                    <OfferItem {...offer} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Offer;
