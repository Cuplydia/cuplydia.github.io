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
      <div className="bg-[url(/images/aportfolio.png)] bg-bottom h-[700px] bg-cover">
        <div className="panel">
           <Image width={200}  src="/images/Anita Perkins 1.png" /> 
         <h1 className="text-center text-black">Anita Perkins</h1>
        
         <p className="body-text-large max-w-4xl mx-auto text-center text-black font-bold">
            "I design websites to fit your business needs".
            </p>
           <MyDrawer /> 
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[url(/images.jpg)]">
         <div className="panel p-30"> 
        <h2>About Me</h2>
        <p className="body-text-large font-bold">
          As a dedicated web design enthusiast, I have cultivated a profound passion for crafting captivating digital
          experiences that resonate with users. With a relentless drive to stay at the forefront of technological advancements
          and design trends, I continuously strive to elevate my skills and expertise in the dynamic realm of web development.
        </p>
       </div> 
      </div>

      <Projects />
       <div className="panel p-20">
         </div>
      </>
    
  );
}
