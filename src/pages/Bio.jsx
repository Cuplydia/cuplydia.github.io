import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {
  return (
    <>
      <Nav />
      <section className="panel">
        <div className="bg-[url(/images/whitegradient.jpg)] border border-black bg-cover ">
        <div className="two-column-layout">
          <h2 className="md:col-span-1">About Me</h2>
          <div>
            </div>
            <p className="text-xl"> 
              I'm excited to share that I recently earned my Google UX Design Certification, marking a dedicated shift toward a career
              in user experience.  After over ten years in insurance, I transitioned to tech, gaining coding skills through the 
              YW Tech Lab Program and earning a Web Development certification. 
            </p>
            <p className="text-xl">
               
              Since joining Robert Bosch in 2022 and earning a promotion to Solution Manager in 2023, I've led the design of impactful
              websites, blending leadership with technical expertise.  Motivated by this successful pivot, I am eager to further develop
              my career in UX design and create innovative solutions.
            </p>
          </div>
          <div className="bg-blue-75">
            <div className="border-10px p-5 my-5 mx-auto flex justify-center items-center h-74 w-54 bg-cover ">
              <img src="/images/Anita Perkins 1.png" width={220} height={220} alt="Anita Perkins" />
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-lg font-bold mb-2">EDUCATION</h2>
        <ul>
          <li>B.A. Communication & Speech, University of Illinois Chicago</li>
          <li>Web Development Certification, Oakton College</li>
          <li>Google UI Certification</li>
        </ul>
         <h2 className="text-lg font-bold mt-8 mb-2">CONSULTING EXPERIENCE</h2>
         <ul>
          <li><div className="font-semibold">Answer the Moment</div>
            <div className="text-gray-700 text-base">
              Website design for leadership consultant specializing in mission-driven business strategy.

            </div></li>
          <li><div className="font-semibold">The AUX</div>
            <div className="text-gray-700 text-base">
              Website redesign for commercial hub, featuring minority owned businesses focused on health and wellness.

            </div></li>
          <li><div className="font-semibold">Childcare Network of Evanston</div>
            <div className="text-gray-700 text-base">
              Website redesign for non-profit organization focused on early childhood education.

            </div>
          </li>
         </ul>
    </>
  );
};

export default Bio;
