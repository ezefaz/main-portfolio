import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
function Footer1() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const sibling =
    currentRoute === '/index-city-tour' || currentRoute === '/index-city-tour'
      ? 'footer-section sibling-2'
      : currentRoute === '/index-travel2'
      ? 'footer-section sibling-2'
      : currentRoute == '/index-wildlife'
      ? 'footer-section sibling-3'
      : 'footer-section';
  return (
    <footer className={sibling}>
      <div className='footer-top'>
        <div className='container-xl container-lg-fluid container'>
          <div className='row justify-content-center gy-5'>
            <div className='col-lg-3 col-md-10 col-sm-6 col-11 order-sm-0 order-1'>
              {/* <div className='footer-about'>
                <img src='assets/images/icons/footer-plane.svg' className='footer-plane' alt='image' />
                <div className='footer1-logo'>
                  <img src='assets/images/icons/footer1-logo.svg' alt='image' />
                  <p>Since: 2022</p>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  version='1.1'
                  viewBox='0 0 400 400'
                >
                  <defs>
                    <path d='M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0' id='txt-path' fill='white' />
                  </defs>
                  <text fill='#DDDDDD' fontSize='35.5' fontFamily='Helvetica Neue' fontWeight={600}>
                    <textPath startOffset={0} xlinkHref='#txt-path'>
                      Astrip Travel Agency &nbsp; Astrip Travel Agency
                    </textPath>
                  </text>
                </svg>
              </div> */}
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center'>
              <div className='footer-item'>
                <h4>Information</h4>
                <ul className='link-list'>
                  <li>
                    <Link href='/about'>
                      <a>About Company</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>Online Query</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>Become Partner</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>Help &amp; Support</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>Contact Channels</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center'>
              <div className='footer-item'>
                <h4>Destinations</h4>
                <ul className='link-list'>
                  <li>
                    <Link href='/destination-details'>
                      <a>Grand Switzerland</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/destination-details'>
                      <a>Beauty of Paris</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/destination-details'>
                      <a>United States</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/destination-details'>
                      <a>Wiesbaden Sea</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/destination-details'>
                      <a>Bangladesh</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center'>
              <div className='footer-item'>
                <h4>Reach Us</h4>
                <ul className='contact-list'>
                  <li>
                    <div className='icon'>
                      <i className='bi bi-telephone' />
                    </div>
                    <div className='text'>
                      <a href='tel:+8801761111456'>+880 176 1111 456</a>
                      <a href='tel:+8801761111457'>+880 176 1111 457</a>
                    </div>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='bi bi-envelope' />
                    </div>
                    <div className='text'>
                      <a href='mailto:info@example.com'>info@example.com</a>
                      <a href='mailto:support@example.com'>support@example.com</a>
                    </div>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='bi bi-geo-alt' />
                    </div>
                    <div className='text'>168/170, Avenue 01, Mirpur DOHS, Bangladesh</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row footer-meta'>
            <div className='col-lg-6 d-flex justify-content-lg-start justify-content-center align-items-center mb-lg-0 mb-5'>
              <h4>Stay Connected:</h4>
              <ul className='footer-social'>
                <li>
                  <a href='https://www.facebook.com/'>
                    <i className='bx bxl-facebook' />
                  </a>
                </li>
                <li>
                  <a href='https://www.twitter.com/'>
                    <i className='bx bxl-twitter' />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/'>
                    <i className='bx bxl-instagram' />
                  </a>
                </li>
                <li>
                  <a href='https://www.pinterest.com/'>
                    <i className='bx bxl-pinterest' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center'>
              <h4>Pay Safely With Us!</h4>
              <ul className='pay-list'>
                <li>
                  <img src='assets/images/icons/pay1.svg' alt='image' />
                </li>
                <li>
                  <img src='assets/images/icons/pay2.svg' alt='image' />
                </li>
                <li>
                  <img src='assets/images/icons/pay3.svg' alt='image' />
                </li>
                <li>
                  <img src='assets/images/icons/pay4.svg' alt='image' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='footer-bottom'>
          <div className='row d-flex align-items-center g-3'>
            <div className='col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1'>
              <p>
                Copyright 2022{' '}
                <a href='#' className='egns-lab'>
                  Astrip{' '}
                </a>{' '}
                | Design By{' '}
                <a href='https://themeforest.net/category/site-templates?term=egenslab' className='egns-lab'>
                  Egens Lab
                </a>
              </p>
            </div>
            <div className='col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center'>
              <ul className='f-bottom-list d-flex jusify-content-start align-items-center'>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
