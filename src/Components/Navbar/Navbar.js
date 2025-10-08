import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/Images/DevcommLogo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import Scroll from 'react-scroll';
import { useNavigate } from 'react-router';

const Navbar1 = () => {
  const navigate = useNavigate();

  const clickHandler = (section) => {
    navigate(`/#${section}`);
  }

  return (
    <Navbar variant="dark" expand="lg" className={`pt-2 pb-2 w-100 ${styles["navbar"]}`} >
      <Container fluid className={`m-0`}>
        <Navbar.Brand className={`d-flex align-items-center`} href="/">
          <div className={`ms-3 me-3 ${styles["logo-container"]}`}>
            <Link to="/">
              <img src={Logo} alt="DevComm Logo" className={`${styles["logo"]}`} />
            </Link>
          </div>
          <h5 className={`m-0 text-light fw-bold`}>
            DevComm
          </h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={`justify-content-end`} id="basic-navbar-nav">
          <Nav className="me-0 align-items-lg-center pe-2" style={{fontSize: '18px'}}>
            <Nav.Link className={`text-light ms-3`}>
              <Scroll.Link onClick={() => clickHandler('projects')} to='projects' spy={true}  duration={200} smooth={true} className={`text-white text-decoration-none`}>
                Projects
              </Scroll.Link>
            </Nav.Link>
            <Nav.Link className={`text-light ms-3`}>
              <Scroll.Link onClick={() => clickHandler('cfn')} to='cfn' spy={true}  duration={200} smooth={true} className={`text-white text-decoration-none`}>
                Create for NSUT
              </Scroll.Link>
            </Nav.Link>
            <Nav.Link className={`text-light ms-3`}>
              <Scroll.Link onClick={() => clickHandler('pastevents')} to='pastevents' spy={true}  duration={200} smooth={true} className={`text-white text-decoration-none`}>
                Past Events
              </Scroll.Link>
            </Nav.Link>
            <Nav.Link className={`text-light ms-3`} href="/about">About</Nav.Link>
            <Nav.Link className={`text-light ms-3`} href="/activities">Activities</Nav.Link>
            {/* Register link removed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1;
