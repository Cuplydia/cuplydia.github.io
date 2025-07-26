import React from 'react';
import Projects from '../components/Projects.jsx';
import NavHome from '../components/NavHome.jsx';
import { Image } from "antd";
import MyDrawer from '../components/MyDrawer.jsx'
export default function Home() {
  return (
    <>
      <NavHome isHome={true} />

      {/* Top Banner */}
      <div className="bg-[url(/images/bluelight.jpg)] bg-bottom h-[500px]">
        <div className="panel">
          <h1 className="text-center text-white">Anita Perkins</h1>
          <p className="body-text-large max-w-2xl mx-auto text-center text-white">
            "I design websites to fit your business needs".
          </p>
           <MyDrawer /> 
        </div>
      </div>

      {/* About Section */}
      <div className="panel">
        <h2>About Me</h2>
        <Image width={250} src="/images/Anita Perkins.jpg"  /> 
        
        <p className="body-text-large">
          As a dedicated web design enthusiast, I have cultivated a profound passion for crafting captivating digital
          experiences that resonate with users. With a relentless drive to stay at the forefront of technological advancements
          and design trends, I continuously strive to elevate my skills and expertise in the dynamic realm of web development.
        </p>
        
      </div>

      <Projects />
    </>
  );
}
