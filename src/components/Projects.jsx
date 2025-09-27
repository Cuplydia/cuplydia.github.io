import React from 'react';
import HoverCard from './HoverCard';
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
  
  {
    id: 'cne',
    title: 'Childcare Network of Evanston',
    description: 'Provides high-quality early education and childcare.',
    imageUrl: './images/cne/cne-removebg-preview 3.png',
    color: '#54b2dd',
    url: '/case-studies/cne/',
  },
  {
    id: 'aux',
    title: 'The AUX',
    description: 'A dynamic community--centered wellness hub.',
    imageUrl: './images/the-aux/the-aux 3.png',
    fit: 'cover',
    url: '/case-studies/aux/',
  },
  {
    id: 'atm',
    title: 'Answer the Moment',
    description: 'Empowering leaders to be genuine, effective, and responsive to the challenges and opportunities before them.',
    imageUrl: './images/atm/atm1 2.png ',
    fit: 'cover',
    url: '/case-studies/atm/',
  },
  
];

const Projects = () => {
   return (
    <div className="bg-[url(/images/whitegradient.jpg)] h-[1200px] bg-cover">
    <div className="panel p-10 mb-10"> 
      <h2 className="mb-10">Projects</h2>
      <div className="projects-grid">
        {projects.map((card, index) => (
          <div key={index}>
            <HoverCard
              id={card.id}
              title={card.title}
              imageUrl={card.imageUrl}
              color={card.color}
              url={card.url}
              fit={card.fit}
              index={index}
            >
              <>
                <h3 className="font-comfortaa mb-2 text-xl font-bold text-black-1000">
                  {card.title}
                </h3>
                <p className="text-purple-900 font-bold transition-colors duration-500 group-hover:text-blue-800">
                  {card.description}
                </p>
              </>
            </HoverCard>
            </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
