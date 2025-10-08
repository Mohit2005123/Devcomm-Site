// import logo from './logo.svg';
import "./activities.css";
import DsaSig from "../../Assets/Images/dsaSIG.jpg";
import monthlyCompetions from "../../Assets/Images/monthlyCompetions.jpg";
import intractiveSession from "../../Assets/Images/meets.jpg";
import CodingCompetions from "../../Assets/Images/codingcompetitions.jpg";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ActivitesCard } from "./ActivitiesCard";

AOS.init();

function App() {
  const Line = useRef();

  useEffect(() => {
    console.log(Line);
    // console.log(Line)
    const pathLength = Line.current.getTotalLength();

    Line.current.style.strokeDasharray = pathLength + " " + pathLength;

    // console.log(percentage);

    window.addEventListener("scroll", (event) => {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      Line.current.style.strokeDashoffset =
        pathLength - pathLength * scrollPercentage;
    });
  });

  const activitiesContent = [
    {
      heading: "SIG",
      img: DsaSig,
      about:
        "Hands-on and introductory sessions ranging from the hottest stuff in tech, namely Blockchain and ML, to the evergreen App and Web development areas, along with Game Development, are scheduled to be taken by seniors and mentors across DevComm..",
    },
    {
      heading: "Coding Competions",
      img: CodingCompetions,
      about:
        "Brush up your coding skills, it's time for some unleashing wars, making your debugging talents the only swords you have!. So, make your algorithms do the work for you. Let your cin>>input Winner and come here to code.",
    },
    {
      heading: "Hackathons",
      img: monthlyCompetions,
      about:
        "Hola Geeks, Allow your creativity to bring ideas into action as well as the opportunity to display their unique abilities with technology in their hands. Prepare yourself and your computers for a fantastic event worth attending.",
    },
    {
      heading: "Interactive Sessions",
      img: intractiveSession,
      about:
        "With the first semester in full swing, come the freshest opportunities to choose the paths you will be going down in college.We will tour you through the projects DevComm has worked on, shower insights from seniors who will be your mentors and learn what interests your batch has in tech this year.",
    },
  ];

  return (
    <div className="App">
      <div className="activities">
        <div className="sec-title">Activities</div>
 

        <svg
          width="89"
          height="756"
          viewBox="0 0 89 756"
          fill="none"
          className="svg1-line"
        >
          <path
            ref={Line}
            d="M67.5 1C45.8334 10.6667 2.30003 40.5 1.50003 82.5C0.500028 135 81.5 111 81.5 162.5C81.5 214 10.5 227.5 9.5 283.5C8.5 339.5 81.5 315.5 81.5 410.5C73.6667 418.833 55.9 435.5 47.5 435.5C39.1 435.5 44 450.833 47.5 458.5L18 487L36 503.5L44 495L36 487L44 478.5H59.5L70.5 469.5L85 487L70.5 503.5L63.5 495L70.5 487H53C50.8333 513 43.3 567.9 30.5 579.5C14.5 594 63.5 615.5 63.5 635C63.5 654.5 36 653.5 36 679.5"
            stroke="white"
          />
        </svg>

        {activitiesContent.map((activity) => {
          return <ActivitesCard activity={activity} />;
        })}
      </div>
    </div>
  );
}

export default App;
