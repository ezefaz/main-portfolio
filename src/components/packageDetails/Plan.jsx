import React from 'react';

function Timeline() {
  const experiences = [
    {
      day: 'Day 01 : Departure',
      description:
        'Arrive Cairo airport, welcome greeting by our representative who will assist you and provide transfers to your Hotel in Cairo. (the clients will inform us about their arrival time minimum 7 days before the)',
      details: [
        'Admire Big Ben, Buckingham Palace and St Paul’s Cathedral',
        'Chance to spot prominent landmarks of the city',
      ],
    },
    {
      day: 'Day 02 : Adventure Begins',
      description:
        'Arrive Cairo airport, welcome greeting by our representative who will assist you and provide transfers to your Hotel in Cairo. (the clients will inform us about their arrival time minimum 7 days before the)',
      details: [
        'Admire Big Ben, Buckingham Palace and St Paul’s Cathedral',
        'Chance to spot prominent landmarks of the city',
        'Welcome greeting by our representative',
      ],
    },
    {
      day: 'Day 03 : Historical Tour',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      day: 'Day 04 : Rest & Tour',
      description:
        "Please go to the London Eye ticket office to exchange your voucher for a ticket. You may be asked for identification (driver's license, national identity card or passport). You will receive tickets for the next available time slot, but you may request a different date or time, subject to availability.",
      details: [
        'The following items are not permitted: alcohol, baseball bats, bicycles (including folding ones), explosives',
        'For all ticket holders, the number of people per capsule may vary.',
      ],
    },
    {
      day: 'Day 05 : Return',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className='p-20 bg-[#FFF7F5] dark:bg-gray-900 min-h-screen'>
      <div className='tour-plan'>
        <h3 className='tour-details-subtitle'>Tour Plan</h3>
        {experiences.map((experience, index) => (
          <div key={index} className='tour-plan-single'>
            <div className='plan-serial'>
              <span>{index + 1}</span>
            </div>
            <div className='plan-content'>
              <h4 className='plan-title'>{experience.day}</h4>
              <p>{experience.description}</p>
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
