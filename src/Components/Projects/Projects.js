import NsutXScreens from './NsutXScreens';
import LaptopSlider from './LaptopSlider';
import styles from './Projects.module.css'

import screen1 from "../../Assets/Images/TnpPortal/screen1.png";
import screen2 from "../../Assets/Images/TnpPortal/screen2.png";
import screen3 from "../../Assets/Images/TnpPortal/screen3.png";
import screen4 from "../../Assets/Images/TnpPortal/screen4.png";
import screen5 from "../../Assets/Images/TnpPortal/screen5.png";
import screen6 from "../../Assets/Images/TnpPortal/screen6.png";
import screen7 from "../../Assets/Images/TnpPortal/screen7.png";

import screen8 from "../../Assets/Images/NesciiScreens/screen1.png";
import screen9 from "../../Assets/Images/NesciiScreens/screen2.png";
import screen10 from "../../Assets/Images/NesciiScreens/screen3.png";
import screen11 from "../../Assets/Images/NesciiScreens/screen4.png";
import screen12 from "../../Assets/Images/NesciiScreens/screen5.png";
import screen13 from "../../Assets/Images/NesciiScreens/screen6.png";
import screen14 from "../../Assets/Images/NesciiScreens/screen7.png";

const Projects = ({ id }) => {
    const tnpPortal = [screen1, screen2, screen3, screen4, screen5, screen6, screen7];
    const nescii = [screen8, screen9, screen10, screen11, screen12, screen13, screen14];
  
    return (
      <section id={id} className={styles.projects} style={{ paddingTop: '65px' }}>
        <div className="d-flex align-items-center justify-content-center">
          <h2 className={`fw-bold p-3 text-center ${styles.title}`}>Projects</h2>
        </div>
        <NsutXScreens />
        <LaptopSlider title="Training and Placement Portal" screens={tnpPortal} />
        <LaptopSlider title="Nescii" screens={nescii} />
      </section>
    );
  };
  
  export default Projects;
  

  