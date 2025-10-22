import React from 'react';
import Device from '../components/devices/Device.jsx';
import Nav from '../components/Nav.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';
import { Link } from 'react-router-dom';

export default function CNE() {
  const features = [
    {
      name: 'Deliverable',
      description: 'Website',
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
              <img src="/images/cne/cne.png" alt="cne" />
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
                The previous CNE website had a barrier for families seeking vital resources and
                information about programs in the Evanston community. With its outdated design,
                confusing layout, and lack of mobile optimzation, many visitors were unable to find
                the help they needed. This has resulted in missed opportunities for CNE families to
                access the support and services they deserve.
              </p>
            </div>
            <div>
              <h2 className="h2-small">The Goal</h2>
              <p className="text-lg">
                The main objective of the website redesign for the Children Network of Evanston is
                to enhance user experience, improve accessibility, and boost outreach by creating a
                more user-friendly interface and enriching content.”
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
                <img className="m-auto" src="/images/cne/desktop/ccap.png" />
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
              The redesigned CNE website offers a more robust, responsive experience with simplified
              user navigation, preserving the brand’s identity and colors. Through comparative
              audits and refined user flows, the site enhances usability and ensures a seamless,
              consistent experience across devices.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/cne/mobile/impact.png" />
            <Device
              width="200px"
              className="top-[-30px]"
              imageUrl="/images/cne/mobile/programs-overview.png"
            />
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
      <section className="bg-[#92a4c5]">
        <div className="panel two-column-layout grid-cols-2">
          <div>
            <img className=" p-10" src="/images/cne/desktop/image 81.png " alt="cne" />
            <img className=" p-10" src="/images/cne/desktop/image 79.png " alt="cne" />
            <img className=" p-10" src="/images/cne/desktop/image 78.png " alt="cne" />
            <img className=" p-10" src="/images/cne/desktop/image 1.png " alt="cne" />
            <img className=" p-10" src="/images/cne/desktop/image 48.png " alt="cne" />
          </div>
          <div>
            <h2 className="mb-6">CNE Redesign</h2>
            <div>
              <h3>
                <b>Challenge</b>
              </h3>
              <p>
                The main objective of the website redesign for the Childcare Network of Evanston is
                to enhance user experience, improve accessibility, and boost outreach by creating a
                more user-friendly interface and enriching content.
              </p>

              <h3>
                <b>User Research</b>
              </h3>
              <p>
                The purpose of this user research was to gather comprehensive insights to inform the
                strategic direction of our service/product. The research consisted of a Comparative
                Audit, Competitor Analysis, Content Audit, and interviews with Community Network
                Experts (CNE).
              </p>
              <p>
                Additionally, a Heuristic Evaluation and a UI Audit were conducted to identify
                usability and design issues. The findings will guide enhancements aimed at improving
                user experience and engagement.I began by identifying the target audience and
                clarifying their needs through research, competitive analysis, and client
                interviews. Key objectives included:
              </p>

              <ul>
                <li>
                  <small>
                    Users found it challending to locate community-specific needs, tailored to local
                    contexts.
                  </small>
                </li>
              </ul>
              <ul>
                <li>
                  <small>
                    The need for a calendar of events was a recurrent theme in feedback.{' '}
                  </small>
                </li>
              </ul>
              <ul>
                <li>
                  <small>
                    Usability issues, including inconsistent navigation, lack of feedback during
                    interactions, and unclear categorizations of features.
                  </small>
                </li>
              </ul>
              <ul>
                <li>
                  <small>Some existing content is outdated or lacks clarity</small>
                </li>
              </ul>

              <h3>
                <b>Starting the Design</b>
              </h3>
              <ul>
                <h4>Digital Wireframes</h4>
              </ul>
              <ul>
                <li>
                  <small>
                    The purpose for creating the digital wireframes for the "Supporting Familes
                    Together" initiative, providing a user-friendly platform where families can
                    easiy explore a wide range of resources aimed at empowering them and nuturing
                    the well-being of children.
                  </small>
                </li>
              </ul>
              <ul>
                <h4>Low-fidelity prototype</h4>
              </ul>
              <ul>
                <li>
                  <small>
                    The user flow of the page begins with the user landing on a clear, informative
                    header outlining CNE's mission. They scroll down to explore the initiative's key
                    goals, followed by featured programs that highlight CNE's impact.
                  </small>
                </li>
              </ul>
              <ul>
                <li>
                  <small>
                    As the user continues, they reach a "Get involved" section with clear
                    call-to-action buttons for donations or volunteering.
                  </small>
                </li>
              </ul>
              <ul>
                <li>
                  <small>
                    Finally, they access the footer for contact details and quick navigation to
                    other sections, ensuring a simple, intuitive journey focused on engagement and
                    action.
                  </small>
                </li>
              </ul>
              <h3>
                <b>Refining the Design</b>
              </h3>
              <ul>
                <h4>Mockups</h4>
              </ul>
              <ul>
                <li>
                  <small>
                    High-Fidelity: Developed prototypes in Figma and implemented designs in WebFlow
                    Figma, UI Design Tool.
                  </small>
                </li>
              </ul>
              <p>
                <b>Tools & Skills:</b>{' '}
                <li>
                  <small>
                    Figma, Google Slides, WordPress (Elementor, ElementsKit), Trello, Slack, stock
                    image curation, copy simplification, and style guide development.
                  </small>
                </li>
              </p>

              <h3>
                <b>Accessibility Considerations</b>
              </h3>
              <ul>
                <li>
                  <small>
                    Color Contrast: Ensured high contrast between text and background colors to
                    improve readability for users with visual impairments.
                  </small>
                </li>
              </ul>
              <ul>
                <li>
                  <small>
                    Keyboard Navigation: Designed all interactive elements to be fully navigable via
                    keyword, with clear focus indicators for users who cannot use a mouse.
                  </small>
                </li>
              </ul>
              <ul>
                <li>
                  <small>
                    Alt Text for Images: Provided descriptive alternative text for all images and
                    multimedia so screen readers can convey visual information to visually impaired
                    users.
                  </small>
                </li>
              </ul>

              <h3>
                <b>Impact</b>
              </h3>
              <p>
                The redesigned CNE website offers a more robust, responsive experience with
                simplified user navigation, preserving the brand' identity and colors. Through
                comparative audits and refined user flows, the site enhances usability and ensures a
                seamless, consistent expierence across devices.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(0deg, #d4f37eff, #a4c47bff)' }}>
        <div className="panel max-w-5xl m-25">
          <h2 className="text-5xl font-abril mb-20 text-gray-900">Reflection</h2>
          <p className="text-lg text-gray-900 mb-20">
            Throughout this project, I gained a deeper undeerstanding of the importance of
            comparative audits and accessibility in web design, which are essential for creating
            inclusing and user-friendly experiences. I also learned to effectively use design tools
            such as Figma, Relume, and Webflor, applying my knowledge to create both low and
            high-fidelity wireframes that accurately represent the site’s layout.
          </p>
        </div>
        <div className="flex items-center">
          <Link
            to="/case-studies/aux/"
            className="text-gray-600 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-black bg-white-100"
          >
            Next:  The Aux
          </Link>
        </div>
      </section>
    </>
  );
}
