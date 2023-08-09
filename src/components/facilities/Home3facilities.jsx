import React from 'react';

function Home3facilities() {
  return (
    <div className='facilities-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <div className='section-title3'>
              <span>Technologies</span>
              <h2>My Stack.</h2>
            </div>
          </div>
        </div>
        <div className='row g-4 justify-content-center'>
          <div className='col-lg-4 col-lg-4 col-md-6 col-sm-10'>
            <div className='facility-single'>
              <div className='icon'>
                <img src='assets/images/icons/facility1.svg' alt='image' />
              </div>
              <div className='text'>
                <h4>Frameworks</h4>
                <p>React Js , Next Js</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-10'>
            <div className='facility-single'>
              <div className='icon'>
                <img src='assets/images/icons/facility2.svg' alt='image' />
              </div>
              <div className='text'>
                <h4>Next Js</h4>
                <p>Lorem ipsum dolor sit amet, stsrf consec adi piscing elit</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-10'>
            <div className='facility-single'>
              <div className='icon'>
                <img src='assets/images/icons/facility3.svg' alt='image' />
              </div>
              <div className='text'>
                <h4>Node Js</h4>
                <p>Lorem ipsum dolor sit amet, stsrf consec adi piscing elit</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-10'>
            <div className='facility-single'>
              <div className='icon'>
                <img src='assets/images/icons/facility4.svg' alt='image' />
              </div>
              <div className='text'>
                <h4>State Management</h4>
                <p>Redux, Zustand</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-10'>
            <div className='facility-single'>
              <div className='icon'>
                <img src='assets/images/icons/facility5.svg' alt='image' />
              </div>
              <div className='text'>
                <h4>SQL</h4>
                <p>Lorem ipsum dolor sit amet, stsrf consec adi piscing elit</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-10'>
            <div className='facility-single'>
              <div className='icon'>
                <img src='assets/images/icons/facility6.svg' alt='image' />
              </div>
              <div className='text'>
                <h4>Testing</h4>
                <p>Cypress, Mocha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3facilities;
