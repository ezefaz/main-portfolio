import Link from 'next/link';
import React from 'react';

function Home3Feature({ padding = '' }) {
  return (
    <div className={`feature-section2 pb-120 ${padding}`} id='about'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 ps-lg-5'>
            <div className='about3-title text-start'>
              <span>Nice to Meet You!</span>
              <h2>Ezequiel Faszczak</h2>
              <p>
                Hello there! My name is Ezequiel Faszczak. I am a web designer & developer, and Im very passionate and
                dedicated to my work.
              </p>
              <p>
                With more than 3 years experience as a professional developer, I have acquired the skills and knowledge
                necessary to make your project a success. I enjoy every step of the development process, from discussion
                and collaboration.
              </p>
            </div>
            <ul className='feature3-list'>
              {/* <li>Price of additional materials or parts (if needed)</li>
              <li>Transportation cost for carrying new materials/parts</li> */}
            </ul>
            <div>
              <Link href='#contact'>
                <a
                  className='eg-btn btn--primary2 sibling-2 btn--lg'
                  style={{ marginRight: '2rem', fontSize: '1.5rem' }}
                >
                  Lets Talk
                </a>
              </Link>
              <a
                href='assets/pdfs/Ezequiel Faszczak - Full Stack Developer.pdf'
                className='eg-btn btn--primary3-outline sibling-2 btn--lg'
                style={{ fontSize: '1.5rem' }}
                download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='feature-image-group d-flex flex-row justify-content-center gap-5'>
              {/* <div className='feature3-icon'>
                <img src='assets/images/icons/feature3-icon.svg' alt='' />
              </div> */}
              <div className='feature-image'>
                <img src='assets/images/bg/feature3.png' className='img-fluid' alt='image' />
              </div>
              <div className='feature-image translate-y'>
                <img src='assets/images/bg/feature4.png' className='img-fluid' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Feature;
