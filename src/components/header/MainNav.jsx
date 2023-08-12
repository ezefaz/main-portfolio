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

  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  }, []);

  // sidebar menu hnadle function
  const handleMobileMenu = () => {
    setMobileMenu(!showMobileMenu);
  };

  return (
    <nav className='main-nav-wrapper'>
      <div className={`main-nav ${showMobileMenu ? 'show-menu' : ''}`}>
        <div className='menu-close-btn' onClick={handleMobileMenu}>
          <i className='bi bi-x-lg'></i>
        </div>
        <ul className='menu-list'>
          <li>
            <Link href='/'>
              <a className={router.pathname === '/' ? 'active' : ''}>
                <img src='assets/images/icons/home-icon.svg' alt='Home' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='#work'>
              <a className={router.pathname.includes('#work') ? 'active' : ''}>
                {/* <img src='assets/images/icons/desitnation-icon.svg' alt='Work' /> */}
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link href='#experiences'>
              <a className={router.pathname.includes('#experiences') ? 'active' : ''}>
                {/* <img src='assets/images/icons/tour-icon.svg' alt='Experiences' /> */}
                Experiences
              </a>
            </Link>
          </li>
          <li>
            <Link href='#services'>
              <a className={router.pathname.includes('#services') ? 'active' : ''}>
                {/* <img src='assets/images/icons/tour-icon.svg' alt='Experiences' /> */}
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href='#testimonials'>
              <a className={router.pathname.includes('#testimonials') ? 'active' : ''}>
                {/* <img src='assets/images/icons/pages.svg' alt='Testimonials' /> */}
                Testimonials
              </a>
            </Link>
          </li>
          <li>
            <Link href='#contact'>
              <a className={router.pathname === '#contact' ? 'active' : ''}>
                {/* <img src='assets/images/icons/contact-icon.svg' alt='Contact' /> */}
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
