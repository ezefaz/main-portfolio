import React from 'react';

import { FaArrowRight, FaClock, FaCode } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import { experiences } from '../../data/experiencesData';

function Timeline() {
  return (
    <div className='p-20 bg-[#FFF7F5] min-h-screen' id='experiences'>
      <div className='tour-plan'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <div className='section-title2 text-center d-flex flex-column justify-content-center'>
              <svg width={2} height={40} viewBox='0 0 2 40' xmlns='http://www.w3.org/2000/svg'>
                <rect width={2} height={40} rx={1} />
              </svg>
              <span>Projects &amp; Work</span>
              <h2>Professional Experiences</h2>
            </div>
          </div>
        </div>
        {experiences.map((experience, index) => (
          <div key={index} className='tour-plan-single'>
            <div className='plan-serial'>
              <span>{index + 1}</span>
            </div>
            <div className='plan-content'>
              <h4 className='plan-title'>
                {experience.title} at <span className='company'>{experience.company}</span>
              </h4>
              <h5 className='plan-title flex items-center'>
                <FaClock className='mr-2' /> {experience.day}
              </h5>
              <p className='flex items-center'>{experience.description}</p>
              <div className='tech-stack'>
                <div className='flex items-center'>
                  <FaCode className='mr-2' />
                  <div className='tech-stack-label'>Technology Stack:</div>
                </div>
                <div className='tech-stack-list ml-2'>{experience.techStack}</div>
              </div>
              {experience.details && (
                <ul className='plan-list'>
                  {experience.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
