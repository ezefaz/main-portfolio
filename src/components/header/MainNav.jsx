import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer, useRef, useState } from 'react';

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

function MainNav() {
  const router = useRouter();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [showsubMenu, setsubMenu] = useState(false);
  const [loading, setLoading] = useState();
  const currentRoute = router.pathname;

  useEffect(() => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
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
    <div className='main-nav-wrapper'>
      <div className={showMobileMenu ? 'main-nav show-menu ' : 'main-nav'}>
        <div className='menu-close-btn' onClick={handleMobileMenu}>
          <i className='bi bi-x-lg' />
        </div>
        <div className='mobile-logo-area d-flex justify-content-xl-center justify-content-start align-items-center'>
          {/* <div className='header-logo'>
          <Link href='/'>
            <a>
              <img alt='image' className='img-fluid' src='assets/images/icons/header4-logo.svg' />
            </a>
          </Link>
        </div> */}
        </div>
        <ul className='menu-list'>
          <li className='menu-item-has-children'>
            <Link href='#'>
              <a className='drop-down'>
                <img src='assets/images/icons/home-icon.svg' alt='image' />
                Home
              </a>
            </Link>
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
                Work
              </a>
            </Link>
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
                Experiences
              </a>
            </Link>
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
                Testimonials
              </a>
            </Link>
          </li>
          {/* <li className='menu-item-has-children'>
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
        </li> */}
          <li>
            <Link href='/contact'>
              <a className={currentRoute === '/contact' ? 'active' : 'disabled'}>
                <img src='assets/images/icons/contact-icon.svg' alt='image' />
                Contact
              </a>
            </Link>
          </li>
        </ul>
        {/* <Link href='/login'>
        <a className='uesr-aera'>
          <i className='bi bi-person-circle' />
        </a>
      </Link> */}
      </div>
    </div>
  );
}

export default MainNav;
