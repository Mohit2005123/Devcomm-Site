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
        fontFamily: 'Poppins, sans-serif',
          background: 'rgba(6,11,34,0.92)', // Same as page, slightly frosted for elegance
          backdropFilter: 'blur(10px)', // Glassmorphism
          color: '#e0e8f3',
          borderTop: '1.5px solid rgba(255,255,255,0.12)',
          boxShadow: '0 -2px 32px rgba(59,130,246,0.08)',
          minHeight: 110,
          marginTop: 0
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
          <Nav.Link className="ms-2" as="div">
  <button
    onClick={() => clickHandler('projects')}
    style={{
      fontSize: 17,
      color: "#71c4fc",
      backgroundColor: "transparent",
      border: "1px solid #71c4fc",
      borderRadius: 6,
      padding: "4px 18px",
      fontWeight: 500,
      textShadow: "0 1px 3px rgba(30, 60, 150, 0.5)",
      cursor: "pointer",
      transition: "background-color 0.2s, color 0.2s",
      minWidth: 100,
    }}
    onMouseEnter={e => {
      e.target.style.backgroundColor = "#71c4fc";
      e.target.style.color = "#001321";
    }}
    onMouseLeave={e => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#71c4fc";
    }}
    className="btn" // optionally keep bootstrap btn for baseline styles
  >
    Projects
  </button>
</Nav.Link>

            <Nav.Link className="ms-2" as="div">
  <button
    onClick={() => clickHandler('cfn')}
    style={{
      fontSize: 17,
      color: "#71c4fc",
      backgroundColor: "transparent",
      border: "1px solid #71c4fc",
      borderRadius: 6,
      padding: "4px 18px",
      fontWeight: 500,
      textShadow: "0 1px 3px rgba(30, 60, 150, 0.5)",
      cursor: "pointer",
      transition: "background-color 0.2s, color 0.2s",
      minWidth: 100,
    }}
    onMouseEnter={e => {
      e.target.style.backgroundColor = "#71c4fc";
      e.target.style.color = "#001321";
    }}
    onMouseLeave={e => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#71c4fc";
    }}
    className="btn" // optionally keep bootstrap btn for baseline styles
  >
    Create for NSUT
  </button>
</Nav.Link>

            <Nav.Link className="ms-2" as="div">
  <button
    onClick={() => clickHandler('pastevents')}
    style={{
      fontSize: 17,
      color: "#71c4fc",
      backgroundColor: "transparent",
      border: "1px solid #71c4fc",
      borderRadius: 6,
      padding: "4px 18px",
      fontWeight: 500,
      textShadow: "0 1px 3px rgba(30, 60, 150, 0.5)",
      cursor: "pointer",
      transition: "background-color 0.2s, color 0.2s",
      minWidth: 100,
    }}
    onMouseEnter={e => {
      e.target.style.backgroundColor = "#71c4fc";
      e.target.style.color = "#001321";
    }}
    onMouseLeave={e => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#71c4fc";
    }}
    className="btn" 
  >
    Past Events
  </button>
</Nav.Link>


            <Nav.Link
  href="/about"
  style={{
    fontSize: 17,
    color: "#71c4fc",
    backgroundColor: "transparent",
    border: "1px solid #71c4fc",
    borderRadius: "6px",
    padding: "4px 18px",
    fontWeight: 500,
    textShadow: "0 1px 3px rgba(30, 60, 150, 0.5)",
    marginLeft: 12,
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#71c4fc";
    e.target.style.color = "#001321";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#71c4fc";
  }}
>
  About
</Nav.Link>

<Nav.Link
  href="/activities"
  style={{
    fontSize: 17,
    color: "#71c4fc",
    backgroundColor: "transparent",
    border: "1px solid #71c4fc",
    borderRadius: "6px",
    padding: "4px 18px",
    fontWeight: 500,
    textShadow: "0 1px 3px rgba(30, 60, 150, 0.5)",
    marginLeft: 12,
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#71c4fc";
    e.target.style.color = "#001321";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#71c4fc";
  }}
>
  Activities
</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1;



