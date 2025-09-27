import React from 'react';
import Device from '../components/devices/Device.jsx';
import Nav from '../components/Nav.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';

export default function CNE() {
  const features = [
    {
      name: 'Deliverable',
      description: 'Web Application',
    },
    {
      name: 'My Role',
      description: 'Lead UX Deisgner',
    },
    {
      name: 'The Team',
      description:
        '6 Developers, 4 UX Designers, 1 UX Researcher, 1 Brand Designer, 1 Project Manager',
    },
    {
      name: 'The Product',
      description:
        "Website redesign for the Childcare Network of Evanston's (CNE), a non-profit connecting young learners and their families with high-quality, equitable early childhood experiences and resources",
    },
    {
      name: 'Project Duration',
      description: '6 months, 10 hours per week',
    },
    {
      name: 'Technologies Used',
      description: 'Figma, Relume, Webflow CMS, ChatGpt, Wireframing and prototyping',
    },
  ];
  return (
    <>
      <Nav />
      {/* Homepage 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-white text-center">Childcare Network of Evanston</h2>
            <p className="text-white text-center text-xl">Website Redesign</p>
          </div>

          {/* Right column */}
          <div className="bg-indigo-100 md:col-span-2">
            <div className="p-16 flex justify-center  items-center h-full min-h-[300px]">
              <img src="/images/cne/cne.png"  alt="cne"/>
            </div>
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
                The previous CNE website had a barrier for families seeking vital resources and information 
                about programs in the Evanston community. 
                 With its outdated design, confusing layout, and lack of mobile optimzation, many visitors 
                 were unable to find the help they needed.  
                 This has resulted in missed opportunities for CNE families to access the support and services
                 they deserve.
              </p>
            </div>
            <div>
              <h2 className="h2-small">The Goal</h2>
              <p className="text-lg">
                The main objective of the website redesign for the Children Network of Evanston is to enhance user 
                experience, improve accessibility, and boost outreach by creating a more user-friendly interface and
                enriching content.”

              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-green-100">
        <div className="panel">
          <section className="two-column-layout">
            <div className="bg-gray-00">
              <div className="p-15 flex justify-center  items-center h-full min-h-[400px]">
                <img className="m-auto" src="/images/cne/desktop/ccap.png"  />
              </div>
            </div>
            <dl className="mt-10 space-y-8 text-gray-900">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline font-semibold text-gray-900">{feature.name}</dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      {/* Homepage 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel two-column-layout">
          <div>
            <h2 className="h2-small text-white">Homepage</h2>
            <p className="text-lg text-white">
              We redesigned the CNE homepage to be welcoming to a wide range of visitors, including
              families, community educators, and donors. The hompage showcases CNE's services,
              current initiatives, and impact through an engaging, accessible design. It also
              highlights key accomplishments, answers common questions, and offers an easy way to
              connect.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5 mt-10 md:mt-0">
            <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
            <Device width="200px" className="top-[-30px]" imageUrl="/images/cne/mobile/ccap.png" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F9F9F9]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-abril mb-6 text-gray-900">Impact & Program Pages</h2>
            <p className="text-lg text-gray-900">
              The redesigned CNE website offers a more robust, responsive experience with simplified user navigation, 
              preserving the brand’s identity and colors.  Through comparative audits and refined user flows, the site 
              enhances usability and ensures a seamless, consistent experience across devices.</p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/cne/mobile/impact.png" />
            <Device
              width="200px"
              className="top-[-30px]"
              imageUrl="/images/cne/mobile/programs-overview.png" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel max-w-3xl m-auto">
          <h2 className="text-3xl font-abril mb-10 text-gray-900">Programs</h2>
          <p className="text-lg text-gray-900 mb-20">
            To help parents and caregivers understand the importance of early childhood education,
            we created a simple program overview page, organized by age group. This page provides a
            clear and accessible explanation of CNE's various programs, including home visits,
            developmental screenings, childcare providers and supports, and more.
          </p>
          <img className="m-20" src="/images/cne/desktop/headstart.png" alt="Programs" />
        </div>
      </section>
      <section className="bg-[#7087b3]">
        <div className="panel two-column-layout grid-cols-2">
          <div>
           
            <img className=" p-10" src="/images/cne/desktop/image 81.png " alt="cne" />
            <img className=" p-10" src="/images/cne/desktop/image 79.png " alt="cne" />
            <img className=" p-10" src="/images/cne/desktop/image 78.png " alt="cne" />
            <img className=" p-10" src="/images/cne/desktop/image 1.png " alt="cne" />
            <img className=" p-10" src="/images/cne/desktop/image 48.png " alt="cne" />
          </div>
          <div>
             <h2 className="mb-6">CNE Prototype</h2>
            <p>Placeholder text</p>
          </div>
        </div>
      </section>
       {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(0deg, #d4f37eff, #a4c47bff)' }}>
        <div className="panel max-w-5xl m-25">
          <h2 className="text-5xl font-abril mb-20 text-gray-900">Reflection</h2>
          <p className="text-lg text-gray-900 mb-20">
           Throughout this project, I gained a deeper undeerstanding of the importance of comparative audits 
           and accessibility in web design, which are essential for creating inclusing and user-friendly experiences.  
           I also learned to effectively use design tools such as Figma, Relume, and Webflor, applying my knowledge to 
           create both low and high-fidelity wireframes that accurately represent the site’s layout.
 
          </p>
        </div>
      </section>
    </>
    
  );
}
