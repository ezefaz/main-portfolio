import React from 'react';

function Facility({ iconSrc, title, description }) {
  return (
    <div className='facility-single col-lg-4 col-md-6 col-sm-10'>
      <div className='icon'>
        <img src={iconSrc} alt='image' />
      </div>
      <div className='text'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Home3facilities() {
  const facilitiesData = [
    {
      iconSrc: 'assets/images/icons/facility1.svg',
      title: 'Frameworks',
      description: 'React Js, Next Js',
    },
    {
      iconSrc: 'assets/images/icons/facility2.svg',
      title: 'Next Js',
      description: 'Lorem ipsum dolor sit amet, stsrf consec adi piscing elit',
    },
    {
      iconSrc: 'assets/images/icons/facility3.svg',
      title: 'Node Js',
      description: 'Lorem ipsum dolor sit amet, stsrf consec adi piscing elit',
    },
    {
      iconSrc: 'assets/images/icons/facility4.svg',
      title: 'State Management',
      description: 'Redux, Zustand',
    },
    {
      iconSrc: 'assets/images/icons/facility5.svg',
      title: 'SQL',
      description: 'Lorem ipsum dolor sit amet, stsrf consec adi piscing elit',
    },
    {
      iconSrc: 'assets/images/icons/facility6.svg',
      title: 'Testing',
      description: 'Cypress, Mocha',
    },
  ];

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
          {facilitiesData.map((facility, index) => (
            <Facility
              key={index}
              iconSrc={facility.iconSrc}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home3facilities;
