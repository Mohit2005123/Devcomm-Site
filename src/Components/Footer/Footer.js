import { Container } from "react-bootstrap";
import instagramIcon from "../../Assets/Images/FooterIcons/instagram.png";
import facebookIcon from "../../Assets/Images/FooterIcons/facebook.webp";
import linkedinIcon from "../../Assets/Images/FooterIcons/linkedin.png";

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <div
        className={`d-flex flex-column justify-content-center align-items-center p-3 bg-dark`}
      >
        <div className={`pb-3`}>
          <a
            className={"mx-3"}
            href="https://www.facebook.com/DevcommNsut"
            target="__blank"
            style={{ height: "30px", width: "30px", display: "inline-block" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={facebookIcon}
              alt="instagram"
            />
          </a>
          <a
            className={"mx-3"}
            href="https://www.instagram.com/devcomm.nsut/"
            target="__blank"
            style={{ height: "30px", width: "30px", display: "inline-block" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={instagramIcon}
              alt="instagram"
            />
          </a>
          <a
            className={"mx-3"}
            href="https://www.linkedin.com/company/devcommnsut"
            target="__blank"
            style={{ height: "30px", width: "30px", display: "inline-block" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={linkedinIcon}
              alt="instagram"
            />
          </a>
        </div>
        <h5 className={`text-light`}>
          Made with <span className="text-primary">❤️</span> by DevComm
        </h5>
        <h6 className={`text-light`}
        style={{ marginTop:"20px" }}
        >
          DevComm Technologies,
          UDYAM-DL-10-0050536
        </h6>
        <div className="d-flex align-item-center mt-4">
          <div className='me-2'>
            <a className={`text-light`} href="/privacy">Privacy Policy</a>
          </div>
          <div className='me-2'>
            <a className={`text-light`} href="/tnc">Terms and Conditions</a>
          </div>
          <div className='me-2'>
            <a className={`text-light`} href="/refund">Refund Policy</a>
          </div>
          <div>
            <a className={`text-light`} href="/contact">Contact Us</a>
          </div>
        </div>
        <div className='text-center text-light mt-4'>
          <h6>Managed By DevComm Technologies</h6>
          <p>Udyam No.: UDYAM-DL-10-0050536</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
