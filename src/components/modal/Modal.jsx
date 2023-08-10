import React from 'react';

const Modal = ({ project, isOpen, onClose, disabled }) => {
  const handleBackdropClick = () => {
    if (!disabled && isOpen) {
      onClose();
    }
  };

  if (!isOpen) {
    return;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center m-auto'>
      <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
        <div className='absolute inset-0 bg-gray-500 opacity-75' onClick={handleBackdropClick} />
      </div>

      <div className='bg-white rounded-lg overflow-auto shadow-xl transform transition-all sm:w-3/4 lg:w-1/2 h-[90%]'>
        <button
          onClick={onClose}
          type='button'
          className='fixed top-0 right-0 inline-flex justify-center items-center rounded-full bg-gray-300 p-4 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          disabled={disabled}
        >
          <svg className='h-6 w-6 text-gray-700' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        <div className='p-4 overflow-y-scroll' style={{ scrollBehavior: 'smooth' }}>
          <div className='grid grid-cols-12 gap-4 w-[65rem] m-auto'>
            {/* Main Image */}
            <div className='col-span-12 mb-4'>
              <img src={project.imageSrc} alt={project.title} className='m-auto w-[65rem] rounded-lg' />
            </div>

            {/* Title and Technologies */}
            <div className='col-span-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>{project.title}</h3>
              <div className='text-base text-gray-600 leading-relaxed mb-4'>{project.description}</div>
            </div>
            <div className='col-span-4'>
              <div className='mb-4'>
                <h2 className='text-base font-semibold text-gray-900'>Tech Stack</h2>
                <p className='text-base text-gray-600'>{project.technologies}</p>
              </div>
              <div className='mb-4'>
                <h2 className='text-base font-semibold text-gray-900'>Category</h2>
                <p className='text-base text-gray-600'>{project.category}</p>
              </div>
              <div>
                <h2 className='text-base font-semibold text-gray-900'>Duration</h2>
                <p className='text-base text-gray-600'>{project.duration}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-50 p-4 w-[60rem] m-auto'>
          <div className='grid grid-cols-12 gap-4'>
            {/* Columna izquierda (8/12) */}
            <div className='col-span-8'>
              {project.badgeSrc && (
                <img src={project.badgeSrc} alt='Badge Image' className='w-full rounded-lg mb-2 h-auto' />
              )}
            </div>

            {/* Columna derecha (4/12) */}
            <div className='col-span-4'>
              <img
                src={project.images ? project.images[1] : ''}
                alt='Imagen 2'
                className='w-full rounded-lg mb-2 h-auto'
              />
              <img src={project.images ? project.images[2] : ''} alt='Imagen 3' className='w-full rounded-lg h-auto' />
            </div>
          </div>
        </div>
        <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'></div>
      </div>
    </div>
  );
};

export default Modal;
