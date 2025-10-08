import React from 'react';
import  "./ActivitiesCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useScrollPercentage } from 'react-scroll-percentage'

AOS.init();

export const ActivitesCard = (props) => {
    const {heading, img, about} = props.activity;
  return (
    <div className="sig act-card" >

          <div className="sec-img"

           data-aos='fade-right'
           data-aos-anchor-placement='top-bottom'
           data-aos-delay='500'
           data-aos-duration="1200"
           
           >
            <img src={img} alt=""  className="sig1"/>
          </div>
          <div className="sec-content" 
           data-aos='fade-left'
           data-aos-anchor-placement='top-bottom'
           data-aos-delay='500'
           data-aos-duration="1200">
            <div className="sec-heading">
            {heading}
            </div>
            <div className="sec-about">
              {about}
            </div>
          </div>
        </div>
  )
}
