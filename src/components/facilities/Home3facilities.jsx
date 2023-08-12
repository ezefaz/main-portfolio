import React from 'react';
import { FaCode, FaDatabase, FaReact, FaNode } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { GiMatterStates } from 'react-icons/gi';

function Facility({ icon, title, description }) {
  return (
    <div className='facility-single col-lg-4 col-md-6 col-sm-10'>
      <div className='icon'>
        <span className='icon'>{icon}</span>
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
      icon: <FaReact size='3em' />,
      title: 'Front-End',
      description: 'React Js, Next Js, Vue Js',
    },
    {
      icon: <FaNode size='3em' />,
      title: 'Back-End',
      description: 'Node js, Express Js, Prisma, Sequelize',
    },
    {
      icon: <GiMatterStates size='3em' />,
      title: 'State Management',
      description: 'Redux, Zustand, Vuex',
    },
    {
      icon: <FaDatabase size='3em' />,
      title: 'Databases',
      description: 'MySQL, PostgreSQL, MongoDB',
    },
    {
      icon: <FaCode size='3em' />,
      title: 'Testing',
      description: 'Cypress, Mocha',
    },
    {
      icon: <AiFillGithub size='3em' />,
      title: 'Version Control',
      description: 'Git, Github',
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
            <Facility key={index} icon={facility.icon} title={facility.title} description={facility.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home3facilities;
