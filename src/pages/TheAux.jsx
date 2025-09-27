import React from 'react';
import PhoneDark from '../components/devices/PhoneDark.jsx';
import Nav from '../components/Nav.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';

export default function AUX() {
  const features = [
    {
      name: 'Deliverable',
      description: 'Web Application',
    },
    {
      name: 'My Role',
      description: 'Product and Front-end Developer',
    },
    {
      name: 'The Team',
      description: '2 Web Developers, 3 Coders, 2 Brand Designers, 1 Project Manager',
    },
    {
      name: 'The Product',
      description: 'Website redesign for The Aux Tenants Page',
    },
    {
      name: 'Project Duration',
      description: '6 months',
    },
    {
      name: 'Technologies Used',
      description:
        'WordPress, RoyalElementor, HTML & CSS, Figma, Slack, Google Docs. Google Slides, Trello, ',
    },
    {
      name: 'Methods',
      description:
        'User interviews, paper prototyping, usability testing, sketch, continuous integration',
    },
  ];
  return (
    <>
      <Nav />

      {/* Section 1 */}
      <section className="bg-[#185977]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6 text-white">The Aux</h2>
            <p className="text-white">
              The goal of The Aux project was to create a more responsive and engaging website. Each
              YWTech consultant was assigned a page, and as the lead designer, I chose to revamp the
              Tenants page. The main challenge was to redesign the page in a way that went beyond
              simply reusing existing content. My objective was to elevate and humanize the
              presentation—highlighting each tenant’s unique skills, talents, and contributions to
              reflect the vibrant community at The Aux.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <PhoneDark imageUrl="/images/the-aux/mobile/homepage.png" />
          </div>
        </div>
      </section>
      {/* Introduction */}
      <div style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel">
          <section className="two-column-layout">
            <div>
              <h2 className="h2-small">The Challenge</h2>
              <p className="text-lg">
                The primary challenge I encountered was to rejuvenate the Tenant Page without simply
                duplicating its existing content. My objective was to spotlight the unique talents
                and skills of each tenant at The Aux, ensuring that their individuality and
                contributions were highlighted effectively.
              </p>
            </div>
            <div>
              <h2 className="h2-small">The Goal</h2>
              <p className="text-lg">
                To transform the Tenants Page into a visually compelling and community-driven space
                that highlights the unique identity of each business, using UX design principles and
                tools like Figma and WordPress to enhance user engagement and foster a sense of
                connection.
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* Section 2 */}
      <section className="bg-[#F0F0F0]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Lead Designer</h2>
            <p>
              As Lead Designer for The Aux website, I directed a cross-functional design team
              through every phase of the project—from discovery to launch—with the goal of building
              a responsive, user-centered platform that embodied the organization’s mission and
              community. I guided audience research, stakeholder interviews, and competitive
              analysis to shape our design approach. Leading collaborative sprints, I oversaw the
              creation of low and high-fidelity prototypes, restructured the site architecture, and
              streamlined messaging. Using WordPress and a unified style guide, I managed
              development and led multiple design iterations driven by client feedback, ultimately
              delivering an accessible, polished site that elevated both brand presence and user
              experience.
            </p>
            <dl className="mt-10 space-y-8 text-gray-900">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline font-semibold text-gray-900">{feature.name}</dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column */}
          <PhoneDark imageUrl="/images/the-aux/mobile/wellness.png" />
        </div>
      </section>
      <section className="bg-[#b7ca64]">
        <div className="panel two-column-layout">
          <div>
           
            <img className=" w-full" src="/images/the-aux/tenants.png " alt="the-aux" />
          </div>
          <div>
             <h2 className="mb-6">The Aux Tenant Page Redesign</h2>
             <h3><b>Challenge</b></h3>

              <p>The main challenge was to refresh the Tenant Page without duplicating existing content. The goal was 
              to highlight the individuality, talents, and contributions of each tenant while creating a stronger sense 
              of community and brand cohesion.</p>

              <h3><b>Planning & Discovery</b></h3>
              <p>I began by identifying the target audience and clarifying their needs through research, competitive analysis, 
                and client interviews. Key objectives included:</p>


              <ul><small>A. 	 Clarifying tenant messaging (who they are, what they do).</small></ul>
              <ul><small>B.  	 Conveying a sense of power, excellence, and excitement. </small></ul>
              <ul><small>C. 	 Showcasing the Aux’s tenants in a dynamic, engaging way.</small></ul>

              <h3><b>Methods</b></h3>
              <ul><small>A.  	 	Audited the existing Aux site and comparable sites (e.g., The Phoenix in Milwaukee).</small></ul>
              <ul><small>B.  	 	Reviewed marketing materials, articles, and social media.</small></ul>
              <ul><small>C. 	  Conducted structured interviews and needs assessments.</small></ul>
              <ul><small>D.  	  Compiled and prioritized requirements based on client feedback.</small></ul>

              <h3><b>Design Process</b></h3>
              <p>I led the design process from low-fidelity sketches to high-fidelity prototypes.</p>
              <ul><small>A.  	 	Low-Fidelity: Used Google Slides for early brainstorming and rapid iteration.</small></ul>
              <ul><smalL>B. 	  High-Fidelity: Developed prototypes in Figma and implemented designs in WordPress with Elementor and complementary widgets.</smalL></ul>
              <ul><smalL>C. 	  Ensured alignment with brand style guide and messaging.</smalL></ul>
              <p><b>Tools & Skills:</b> <small>Figma, Google Slides, WordPress (Elementor, ElementsKit), Trello, Slack, stock image curation, copy simplification, and style guide development.</small></p>

              <h3><b>Development</b></h3>
              <ul><small>A.  	 	Designed site architecture and user flow.</small></ul>
              <ul><smalL>B. 		Implemented WordPress site structure, templates, and custom tenant profiles.</smalL></ul>
              <ul><smalL>C. 		Optimized content for scanning (shortened text, curated visuals).</smalL></ul> 
              
              <h3><b>Iteration & Evaluation</b></h3>
              <ul><small>A.  	 	 V1: Positive feedback on structure; client requested more vibrancy.</small></ul>
              <ul><small>B.  	 	 V2: Redesign added color, restructured News page, introduced a fundraising thermometer, and refreshed content.</small></ul>
              <ul><small>C. 		 V3: Final refinements based on dislikes and preferences, underscoring the importance of feedback-driven design.</small></ul>

              <h3><b>Deployment & Handoff</b></h3>
              <ul><small>A.  	 	 Deployed live site via GoDaddy hosting with SSL, firewalls, and backup systems.</small></ul>
              <ul><smalL>B. 		 Offloaded images to cloud hosting for performance optimization.</smalL></ul>
              <ul><smalL>C. 		 Created training videos and documentation for client independence.</smalL></ul>
              <ul><smalL>D. 		 Delivered a tailored maintenance plan for long-term site management.</smalL></ul>

        </div> 
        </div>
      </section>
      <section>
        <div className="panel">
          <img className="m-auto" src="/images/the-aux/desktop/home_1.png" alt="the-aux" />
        </div>
      </section>
      {/* <EmblaCarousel>
        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/the-aux/desktop/home_1.png" alt="the-aux" />
        </CarouselSlide>
        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/the-aux/desktop/theauxevanston_com_meet_our_tenants_.png" alt="the-aux" />
        </CarouselSlide>

        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/the-aux/desktop/theauxevanston_com_open_spaces_.png" alt="the-aux" />
        </CarouselSlide>
      </EmblaCarousel> */}
      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Reflection</h2>
          <p className="text-lg text-gray-900 mb-12">
            Redesigning The Aux’s Tenants page allowed me to apply core UX principles—Empathize,
            Define, Ideate, and Create—to elevate the page from a static directory to an engaging,
            story-driven experience. Through client collaboration and user-centered design, I
            redefined how each tenant was presented, highlighting their unique personality and
            offerings. Using Figma and WordPress, I crafted a dynamic layout with intentional
            visuals and messaging that reflected the diversity and spirit of The Aux community. This
            project deepened my skills in empathetic design and reinforced the power of storytelling
            in building meaningful digital experiences.
          </p>
        </div>
      </section>
    </>
  );
}
