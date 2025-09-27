import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {
  return (
    <>
      <Nav />
      <section className="panel">
        <div className="bg-[url(/images/whitegradient.jpg)] border border-black bg-cover p-4">
          <div className="two-column-layout">
            <h2 className="md:col-span-2">About Me</h2>
            <div className="p-4">
              <div className="border-10px p-5 my-5 mx-auto flex justify-center items-center h-74 w-54 bg-cover ">
              <img src="/images/Anita Perkins 1.png" width={220} height={220} alt="Anita Perkins" />
              <p></p>
            </div>
              <p className="text-xl mb-4">
                I'm excited to share that I recently earned my Google UX Design Certification,
                marking a dedicated shift toward a career in user experience. After over ten years
                in insurance, I transitioned to tech, gaining coding skills through the YW Tech Lab
                Program and earning a Web Development certification.
              </p>
              <p className="text-xl">
                Since joining Robert Bosch in 2022 and earning a promotion to Solution Manager in
                2023, I've led the design of impactful websites, blending leadership with technical
                expertise. Motivated by this successful pivot, I am eager to further develop my
                career in UX design and create innovative solutions.
              </p>
            </div>
            <div className="border">
              <h2 className="text-xl font-bold mb-2">EDUCATION</h2>
              <ul>
                <li className="text-xl">B.A. Communication & Speech, University of Illinois Chicago</li>
                <li className='text-xl'>Web Development Certification, Oakton College</li>
                <li className='text-xl'>Google UI Certification</li>
              </ul>
              <h2 className="text-xl font-bold mt-8 mb-2">CONSULTING EXPERIENCE</h2>
              <ul>
                <li>
                  <div className="font-semibold text-xl" >Answer the Moment</div>
                  <div className="text-gray-700 text-xl">
                    Website design for leadership consultant specializing in mission-driven business
                    strategy.
                  </div>
                </li>
                <li>
                  <div className="font-semibold text-xl">The AUX</div>
                  <div className="text-gray-700 text-xl">
                    Website redesign for commercial hub, featuring minority owned businesses focused
                    on health and wellness.
                  </div>
                </li>
                <li>
                  <div className="font-semibold test-xl">Childcare Network of Evanston</div>
                  <div className="text-gray-700 text-xl">
                    Website redesign for non-profit organization focused on early childhood
                    education.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </section>
    </>
  );
};

export default Bio;
