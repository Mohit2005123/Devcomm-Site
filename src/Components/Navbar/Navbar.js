import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/Images/DevcommLogo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
// import * as Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const navigate = useNavigate();
  // const scroller = Scroll.scroller;

  // const clickHandler = (section) => {
  //   // try smooth scroll first; if that fails (different route) fallback to navigating to the section hash
  //   try {
  //     scroller.scrollTo(section, { smooth: true, duration: 400, offset: -70 });
  //   } catch (e) {
  //     navigate(`/#${section}`);
  //   }
  // }
  // const clickHandler = (section) => {
  //   if (window.location.pathname === "/") {
  //     // Already on landing, just scroll
  //     scroller.scrollTo(section, { smooth: true, duration: 400, offset: -70 });
  //   } else {
  //     // Navigate to home with hash
  //     navigate(`/#${section}`);
  //   }
  // };
  const clickHandler = (section) => {
    const el = document.getElementById(section);
  
    if (window.location.pathname === "/") {
      // Wait a tick so DOM is ready
      setTimeout(() => {
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      // Navigate to home with hash; Home.js will handle scroll
      window.location.href = `/#${section}`;
    }
  };
  
  
  

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={`w-100 ${styles.navbar} shadow-sm`}
      sticky="top"
      style={{
        background: 'linear-gradient(90deg, rgba(20,25,50,0.98), rgba(40,55,85,0.95))',
        paddingTop: 8,
        paddingBottom: 8,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
      }}
    >
      <Container fluid className={`m-0 px-3`}>
        <Navbar.Brand className={`d-flex align-items-center`} href="/">
          <div className={`d-flex align-items-center ${styles["logo-container"]}`} style={{ gap: 12 }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={Logo} alt="DevComm Logo" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
            </Link>
            <div>
              <h5 className={`m-0 text-light fw-bold`} style={{ letterSpacing: 0.4, color:'#7eeaf9' }}>DevComm</h5>
              <small className="text-muted" style={{ fontSize: 12 }}>NSUT Community</small>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-0 align-items-lg-center pe-2" style={{ fontSize: '17px', gap: 8 }}>
            <Nav.Link className={`text-light ms-2`} as="div">
              <button
                onClick={() => clickHandler('projects')}
                className={`btn btn-link p-0 text-decoration-none text-white`}
                style={{ fontSize: 17, textShadow: '0 1px 3px rgba(30, 60, 150, 0.5)' }}
              >
                Projects
              </button>
            </Nav.Link>
            <Nav.Link className={`text-light ms-2`} as="div">
              <button
                onClick={() => clickHandler('cfn')}
                className={`btn btn-link p-0 text-decoration-none text-white`}
                style={{ fontSize: 17, textShadow: '0 1px 3px rgba(30, 60, 150, 0.5)' }}
              >
                Create for NSUT
              </button>
            </Nav.Link>
            <Nav.Link className={`text-light ms-2`} as="div">
              <button
                onClick={() => clickHandler('pastevents')}
                className={`btn btn-link p-0 text-decoration-none text-white`}
                style={{ fontSize: 17, textShadow: '0 1px 3px rgba(30, 60, 150, 0.5)' }}
              >
                Past Events
              </button>
            </Nav.Link>

            <Nav.Link className={`text-light ms-3`} href="/about">About</Nav.Link>
            <Nav.Link className={`text-light ms-3`} href="/activities">Activities</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1;



