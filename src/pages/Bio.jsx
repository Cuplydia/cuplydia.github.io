import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {
  return (
    <>
      <Nav />
      <section className="panel">
        <div className="two-column-layout">
          <h2 className="md:col-span-2">About Me</h2>
          <div>
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
          <div className="bg-blue-900">
            <div className="border p-10 my-10 mx-auto flex justify-center items-center h-34 w-34">
              <img src="/images/Anita Perkins.jpg" width={225} height={225} alt="Anita Perkins" />
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
