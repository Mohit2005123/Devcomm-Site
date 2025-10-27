import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar1 from "./Components/Navbar/Navbar";
import WallOfFame from "./Pages/WallOfFame";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Activities from "./Components/Activities/Activities";
import Footer from "./Components/Footer/Footer";
import CFN from "./Components/CreateForNSUT/CFNCompiled";
import Home from "./Pages/Home";
import SuccessPage from "./Pages/SuccessPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import RefundPolicy from "./Pages/RefundPolicy";
import Contact from "./Pages/Contact";

const App = () => {
  const [showSplash, setShowSplash] = useState(() => {
    const hasShown = sessionStorage.getItem('devcommSplashShown');
    return !hasShown;
  });

  // Preload, but don't block user!
  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/Assets/Images/Banner/video.mp4'; // Use your correct path
    video.preload = "auto";
    video.load();
  }, []);

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('devcommSplashShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="about" element={<About />} />
        <Route path="about/walloffame" element={<WallOfFame />} />
        <Route path="createfornsut" element={<CFN />} />
        <Route path="welcome" element={<SuccessPage />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="tnc" element={<Terms />} />
        <Route path="refund" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;




