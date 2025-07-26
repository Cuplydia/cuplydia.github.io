import React from 'react';
import PhoneDark from '../components/devices/PhoneDark.jsx';
import Nav from '../components/Nav.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';

export default function AUX() {
  return (
    <>
      <Nav />

      {/* Section 1 */}
      <section className="bg-[#185977]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6 text-white">The Aux</h2>
            <p className="text-white">The goal of The Aux project was to create a more responsive and engaging website. Each YWTech consultant 
              was assigned a page, and as the lead designer, I chose to revamp the Tenants page. The main challenge was to redesign the page in a 
              way that went beyond simply reusing existing content. My objective was to elevate and humanize the presentation—highlighting each 
              tenant’s unique skills, talents, and contributions to reflect the vibrant community at The Aux.</p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <PhoneDark imageUrl="/images/the-aux/mobile/homepage.png" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F0F0F0]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Lead Designer</h2>
            <p>As Lead Designer for The Aux website, I led the project from discovery to launch, with a focus on creating a responsive, 
              user-centered platform that reflects the organization’s mission and vibrant community. I conducted audience research, stakeholder 
              interviews, and competitive analysis to inform the design strategy. Through collaborative sprints, I translated insights into low and 
              high-fidelity prototypes, restructured site architecture, and simplified messaging. Using WordPress and a consistent style guide, 
              I oversaw development and led multiple design iterations based on client feedback—delivering a polished, accessible site that elevated 
              the brand and user experience.</p>
          </div>

          {/* Right column */}
          <PhoneDark imageUrl="/images/the-aux/mobile/wellness.png" />
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Reflection</h2>
          <p className="text-lg text-gray-900 mb-12">
            Redesigning The Aux’s Tenants page allowed me to apply core UX principles—Empathize, Define, Ideate, and Create—to elevate the 
            page from a static directory to an engaging, story-driven experience. Through client collaboration and user-centered design, I 
            redefined how each tenant was presented, highlighting their unique personality and offerings. Using Figma and WordPress, I 
            crafted a dynamic layout with intentional visuals and messaging that reflected the diversity and spirit of The Aux community. 
            This project deepened my skills in empathetic design and reinforced the power of storytelling in building meaningful digital experiences.
          </p>
          
        </div>
      </section>
      <EmblaCarousel>
        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/the-aux/desktop/home.png" alt="the-aux" />
        </CarouselSlide>
        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/the-aux/desktop/theauxevanston_com_meet_our_tenants_.png" alt="the-aux" />
        </CarouselSlide>

        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/the-aux/desktop/theauxevanston_com_open_spaces_.png" alt="the-aux" />
        </CarouselSlide>
      </EmblaCarousel>
    </>
  );
}
