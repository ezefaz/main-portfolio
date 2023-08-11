import React from 'react';

function Timeline() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Envone',
      location: 'Buenos Aires, Argentina',
      date: 'April 2022 - Present (1 year 5 months)',
      description: 'Backend and Frontend development of user-oriented applications.',
      techStack: 'Node.js | React.js | Next.js | Redux | MySQL | Cypress | Mocha | Docker | Zustand',
    },
    {
      title: 'Web Developer and Social Media Manager',
      company: 'PalermoJai',
      location: 'Argentina',
      date: 'June 2021 - March 2022 (10 months)',
      description: 'Designed and developed a new website for luxury furnished rental apartments.',
      techStack: 'React.js | Reservation System Integration | Social Media Management',
    },
    {
      title: 'Front End Developer - PsicoApp',
      company: 'Henry [Academic]',
      location: 'Argentina',
      date: 'March 2021 - July 2021 (5 months)',
      description: 'Participated in the development of an application for psychologists.',
      techStack: 'JavaScript | React.js | Redux | Styled-components | Material UI | Chakra UI | Tailwind CSS',
    },
    {
      title: 'Full Stack Web Developer - Countries App',
      company: 'Henry [Academic]',
      location: 'Argentina',
      date: 'February 2021 - June 2021 (5 months)',
      description: 'Built an App with data consumption about countries from an API and a database.',
      techStack: 'React | Redux | Express | #Sequelize | PostgreSQL | Node.js | CSS',
    },
    {
      title: 'Full Stack Web Developer',
      company: 'VICLA',
      location: 'Provincia de Buenos Aires, Argentina',
      date: 'March 2020 - March 2021 (1 year 1 month)',
      description:
        'Developed an e-commerce website, app, and admin dashboard tailored for Security Forces and Industrial Footwear customers.',
      techStack: 'JavaScript | Node.js | React/Next.js | React Native | Redux | Strapi CMS | MySQL | Github',
    },
  ];

  return (
    <div className='p-20 bg-[#FFF7F5] dark:bg-gray-900 min-h-screen'>
      <div className='flex justify-center'>
        <div className='relative w-2'></div>
      </div>
      <ol className='items-center sm:flex flex-wrap'>
        {experiences.map((experience, index) => (
          <li key={index} className='relative mb-10 sm:mb-0 w-full sm:w-1/2'>
            {/* Arrow animation */}
            {index > 0 && (
              <div className='absolute -left-4 h-full w-0.5 bg-blue-300 dark:bg-blue-800 transform transition-all duration-300 group-hover:w-6 group-hover:left-0 origin-left'></div>
            )}
            {/* Experience details */}
            <div className='group flex items-center'>
              <div className='z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:bg-[#FFF7F5]-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
                <svg
                  className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  {/* ... SVG path ... */}
                </svg>
              </div>
              <div className='hidden sm:flex w-full bg-gray-300 h-0.5 dark:bg-gray-700'></div>
            </div>
            <div className='mt-3 sm:pr-8'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                {experience.title} at {experience.company}
              </h3>
              <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                {experience.date}
              </time>
              <p className='text-base font-normal text-gray-500 dark:text-gray-400'>{experience.description}</p>
              <p className='text-base font-normal text-gray-400 dark:text-gray-500'>
                Tech Stack: {experience.techStack}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
