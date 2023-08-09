import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer, useState } from 'react';
import Home3Video from '../../public/video/Home3Video';
import Banner3 from '../components/banner/Banner3';
import Home3Blog from '../components/blog/Home3Blog';
import Preloader from '../components/common/Preloader';
import Home3Destination from '../components/destination/Home3Destination';
import Home3facilities from '../components/facilities/Home3facilities';
import Home3Feature from '../components/feature/Home3Feature';
import Footer1 from '../components/footer/Footer1';
import Home3Guide from '../components/guide/Home3Guide';
import Home3Newslatter from '../components/home/Home3Newslatter';
import Home3Offer from '../components/offer/Home3Offer';
import Home3Package from '../components/package/Home3Package';
import Sponsor from '../components/sponsor/Sponsor';
const initialState = { activeMenu: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'home':
      return { activeMenu: 'home' };
    case 'destination':
      return { activeMenu: 'destination' };
    case 'tour':
      return { activeMenu: 'tour' };
    case 'pages':
      return { activeMenu: 'pages' };
    case 'blog':
      return { activeMenu: 'blog' };
    case 'childmenu':
      return { activeMenu: 'childmenu' };
    default:
      return { activeMenu: '' };
  }
}
function IndexCityTour() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [showsubMenu, setsubMenu] = useState(false);
  const [loading, setoading] = useState(false);
  const currentRoute = router.pathname;
  useEffect(() => {
    setoading(true);
    setTimeout(() => {
      setoading(false);
    }, 3000);
  }, []);

  // sidebar menu hnadle function
  const handleMobileMenu = () => {
    if (showMobileMenu === false || showMobileMenu === 0) {
      setMobileMenu(1);
    } else {
      setMobileMenu(false);
    }
  };
  const handleSubMenu = () => {
    if (showsubMenu === false || showsubMenu === 0) {
      setsubMenu(1);
    } else {
      setsubMenu(false);
    }
  };
  return (
    <>
      {!loading ? (
        <>
          <Head>
            <title>Loading</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='assets/images/icons/logo-icon.svg' />
          </Head>
          <Preloader loader='home2preloader' />
        </>
      ) : (
        <>
          <Head>
            <title>Astrip - Tour Booking and Travel Agency React NextJS Template</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='assets/images/icons/logo-icon.svg' />
          </Head>

          <div className='page-wrapper'>
            <div className='main-nav-wrapper'>
              <div className={showMobileMenu ? 'main-nav show-menu ' : 'main-nav'}>
                <div className='menu-close-btn' onClick={handleMobileMenu}>
                  <i className='bi bi-x-lg' />
                </div>
                <div className='mobile-logo-area d-flex justify-content-xl-center justify-content-start align-items-center'>
                  <div className='header-logo'>
                    <Link href='/'>
                      <a>
                        <img alt='image' className='img-fluid' src='assets/images/icons/header4-logo.svg' />
                      </a>
                    </Link>
                  </div>
                </div>
                <ul className='menu-list'>
                  <li className='menu-item-has-children'>
                    <Link href='#'>
                      <a className='drop-down'>
                        <img src='assets/images/icons/home-icon.svg' alt='image' />
                        Home
                      </a>
                    </Link>
                    <i
                      className={
                        state.activeMenu === 'home'
                          ? 'bi bi-chevron-up dropdown-icon'
                          : 'bi bi-chevron-down dropdown-icon'
                      }
                      onClick={() => dispatch({ type: 'home' })}
                    />
                    <ul className={state.activeMenu === 'home' ? 'sub-menu d-block' : 'sub-menu d-none'}>
                      <li>
                        <Link href='/'>
                          <a>Travel Agency 01</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/index-travel2'>
                          <a>Travel Agency 02</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/index-city-tour'>
                          <a>City Tour</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/index-adventure'>
                          <a>Adventure</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/index-wildlife'>
                          <a>Wild life</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <Link href='/destination'>
                      <a
                        className={
                          currentRoute === '/destination' || currentRoute === '/destination-details'
                            ? 'drop-down active'
                            : 'drop-down disabled'
                        }
                      >
                        <img src='assets/images/icons/desitnation-icon.svg' alt='image'></img>
                        Destination
                      </a>
                    </Link>
                    <i
                      className={
                        state.activeMenu === 'destination'
                          ? 'bi bi-chevron-up dropdown-icon'
                          : 'bi bi-chevron-down dropdown-icon'
                      }
                      onClick={() => dispatch({ type: 'destination' })}
                    />
                    <ul className={state.activeMenu === 'destination' ? 'sub-menu d-block' : ' d-none sub-menu'}>
                      <li>
                        <Link href='/destination'>
                          <a>Destination</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/destination-details'>
                          <a>Destination Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <Link href='#'>
                      <a
                        className={
                          currentRoute === '/tour-package' ||
                          currentRoute === '/tour-package2' ||
                          currentRoute === '/tour-package-sidebar' ||
                          currentRoute === '/tour-package-details'
                            ? 'drop-down active'
                            : 'drop-down disabled'
                        }
                      >
                        <img src='assets/images/icons/tour-icon.svg' alt='image' />
                        Tours
                      </a>
                    </Link>
                    <i
                      className={
                        state.activeMenu === 'tour'
                          ? 'bi bi-chevron-up dropdown-icon'
                          : 'bi bi-chevron-down dropdown-icon'
                      }
                      onClick={() => dispatch({ type: 'tour' })}
                    />
                    <ul className={state.activeMenu === 'tour' ? 'sub-menu d-block' : 'sub-menu d-none'}>
                      <li>
                        <Link href='/tour-package'>
                          <a>Tour Package 1</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/tour-package2'>
                          <a>Tour Package 2</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/tour-package-sidebar'>
                          <a>Package Sidebar</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/tour-package-details'>
                          <a>Package Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <Link href='#'>
                      <a
                        className={
                          currentRoute === 'about' ||
                          currentRoute === '/tour-guide' ||
                          currentRoute === '/gallery' ||
                          currentRoute === 'faq' ||
                          currentRoute === '/error'
                            ? 'drop-down active '
                            : 'drop-down disabled'
                        }
                      >
                        <img src='assets/images/icons/pages.svg' alt='images' />
                        Pages
                      </a>
                    </Link>
                    <i
                      className={
                        state.activeMenu === 'pages'
                          ? 'bi bi-chevron-up dropdown-icon'
                          : 'bi bi-chevron-down dropdown-icon'
                      }
                      onClick={() => dispatch({ type: 'pages' })}
                    />
                    <ul className={state.activeMenu === 'pages' ? 'sub-menu d-block' : 'sub-menu d-none'}>
                      <li>
                        <Link href='/about'>
                          <a>About Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/tour-guide'>
                          <a>Tour Guide</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/gallery'>
                          <a>Gallery</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/faq'>
                          <a>Faq</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/error'>
                          <a>Error</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                          <a onClick={handleSubMenu}>Submenu</a>
                        </Link>
                        <i className='d-lg-flex d-none bi bi-chevron-right dropdown-icon' />
                        <i
                          className={
                            showsubMenu
                              ? 'd-lg-none d-flex bi dropdown-icon bi-chevron-up'
                              : 'd-lg-none d-flex bi dropdown-icon bi-chevron-down'
                          }
                        />
                        <ul className={showsubMenu ? 'sub-menu d-block' : 'sub-menu d-none'}>
                          <li>
                            <Link href='/about'>
                              <a>Children 1</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/team'>
                              <a>Children 2</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/faq'>
                              <a>Children 3</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/error'>
                              <a>Children 4</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <Link href='/blog-grid'>
                      <a
                        className={
                          currentRoute === '/blog-grid' ||
                          currentRoute === '/blog-standard' ||
                          currentRoute === '/blog-details'
                            ? 'drop-down active '
                            : 'drop-down disabled'
                        }
                      >
                        <img src='assets/images/icons/blog-icon.svg' alt='image' />
                        Blog
                      </a>
                    </Link>
                    <i
                      className={
                        state.activeMenu === 'blog'
                          ? 'bi bi-chevron-up dropdown-icon'
                          : 'bi bi-chevron-down dropdown-icon'
                      }
                      onClick={() => dispatch({ type: 'blog' })}
                    />
                    <ul className={state.activeMenu === 'blog' ? 'sub-menu d-block' : 'sub-menu'}>
                      <li>
                        <Link href='/blog-grid'>
                          <a>Blog Grid</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-standard'>
                          <a>Blog Standard</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details'>
                          <a>Blog Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a className={currentRoute === '/contact' ? 'active' : 'disabled'}>
                        <img src='assets/images/icons/contact-icon.svg' alt='image' />
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
                {/* <Link href="/login">
                <a className="uesr-aera"><i className="bi bi-person-circle" /></a>
              </Link> */}
              </div>
            </div>

            <div className='main-content-area'>
              <header className='style-3'>
                <div className='nav-right d-flex jsutify-content-end align-items-center gap-5'>
                  <div className='phone-call sibling4 justify-content-start align-items-center flex-row d-xl-flex d-none'>
                    <div className='icon'>
                      <svg width={18} height={18} viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M28.4525 22.3006C27.7155 21.5332 26.8265 21.1229 25.8844 21.1229C24.9498 21.1229 24.0532 21.5256 23.2858 22.293L20.8848 24.6864C20.6873 24.58 20.4898 24.4813 20.2998 24.3825C20.0263 24.2457 19.7679 24.1166 19.5476 23.9798C17.2986 22.5514 15.2547 20.6898 13.2944 18.2813C12.3446 17.0808 11.7064 16.0702 11.2429 15.0445C11.866 14.4746 12.4434 13.882 13.0057 13.3121C13.2184 13.0994 13.4312 12.879 13.6439 12.6663C15.2395 11.0707 15.2395 9.00404 13.6439 7.40845L11.5696 5.33419C11.3341 5.09865 11.091 4.85551 10.863 4.61237C10.4071 4.14129 9.92847 3.65502 9.4346 3.19913C8.69759 2.46972 7.81621 2.08222 6.88925 2.08222C5.96229 2.08222 5.06572 2.46972 4.30592 3.19913C4.29832 3.20673 4.29832 3.20673 4.29072 3.21433L1.70738 5.82046C0.734835 6.79301 0.180177 7.97831 0.0586086 9.35355C-0.123745 11.5722 0.529687 13.6389 1.03116 14.9913C2.26204 18.3116 4.10077 21.3889 6.84366 24.6864C10.1716 28.6602 14.1758 31.7982 18.7498 34.0092C20.4974 34.8374 22.83 35.8176 25.4361 35.9847C25.5956 35.9923 25.7628 35.9999 25.9148 35.9999C27.6699 35.9999 29.1439 35.3693 30.2988 34.1156C30.3064 34.1004 30.3216 34.0928 30.3292 34.0776C30.7243 33.5989 31.1802 33.1658 31.6589 32.7024C31.9856 32.3908 32.3199 32.0641 32.6466 31.7222C33.3988 30.9396 33.7939 30.0278 33.7939 29.0933C33.7939 28.1511 33.3912 27.247 32.6238 26.4871L28.4525 22.3006ZM31.1726 30.3014C31.165 30.3014 31.165 30.309 31.1726 30.3014C30.8763 30.6205 30.5724 30.9092 30.2456 31.2283C29.7518 31.6994 29.2503 32.1933 28.7792 32.7479C28.0118 33.5685 27.1077 33.956 25.9224 33.956C25.8084 33.956 25.6868 33.956 25.5728 33.9484C23.3162 33.8041 21.2192 32.9227 19.6464 32.1705C15.3459 30.0886 11.5696 27.133 8.43165 23.3871C5.84072 20.2643 4.10837 17.3771 2.96106 14.2771C2.25444 12.3852 1.99611 10.9112 2.11008 9.52071C2.18606 8.63174 2.52797 7.89473 3.15861 7.26409L5.74954 4.67316C6.12185 4.32365 6.51695 4.13369 6.90445 4.13369C7.38312 4.13369 7.77063 4.42242 8.01376 4.66556C8.02136 4.67316 8.02896 4.68075 8.03656 4.68835C8.50004 5.12144 8.94072 5.56973 9.4042 6.0484C9.63974 6.29154 9.88288 6.53468 10.126 6.78541L12.2003 8.85968C13.0057 9.66507 13.0057 10.4097 12.2003 11.2151C11.9799 11.4354 11.7672 11.6558 11.5469 11.8685C10.9086 12.5219 10.3008 13.1298 9.63974 13.7224C9.62455 13.7376 9.60935 13.7452 9.60175 13.7604C8.94832 14.4139 9.06989 15.0521 9.20666 15.4852C9.21425 15.508 9.22185 15.5308 9.22945 15.5536C9.76891 16.8604 10.5287 18.0913 11.6836 19.5577L11.6912 19.5653C13.7883 22.1487 15.9993 24.1621 18.4383 25.7045C18.7498 25.9021 19.0689 26.0617 19.3728 26.2136C19.6464 26.3504 19.9047 26.4795 20.125 26.6163C20.1554 26.6315 20.1858 26.6543 20.2162 26.6695C20.4746 26.7987 20.7177 26.8595 20.9684 26.8595C21.5991 26.8595 21.9942 26.4644 22.1233 26.3352L24.7219 23.7367C24.9802 23.4783 25.3905 23.1668 25.8692 23.1668C26.3402 23.1668 26.7277 23.4631 26.9633 23.7215C26.9709 23.7291 26.9709 23.7291 26.9785 23.7367L31.165 27.9232C31.9476 28.6982 31.9476 29.496 31.1726 30.3014Z' />
                        <path d='M19.4556 8.56378C21.4463 8.8981 23.2547 9.84025 24.6983 11.2839C26.1419 12.7275 27.0765 14.5358 27.4184 16.5265C27.502 17.028 27.9351 17.3775 28.4289 17.3775C28.4897 17.3775 28.5429 17.3699 28.6037 17.3623C29.1659 17.2711 29.5382 16.7393 29.4471 16.177C29.0368 13.7684 27.8971 11.5726 26.1571 9.83266C24.4172 8.0927 22.2213 6.953 19.8127 6.5427C19.2505 6.45152 18.7262 6.82383 18.6275 7.37849C18.5287 7.93314 18.8934 8.47261 19.4556 8.56378Z' />
                        <path d='M35.9595 15.8804C35.2832 11.9142 33.4141 8.30511 30.5421 5.43304C27.67 2.56098 24.0609 0.691864 20.0947 0.0156379C19.5401 -0.0831367 19.0158 0.296766 18.917 0.851423C18.8259 1.41368 19.1982 1.93794 19.7604 2.03672C23.3011 2.63696 26.5303 4.31613 29.0984 6.87667C31.6666 9.44481 33.3381 12.674 33.9384 16.2147C34.022 16.7161 34.455 17.0657 34.9489 17.0657C35.0097 17.0657 35.0629 17.0581 35.1237 17.0505C35.6783 16.9669 36.0582 16.435 35.9595 15.8804Z' />
                      </svg>
                    </div>
                    <div className='number'>
                      <h5>
                        <a href='tel:+8801701111000'>+8801701111000</a>
                      </h5>
                    </div>
                  </div>
                  <div className='phone-call sibling4 justify-content-start align-items-center flex-row d-xxl-flex d-none'>
                    <div className='icon'>
                      <svg width={18} height={18} viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M9.87299 0.09375C8.37885 0.322266 6.95503 0.820312 5.70698 1.55859C2.57807 3.39258 0.497993 6.5625 0.0585399 10.1543C0.0116649 10.5117 -5.38286e-05 11.1152 0.0175243 11.7656C0.0526806 12.9609 0.117134 13.2949 0.644478 15.1758C1.10151 16.793 1.17182 17.1504 1.17182 17.959C1.17182 19.0781 0.960884 19.9043 0.386665 21.0176C0.0233837 21.7207 -0.00591321 21.8848 0.187446 22.2656C0.298774 22.4824 0.392524 22.5703 0.732368 22.7461C2.58979 23.7422 5.02729 23.6133 6.74995 22.4414L7.10151 22.2012L7.5937 22.3769C8.13862 22.5762 8.99409 22.7988 9.66792 22.9219C9.95503 22.9687 10.5761 22.998 11.4843 22.998C12.7558 22.9922 12.9199 22.9805 13.623 22.834C16.7578 22.166 19.4121 20.3965 21.1464 17.8125C23.9355 13.6523 23.6601 8.16797 20.4609 4.25976C19.9394 3.62695 18.8496 2.60156 18.2343 2.16797C16.5937 1.00781 14.9765 0.351562 13.1132 0.0878906C12.3574 -0.0175781 10.5878 -0.0175781 9.87299 0.09375ZM13.3242 1.99219C17.1972 2.75977 20.1738 5.70703 21.0468 9.64453C21.1523 10.1367 21.1757 10.4121 21.1757 11.4844C21.1816 12.5977 21.164 12.8203 21.041 13.3828C20.2031 17.2969 17.1796 20.2441 13.1718 21.0469C12.6269 21.1523 12.3222 21.1758 11.455 21.1758C10.0019 21.1758 8.99995 20.9766 7.74018 20.4434C6.90815 20.0859 6.67963 20.1152 6.0351 20.6484C5.36713 21.2051 4.61128 21.498 3.70893 21.5449C3.19331 21.5742 2.49018 21.5039 2.33784 21.4102C2.3144 21.3984 2.39057 21.1641 2.5019 20.8887C2.97651 19.7051 3.15229 18.1699 2.96479 16.8867C2.9062 16.5176 2.67768 15.5684 2.43159 14.7129C2.19721 13.875 1.95698 12.9082 1.89838 12.5566C1.71674 11.4023 1.87495 9.81445 2.29096 8.53125C2.53706 7.78711 3.14643 6.58008 3.61518 5.91797C4.12495 5.20312 5.20307 4.125 5.91792 3.61523C7.1894 2.71289 8.90034 2.0625 10.5468 1.85156C11.0742 1.78711 12.7031 1.86914 13.3242 1.99219Z' />
                        <path d='M5.80633 10.2187C5.01531 10.5059 4.66375 11.4902 5.0739 12.2519C5.77703 13.541 7.73407 13.0488 7.74578 11.5723C7.75164 10.7226 7.14813 10.125 6.29266 10.1426C6.13445 10.1426 5.91766 10.1777 5.80633 10.2187Z' />
                        <path d='M10.9277 10.2422C10.3887 10.4942 10.1074 10.9512 10.1074 11.5723C10.1133 12.1641 10.3594 12.5801 10.8691 12.8496C11.2031 13.0254 11.8359 13.0254 12.1641 12.8496C13.1543 12.3281 13.2129 10.9219 12.2813 10.3418C11.9121 10.1133 11.2969 10.0723 10.9277 10.2422Z' />
                        <path d='M16.0843 10.2773C15.7327 10.4414 15.5745 10.6055 15.4163 10.957C15.2699 11.2793 15.2581 11.8066 15.387 12.1172C15.4984 12.3867 15.7855 12.6914 16.0667 12.8379C16.7406 13.1836 17.5784 12.9316 17.9652 12.2637C18.1058 12.0351 18.1292 11.918 18.1292 11.5781C18.1351 11.1035 18.012 10.8223 17.6839 10.5059C17.2738 10.1133 16.6292 10.0195 16.0843 10.2773Z' />
                        <path d='M26.1909 10.4766C26.062 10.5469 25.9389 10.6816 25.8452 10.8574C25.6284 11.291 25.6928 11.5313 26.2202 12.2285C27.0053 13.2832 27.5385 14.3789 27.8549 15.5977C28.1069 16.5586 28.1538 16.9688 28.1538 18.1348C28.1479 19.5059 28.0424 20.1035 27.5444 21.5684C27.0405 23.0273 26.9819 23.3672 26.9877 24.6387C26.9877 25.5645 27.0112 25.7754 27.1459 26.3496C27.228 26.7129 27.3862 27.2344 27.4975 27.5098L27.6967 28.0078L27.4858 28.0664C27.3686 28.1016 27.0522 28.1426 26.7768 28.166C25.8159 28.2305 24.7495 27.8906 23.9936 27.2695C23.5717 26.9238 23.2905 26.7773 23.0678 26.7773C22.9799 26.7773 22.6167 26.8945 22.2592 27.041C20.3959 27.8145 18.4799 27.9961 16.517 27.5977C15.0112 27.2871 13.6284 26.6484 12.4096 25.6875C11.9174 25.3008 11.6948 25.2129 11.3315 25.2715C10.7573 25.3652 10.435 26.0215 10.6987 26.5781C10.8569 26.9121 11.9702 27.7383 13.0131 28.2949C14.0151 28.8281 15.2749 29.2559 16.5229 29.4844C17.4487 29.6543 19.4877 29.666 20.3608 29.5078C21.1459 29.3672 21.9545 29.1504 22.4702 28.9512L22.892 28.7871L23.1206 28.957C23.4838 29.2324 24.4741 29.6895 25.019 29.8359C25.4467 29.9531 25.6577 29.9707 26.5424 29.9707C27.4389 29.9707 27.6264 29.9531 28.0307 29.8359C29.3725 29.4492 29.9409 29.0273 29.9409 28.4297C29.9409 28.3359 29.8002 27.9844 29.6245 27.6504C29.0502 26.5488 28.8276 25.6875 28.8276 24.5449C28.8276 23.7012 28.9213 23.2207 29.2729 22.2246C29.8237 20.6777 29.9995 19.6699 29.9995 18.1055C29.9995 16.1309 29.6303 14.5488 28.769 12.832C28.3823 12.0586 27.8022 11.1738 27.3979 10.7402C27.0991 10.418 27.0815 10.4063 26.7416 10.3887C26.4838 10.3711 26.3432 10.3887 26.1909 10.4766Z' />
                      </svg>
                    </div>
                    <div className='number'>
                      <h5>
                        <a href='mailto:info@example.com'>info@example.com</a>
                      </h5>
                    </div>
                  </div>
                  <div className='mobile-menu-btn d-xl-none d-block'>
                    <i className='bi bi-list text-dark' onClick={handleMobileMenu} />
                  </div>
                </div>
                <div className='header-logo d-xl-none d-flex'>
                  <Link href='/'>
                    <a>
                      {' '}
                      <img alt='image' className='img-fluid' src='assets/images/icons/header4-logo.svg' />
                    </a>
                  </Link>
                </div>
                <div className='header-social-area sibling-2 d-xl-flex d-none'>
                  <ul className='header-social'>
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
              </header>

              <Banner3 />
              <Home3Offer />
              <Home3Feature />
              <Home3Destination />
              <Home3Package />
              <Home3facilities />
              <Home3Video />
              <Home3Guide />
              <Home3Blog />
              <Sponsor />
              <Home3Newslatter />
              <Footer1 />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default IndexCityTour;
