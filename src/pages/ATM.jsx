import React from 'react';
import Device from '../components/devices/Device.jsx';
import Nav from '../components/Nav.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';
import { Link } from 'react-router-dom';

export default function ATM() {
  const features = [
    {
      name: 'Deliverable',
      description: 'Web Application',
    },
    {
      name: 'My Role',
      description: 'Lead Web Developer and Designer',
    },
    {
      name: 'The Team',
      description:
        '6 Developers, 3 UX Designers, 1 UX Researcher, 1 Brand Designer, 1 Project Manager',
    },
    {
      name: 'The Product',
      description:
        'Develop website for the Khaliliah Lyons - Answer the Moment,  a platform that amplified her influence as a DEI leader',
    },
    {
      name: 'Project Duration',
      description: '6 months',
    },
    {
      name: 'Technologies Used',
      description:
        'Google Slides, Figma Working with online graphics / assets / resources, Slack, Trello - project managment tool.  Hepled keep projects organized, with assigned tasks for each member',
    },
  ];
  return (
    <>
      <Nav />
      {/* Homepage 1 */}
      <section className="bg-[#9eb16c]">
        {/* Left column */}
        <div className="panel grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-black text-center">Answer the Moment</h2>
            <p className="text-black text-center text-xl">Website Design</p>
          </div>

          {/* Right column */}
          <div className="bg-yellow-100 md:col-span-2">
            <div className="p-16 flex justify-center  items-center h-full min-h-[300px]">
              <img src="/images/atm/atm.png" alt="atm" />
            </div>
          </div>
        </div>
      </section>
      {/* Introduction */}
      <div style={{ backgroundImage: 'linear-gradient(#f1e9d2)' }}>
        <div className="panel">
          <section className="two-column-layout">
            <div>
              <h2 className="h2-small">The Challenge</h2>
              <p className="text-lg">
                Khalilah Lyons asked our team to design a website for Answer the Moment that fully
                embodied her brand and values. Her mission centers on empowering women. She views
                equity as an ongoing process—work that requires commitment and accountability. The
                site needed to reflect those values authentically while attracting clients who are
                genuinely ready to engage in the work.
              </p>
            </div>
            <div>
              <h2 className="h2-small">The Goal</h2>
              <p className="text-lg">
                The goal was to create a brand that positioned Khalilah as a catalyst for meaningful
                change. She wanted a platform that amplified her influence as a Leadhership
                Consultant, empowering organizations to move beyond performative gestures and
                embrace equity as a lived practice. More than just transforming workplace culture,
                her goal was to spark broader cultural shifts—building spaces where inclusivity,
                representation, and equity could truly thrive.
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* Section 1 */}
      <section className="bg-[#f1ce71]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Khalilah Lyons</h2>
            <p>
              Designing Khalilah Lyons’ first website was both a challenge and an opportunity: to
              capture her business acumen, goals, and dynamic personality as a Leadership
              Consultant, while also reflecting her skills as a product designer and front-end
              developer. As a visionary entrepreneur, her site needed to do more than showcase
              services—it had to clearly communicate her brand identity and connect with clients and
              stakeholders who share her commitment to meaningful change.
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
          <div className=" p-12 flex justify-center  items-center h-full min-h-[200px]">
            <Device width={400} imageUrl="/images/atm/stairs3.avif" alt="atm" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#g0F0F0] ">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Lead Designer</h2>
            <p>
              As Design Leader, I set out to design more than just a personal brand website—I wanted
              to capture the essence of Khalilah Lyons, a powerful Leadership consultant and
              advocate for systemic change. Early research and conversations revealed a brand
              identity that was bold, sophisticated, and unapologetically values-driven. From there,
              I guided our team in translating that spirit into a visual language of vibrant colors
              paired with a clean, corporate aesthetic.
            </p>
            <p>
              What made this project truly special was Khalilah’s trust. She created space for a
              deeply collaborative process, which gave me the freedom to make purposeful, meaningful
              design decisions. The final site doesn’t just showcase her services—it tells her
              story, reflects her mission of empowering women and rejecting performative DEI, and
              speaks directly to clients ready to commit to real, lasting change.
            </p>
          </div>

          {/* Right column */}
          <div className="p-16 flex justify-center  items-center h-full min-h-[500px]">
            <img src="/images/atm/atm 3.png" alt="atm" />
          </div>
        </div>
      </section>
      <section className="bg-[#f0e8be]">
        <div className="panel two-column-layout grid-cols-2">
          <div>
            <p>
              <b>About Kahaliah</b>
            </p>
            <img className="p-10" src="/images/atm/about-khalilah.png " alt="atm" />
            <p>
              <b>Services</b>
            </p>
            <img className="p-10" src="/images/atm/services.png " alt="atm" />
            <p>
              <b>Clients</b>
            </p>
            <img className="p-10" src="/images/atm/clients-list.png " alt="atm" />
          </div>
          <div>
            <h2 className="mb-6">Case Study: Website Redesign for Khalilah Consulting</h2>
            <h3>
              <b>Challenge</b>
            </h3>

            <p>
              Khalilah, a Leadership Consultant, wanted a new website that reflected her personal
              brand and values while positioning her as a thought leader in her space. Her existing
              digital presence was fragmented across PowerPoint decks, LinkedIn posts, and client
              communications, but lacked a cohesive, professional website. The challenge was to
              design a site that was:
            </p>

            <ul>
              <li>
                <small>Authentic to her personality and aesthetic preferences.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Aligned with her mission of promoting DEI as an ongoing process.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Professional, polished, and capable of attracting clients who share her values.
                </small>
              </li>
            </ul>

            <h3>
              <b>Process</b>
            </h3>
            <h4>Research & Discovery</h4>
            <ul>
              <li>
                <small>
                  Marketing Audit: Reviewed Khalilah’s existing materials (PowerPoints, LinkedIn
                  content, e-list communications) to understand her tone, values, and brand
                  positioning.
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Interview: Conducted an in-depth interview with Khalilah, supported by a custom
                  interview guide. This helped uncover:
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Her goals for the website.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Her aesthetic tastes (vibrant colors, sophisticated corporate aesthetic).
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Her vision for communicating DEI as an evolving practice.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Team Debrief: Synthesized findings and aligned on design opportunities.
                </small>
              </li>
            </ul>

            <h3>
              <b>Key Insights</b>
            </h3>
            <ul>
              <li>
                <small>Khalilah is her brand: personal imagery should be central. </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>She values inclusivity, empowerment, and collaboration. </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  She wants her site to attract clients committed to meaningful cultural change.
                </small>
              </li>
            </ul>

            <h3>
              <b>Prototyping & UX/UI Design</b>
            </h3>
            <ul>
              <li>
                <small>Low-Fidelity (Google Slides):</small>
              </li>
            </ul>
            <ul>
              <li>
                {' '}
                <small>Created mockups to brainstorm page structures and content flow.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Shared and iterated on layouts as a team.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>High-Fidelity (Figma):</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Learned Figma collaboratively through workshops and tutorials.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Designed mobile, tablet, and desktop prototypes.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Experimented with color schemes, typography, and interactive elements.
                </small>
              </li>
            </ul>

            <h3>
              <b>Reflection</b>
            </h3>
            <p>
              Figma provided powerful visualization and interactivity, though it had a steep
              learning curve. Google Slides helped generate early ideas quickly before moving to
              more refined designs.
            </p>

            <h3>
              <b>Content & Information Architecture</b>
            </h3>
            <ul>
              <li>
                <small>Designed the content hierarchy to prioritize clarity and impact.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Shortened copy for readability, knowing web users tend to skim.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Curated imagery emphasizing Khalilah herself as the focal point.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Established a communication flow that showcased her values and consulting
                  approach.
                </small>
              </li>
            </ul>

            <h3>
              <b>Feedback & Iteration</b>
            </h3>
            <ul>
              <li>
                <small>Prototype Presentation: Shared Figma designs with Khalilah.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Benchmarking: Reviewed other Leadership Development websites to explore design
                  language and best practices.
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Collaborative Refinement: Discussed fonts, colors, and logos that resonated most
                  with her.
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Next Steps: Compiled follow-up tasks and action items after meetings.</small>
              </li>
            </ul>

            <h3>
              <b>What We Learned</b>
            </h3>
            <ul>
              <li>
                <small>Khalilah prefers vibrant colors and visuals centered on herself.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  She trusted the team to make design decisions but appreciated visual inspiration
                  from other sites.
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Feedback sessions validated that our design direction aligned with her values and
                  goals.
                </small>
              </li>
            </ul>

            <h3>
              <b>Finalizing the Design</b>
            </h3>
            <ul>
              <li>
                <small>Refined the prototype to a polished visual system.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Added subtle flourishes to create visual interest without compromising
                  professionalism.
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Prepared assets for development.</small>
              </li>
            </ul>

            <h3>
              <b>Developmentg & Implementation</b>
            </h3>

            <ul>
              <li>
                <small>Built the website using HTML, CSS & JavaScript.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Developed a shared style guide for consistency.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  Distributed responsibilities across the team (each member owned 1–2
                  screens/features).
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Integrated responsive design for mobile/tablet/desktop.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Added Google Analytics for tracking.</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Configured cloud services to handle form submissions.</small>
              </li>
            </ul>

            <ul>
              <small>Skills/Tools</small>
            </ul>
            <ul>
              <li>
                <small>HTML, CSS, JavaScript</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>GitHub, Git Pages, Pull Requests</small>
              </li>
            </ul>
            <ul>
              <li>
                <small>Visual Studio Code</small>
              </li>
            </ul>
            <ul>
              <li>
                {' '}
                <small>W3Schools resources</small>
              </li>
            </ul>
            <h3>
              <b>Solution</b>
            </h3>
            <p>
              The final website showcased Khalilah as the face of her brand while reflecting her
              values through design and structure. Vibrant yet professional colors, a clean
              corporate aesthetic, and intentional content hierarchy created an approachable yet
              authoritative presence. The site not only communicated her expertise but also
              positioned her as a partner for organizations seeking authentic, ongoing Leadership
              Consultant work.
            </p>
            <h3>
              <b>Impact</b>
            </h3>
            <ul>
              <li>
                <small>
                  For Khalilah: She gained a professional website that aligns with her personality,
                  values, and brand identity, empowering her to attract clients who share her
                  vision.
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  For the Team: We developed skills in UX research, prototyping, high-fidelity
                  design tools, and front-end development. The project also strengthened our
                  collaboration and ability to translate abstract values into tangible digital
                  experiences.
                </small>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  For Users: The site offers a clear, engaging, and accessible experience that
                  highlights Khalilah’s expertise and mission.
                </small>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #d4f37eff, #a4c47bff)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Reflection</h2>
          <p className="text-lg text-gray-900 mb-12">
            As Design Leader, I set out to create a personal brand website that authentically
            captured Khalilah Lyons—an influential Leadership Consultant and advocate for systemic
            change. Through research and collaboration, I discovered that her brand was bold,
            sophisticated, and values-driven, with a visual style rooted in vibrant colors and a
            clean, corporate aesthetic.
          </p>
          <p>
            My goal was to design a site that not only showcased her services, but also reflected
            her mission: empowering women, rejecting performative DEI efforts, and promoting equity
            as an ongoing process. Khalilah’s trust in our team fostered a truly collaborative
            environment, giving me the creative freedom to make purposeful design decisions. The
            final site communicates her vision clearly and connects with clients who are ready to
            engage in real, lasting change.
          </p>
        </div>
        <div className="flex items-center">
          <Link
            to="/case-studies/cne/"
            className="text-gray-600 hover:text-blue-400 px-3 py-2 rounded-md text-lg font-black bg-white-100"
          >
            Next:  Childcare Network of Evanston
          </Link>
        </div>
      </section>
    </>
  );
}
