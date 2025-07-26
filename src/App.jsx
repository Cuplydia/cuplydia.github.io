import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AUX from './pages/TheAux';
import CNE from './pages/CNE';
import EYC from './pages/EYC';
import ATM from './pages/ATM';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Bio from './pages/Bio';
import Tips from './pages/Tips';
import NewCNE from './pages/NewCNE';
// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        {/* Depending on the URL, render the appropriate component: */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio/" element={<Bio />} />
          <Route path="/tips/" element={<Tips />} />
          <Route path="/case-studies/" element={<CaseStudies />} />
          <Route path="/case-studies/aux/" element={<AUX />} />
          <Route path="/case-studies/cne/" element={<CNE />} />
          <Route path="/case-studies/eyc/" element={<EYC />} />
          <Route path="/case-studies/atm/" element={<ATM />} />
          <Route path="/case-studies/cne-new/" element={<NewCNE />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
