// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import * as Scroll from 'react-scroll';

// import CFN from "../Components/CreateForNSUT/CFNCompiled";
// import Projects from '../Components/Projects/Projects';
// import PastEvents from '../Components/PastEvents/PastEvent';
// import Banner from '../Components/Banner/Banner';

// const Home = () => {
//     return (
//         <>
//             <Banner />
//             <Projects />
//             <CFN />
//             <PastEvents/>
//         </>
//     )
// }

// export default Home;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CFN from "../Components/CreateForNSUT/CFNCompiled";
import Projects from '../Components/Projects/Projects';
import PastEvent from '../Components/PastEvents/PastEvent';
import Banner from '../Components/Banner/Banner';

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '');
      let tries = 0;
  
      const tryScroll = () => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (tries < 10) {
          tries++;
          setTimeout(tryScroll, 100);
        } else {
          console.warn(`Element with id "${section}" not found.`);
        }
      };
  
      tryScroll();
    }
  }, [location]);
  
  

  return (
    <>
      <Banner id="banner" />
      <Projects id="projects" />
      <CFN id="cfn" />
      <PastEvent id="pastevents" />
    </>
  );
}

export default Home;
