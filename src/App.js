import About from "./Pages/About";
import Register from "./Pages/Register";
import Navbar1 from "./Components/Navbar/Navbar";
import WallOfFame from "./Pages/WallOfFame";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="about" element={<About />} />
        <Route path="about/walloffame" element={<WallOfFame />} />
        <Route path="register" element={<Register />} />
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
