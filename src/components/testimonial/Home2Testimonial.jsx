import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home2Testimonial() {
  const testimonial2Slider = {
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: true,
    spaceBetween: 45,
    loop: true,
    roundLengths: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.package2-prev',
      prevEl: '.package2-next',
    },
    breakpoints: {
      280: {
        slidesPerView: 'auto',
        navigation: false,
      },
      386: {
        slidesPerView: 'auto',
        navigation: false,
      },
      576: {
        slidesPerView: 'auto',
        navigation: false,
      },
      768: {
        slidesPerView: 'auto',
        navigation: false,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };

  const testimonialSlides = [
    {
      author: 'Jhoskar',
      role: 'Developer',
      content:
        '“Ezequiel is an excellent programmer, has a great capacity for learning and has great creativity. He can offer the most optimal solution for any problem or task assigned to him and has great potential for the frontend!”',
    },
    {
      author: 'Miguel',
      role: 'Developer',
      content:
        '“I was part of the same team as Ezequiel in a project and he was a key person in the frontend, he is a genius, he had initiative when looking for different tools and implementing them in the project giving the page a great visual aspect. He is a self-taught person who strives to fulfill his goals. He is also an excellent colleague and human being. It was a pleasure working with him.”',
    },
    {
      author: 'Tomas',
      role: 'Developer',
      content:
        '“Ezequiel is an excellent colleague, I shared a team with him, although not in the same sector within the project, beyond this I could see that he knows how to handle himself very well within a team. He is a design specialist, he likes things to look good and I notice good UX/UI oriented programming. On the other hand, Ezequiel handles good communication, listens actively and he is always willing to learn new tools.”',
    },
    {
      author: 'Jessica',
      role: 'Tech Leader',
      content:
        '“Ezequiel is a very serious developer of excellent quality. He is creative, self-taught and decisive. He knows how to carry out intuitive and attractive designs. Thanks to the fact that it is aware of the needs of the client, it manages to achieve the maximum experience for the user. I highlight his active listening, good companionship, and joy. He also knows how to ask for help when necessary!”',
    },
    {
      author: 'Pablo',
      role: 'Developer',
      content:
        '“Ezequiel worked very efficiently, always focusing on the details of the work. He also adapted very well to the team work. He knew how to apply his skills on the required tasks to reach our goals. I strongly recommend his skills.”',
    },
    {
      author: 'Alejandro',
      role: 'Developer',
      content:
        '“Eze is an excellent professional not only technically but also socially, he works in a team, is self-taught and is also a crack at Frontend. A great pleasure working with him.”',
    },
  ];

  return (
    <div className='testimonial-section pb-120   position-relative' id='testimonials'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <div className='section-title2 text-center d-flex flex-column justify-content-center'>
              <svg width={2} height={40} viewBox='0 0 2 40' xmlns='http://www.w3.org/2000/svg'>
                <rect width={2} height={40} rx={1} />
              </svg>
              <span>Testimonials &amp; Reviews</span>
              <h2>Partner Opinions</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Swiper {...testimonial2Slider} className='swiper testimonial2-slider'>
              <div className='col-lg-6 col-md-4'>
                <div className='slider-arrows arrows-style-4 d-md-flex d-none flex-row gap-5'>
                  <div
                    className='package2-prev swiper-prev-arrow'
                    tabIndex={0}
                    role='button'
                    aria-label='Previous slide'
                  >
                    <i className='bi bi-arrow-left' />
                  </div>
                  <div className='package2-next swiper-next-arrow' tabIndex={0} role='button' aria-label='Next slide'>
                    <i className='bi bi-arrow-right' />
                  </div>
                </div>
              </div>
              <div className='swiper-wrapper'>
                {testimonialSlides.map((slide, index) => (
                  <SwiperSlide key={index} className='swiper-slide'>
                    <div className='testimonial-single1 siblling-2'>
                      <svg width={238} height={238} viewBox='0 0 238 238' xmlns='http://www.w3.org/2000/svg'>
                        {/* ... SVG path here ... */}
                      </svg>
                      <ul className='star-list'>
                        {Array.from({ length: 5 }, (_, index) => (
                          <li key={index}>
                            <i className='bi bi-star-fill' />
                          </li>
                        ))}
                      </ul>

                      <p className='fs-4'>{slide.content}</p>
                      <div className='testi-author'>
                        <div className='author-text'>
                          <h5>{slide.author}</h5>
                          <p>{slide.role}</p>
                        </div>
                      </div>
                    </div>
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

export default Home2Testimonial;
