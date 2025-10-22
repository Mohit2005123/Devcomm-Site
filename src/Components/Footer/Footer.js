import { Container } from "react-bootstrap";
import instagramIcon from "../../Assets/Images/FooterIcons/instagram.png";
import facebookIcon from "../../Assets/Images/FooterIcons/facebook.webp";
import linkedinIcon from "../../Assets/Images/FooterIcons/linkedin.png";

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <footer className="text-light py-2" role="contentinfo" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #060b22, #1e3a8a, #1e40af, #3b82f6)', color: '#f0f9ff', boxShadow: '0 -3px 20px rgba(59,130,246,0.4)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container text-center d-flex flex-column align-items-center justify-content-center" style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '10px' }}>
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-4">
              <h5 style={{ color: '#e0f2fe', fontWeight: 600 }}>About DevComm</h5>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                DevComm is NSUT’s official Developers’ Community, empowering students through coding, design, and tech innovation. We host workshops, hackathons, and open-source initiatives to help developers grow.
              </p>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://www.facebook.com/DevcommNsut" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mx-3" style={{ height: 38, width: 38 }}>
                  <img src={facebookIcon} alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }} />
                </a>
                <a href="https://www.instagram.com/devcomm.nsut/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mx-3" style={{ height: 38, width: 38 }}>
                  <img src={instagramIcon} alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }} />
                </a>
                <a href="https://www.linkedin.com/company/devcommnsut" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mx-3" style={{ height: 38, width: 38 }}>
                  <img src={linkedinIcon} alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }} />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-4 text-md-end text-center">
              <h6 style={{ color: '#f1f5f9', fontWeight: 500 }}>Made with <span style={{ color: '#ef4444' }}>❤️</span> by <span style={{ color: '#38bdf8', fontWeight: 600 }}>DevComm</span></h6>
              <small style={{ color: '#cbd5e1' }}>© {new Date().getFullYear()} DevComm — All rights reserved</small>
              <div className="mt-3">
                <a className="text-light mx-2" href="/privacy">Privacy Policy</a>
                <a className="text-light mx-2" href="/tnc">Terms</a>
                <a className="text-light mx-2" href="/refund">Refunds</a>
                <a className="text-light mx-2" href="/contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
