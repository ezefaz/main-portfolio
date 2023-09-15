import React from 'react';
import ReactTyped from 'react-typed';

function HeroSection() {
  const typedStrings = ['Full Stack Developer', 'Web Designer'];

  return (
    <div className='banner-section3 overflow-hidden position-relative ml-230'>
      <img src='assets/images/slider/home03/developer-banner.png' className='banner-bg31' alt='image' />
      <div className='container'>
        <div className='row justify-content-center align-items-center g-4'>
          <div className='col-xl-8 col-lg-9 col-md-11 text-center'>
            <div className='banner3-content'>
              <span>Hello, I’m Ezequiel.</span>
              <h2 className='fw-bold'>
                A Passionate
                <tr />
                <ReactTyped strings={typedStrings} typeSpeed={40} backSpeed={50} backDelay={2000} loop />{' '}
              </h2>
              <p className='fs-3'>Transforming ideas into captivating digital experiences.</p>
              <a href='#contact' className='eg-btn btn--primary2 btn--lg'>
                Let’s Build Something Amazing!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
