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
              <h2>About Me</h2>
              <p>
                Greetings! I’m Ezequiel Faszczak, a proficient Full Stack Developer and designer with an unwavering
                passion for my craft.
              </p>
              <p>
                With over 3 years of experience in the industry, I’ve honed the skills and expertise needed to transform
                your project into a triumph. I take immense pleasure in every facet of the development journey, from
                brainstorming and working collaboratively with you, to bringing innovative ideas to life. My commitment
                to excellence ensures that your vision will not only be realized but elevated to new heights.
              </p>
              <p>
                Let’s embark on this exciting journey together, turning your ideas into compelling digital realities!
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
                  Let’s Talk
                </a>
              </Link>
              <a
                href='assets/pdfs/Full Stack Developer - Ezequiel Faszczak.pdf'
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
                <img src='assets/images/bg/opcion1.jpg' className='img-fluid h-[100%]' alt='image' />
              </div>
              <div className='feature-image translate-y'>
                <img src='assets/images/bg/yo.jpeg' className='img-fluid h-[100%]' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Feature;
