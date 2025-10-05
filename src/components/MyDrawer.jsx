import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const MyDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        EXPERIENCE & CONSULTING
      </Button>
      <Drawer
        title="Basic Drawer"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
      >
        
           
       
        <h2 className="text-base font-semi-bold mb-2">EDUCATION</h2>
        <ul>
          <li>B.A. Communication & Speech, University of Illinois Chicago</li>
          <li>Web Development Certification, Oakton College</li>
          <li>Google UI Certification</li>
        </ul>
         <h2 className="text-base font-semi-bold mt-8 mb-2">CONSULTING EXPERIENCE</h2>
         <ul>
          <li><div className="font-medium">Answer the Moment</div>
            <div className="text-gray-700 text-base">
              Website design for leadership consultant specializing in mission-driven business strategy.

            </div></li>
          <li><div className="font-medium">The AUX</div>
            <div className="text-gray-700 text-base">
              Website redesign for commercial hub, featuring minority owned businesses focused on health and wellness.

            </div></li>
          <li><div className="font-medium">Childcare Network of Evanston</div>
            <div className="text-gray-700 text-base">
              Website redesign for non-profit organization focused on early childhood education.
            </div>
          </li>
         </ul>
        <a className="text-xl mt-8 mb-2 font-bold text-black bg-blue-200"
              href="resume.html">Resume</a>
      
         
       
      </Drawer>
    </>
  );
};

export default MyDrawer;
