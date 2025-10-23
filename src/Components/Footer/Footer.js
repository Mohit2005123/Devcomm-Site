// import { Container } from "react-bootstrap";
// import instagramIcon from "../../Assets/Images/FooterIcons/instagram.png";
// import facebookIcon from "../../Assets/Images/FooterIcons/facebook.webp";
// import linkedinIcon from "../../Assets/Images/FooterIcons/linkedin.png";

// const Footer = () => {
//   return (
//     <Container fluid className="p-0">
//       <footer className="text-light py-2" role="contentinfo" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #060b22, #1e3a8a, #1e40af, #3b82f6)', color: '#f0f9ff', boxShadow: '0 -3px 20px rgba(59,130,246,0.4)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
//         <div className="container text-center d-flex flex-column align-items-center justify-content-center" style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '10px' }}>
//           <div className="row gy-4 align-items-center">
//             <div className="col-12 col-md-4">
//               <h5 style={{ color: '#e0f2fe', fontWeight: 600 }}>About DevComm</h5>
//               <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
//                 DevComm is NSUT’s official Developers’ Community, empowering students through coding, design, and tech innovation. We host workshops, hackathons, and open-source initiatives to help developers grow.
//               </p>
//             </div>

//             <div className="col-12 col-md-4 d-flex justify-content-center">
//               <div className="d-flex justify-content-center align-items-center">
//                 <a href="https://www.facebook.com/DevcommNsut" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mx-3" style={{ height: 38, width: 38 }}>
//                   <img src={facebookIcon} alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }} />
//                 </a>
//                 <a href="https://www.instagram.com/devcomm.nsut/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mx-3" style={{ height: 38, width: 38 }}>
//                   <img src={instagramIcon} alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }} />
//                 </a>
//                 <a href="https://www.linkedin.com/company/devcommnsut" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mx-3" style={{ height: 38, width: 38 }}>
//                   <img src={linkedinIcon} alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }} />
//                 </a>
//               </div>
//             </div>

//             <div className="col-12 col-md-4 text-md-end text-center">
//               <h6 style={{ color: '#f1f5f9', fontWeight: 500 }}>Made with <span style={{ color: '#ef4444' }}>❤️</span> by <span style={{ color: '#38bdf8', fontWeight: 600 }}>DevComm</span></h6>
//               <small style={{ color: '#cbd5e1' }}>© {new Date().getFullYear()} DevComm — All rights reserved</small>
//               <div className="mt-3">
//                 <a className="text-light mx-2" href="/privacy">Privacy Policy</a>
//                 <a className="text-light mx-2" href="/tnc">Terms</a>
//                 <a className="text-light mx-2" href="/refund">Refunds</a>
//                 <a className="text-light mx-2" href="/contact">Contact</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </Container>
//   );
// };

// export default Footer;

import { Container } from "react-bootstrap";
import instagramIcon from "../../Assets/Images/FooterIcons/instagram.png";
import facebookIcon from "../../Assets/Images/FooterIcons/facebook.webp";
import linkedinIcon from "../../Assets/Images/FooterIcons/linkedin.png";

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <footer
        role="contentinfo"
        style={{
          fontFamily: 'Poppins, sans-serif',
          background: 'rgba(6,11,34,0.92)', // Same as page, slightly frosted for elegance
          backdropFilter: 'blur(2px)', // Glassmorphism
          color: '#e0e8f3',
          borderTop: '1.5px solid rgba(255,255,255,0.12)',
          boxShadow: '0 -2px 32px rgba(59,130,246,0.08)',
          minHeight: 110,
          marginTop: 0
        }}
        className="footer-glass"
      >
        <div className="container px-4 py-3 d-flex flex-column gap-3 align-items-center">
          {/* Info and Social */}
          <div className="row w-100 justify-content-between align-items-center gy-2">
            <div className="col-12 col-md-4 text-md-start text-center mb-2 mb-md-0">
              <h5 style={{ color: '#7eeaf9', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-1px' }}>
                DevComm NSUT
              </h5>
              <p style={{ color: '#b0bfd6', fontSize: '1rem', marginBottom: '0.5rem' }}>
                NSUT’s official Developers’ Community. <br/>
                Connect. Code. Create.
              </p>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
              <a href="https://www.facebook.com/DevcommNsut" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="shadow-sm rounded-circle"
                style={{
                  width: 42,
                  height: 42,
                  background: 'rgba(64,64,88,0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s',
                  border: '1px solid rgba(255,255,255,0.11)'
                }}
              >
                <img src={facebookIcon} alt="Facebook" style={{ width: 24, height: 24, filter: 'drop-shadow(0 0 4px #52e0e0)' }} />
              </a>
              <a href="https://www.instagram.com/devcomm.nsut/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="shadow-sm rounded-circle"
                style={{
                  width: 42,
                  height: 42,
                  background: 'rgba(64,64,88,0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s',
                  border: '1px solid rgba(255,255,255,0.11)'
                }}
              >
                <img src={instagramIcon} alt="Instagram" style={{ width: 24, height: 24, filter: 'drop-shadow(0 0 4px #e954a3)' }} />
              </a>
              <a href="https://www.linkedin.com/company/devcommnsut" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="shadow-sm rounded-circle"
                style={{
                  width: 42,
                  height: 42,
                  background: 'rgba(64,64,88,0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s',
                  border: '1px solid rgba(255,255,255,0.11)'
                }}
              >
                <img src={linkedinIcon} alt="LinkedIn" style={{ width: 24, height: 24, filter: 'drop-shadow(0 0 4px #52e0e0)' }} />
              </a>
            </div>
            <div className="col-12 col-md-4 text-md-end text-center mt-2 mt-md-0">
              <h6 style={{ color: '#f1f5f9', fontWeight: 600 }}>
                Made with <span style={{ color: '#ef4444' }}>❤️</span> by <span style={{ color: '#38bdf8', fontWeight: 700 }}>DevComm</span>
              </h6>
              <small style={{ color: '#8b9dbc', letterSpacing: '.5px' }}>
                © {new Date().getFullYear()} DevComm — All rights reserved
              </small>
            </div>
          </div>
          {/* Footer Links */}
          <div className="row w-100 justify-content-center mt-2">
            <div className="col-auto">
              <a className="mx-2" href="/privacy" style={{ color: '#71c4fc', textDecoration: 'none', fontWeight: 500, transition: 'color .3s' }}>Privacy Policy</a>
              <a className="mx-2" href="/tnc" style={{ color: '#71c4fc', textDecoration: 'none', fontWeight: 500, transition: 'color .3s' }}>Terms</a>
              <a className="mx-2" href="/refund" style={{ color: '#71c4fc', textDecoration: 'none', fontWeight: 500, transition: 'color .3s' }}>Refunds</a>
              <a className="mx-2" href="/contact" style={{ color: '#71c4fc', textDecoration: 'none', fontWeight: 500, transition: 'color .3s' }}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

