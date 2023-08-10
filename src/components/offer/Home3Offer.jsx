import React, { useState } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { offerSlider } from '../../utils/offerSlider';
import OfferItem from './OfferItem';
import Modal from '../modal/Modal';
import { offers } from './ProjectData';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home3Offer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

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
                {offers?.map((offer, index) => (
                  <SwiperSlide key={index} className='swiper-slide' onClick={() => openModal(offer)}>
                    <OfferItem {...offer} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          {modalOpen && <Modal isOpen={modalOpen} onClose={closeModal} project={selectedProject} />}
        </div>
      </div>
    </div>
  );
}

export default Home3Offer;
