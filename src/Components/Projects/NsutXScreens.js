// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";


// import styles from "./NsutXScreens.module.css";

// import './swiperStyles.css';

// import screen1 from "../../Assets/Images/NsutXScreens/screen1.jpeg";
// import screen2 from "../../Assets/Images/NsutXScreens/screen2.jpeg";
// import screen3 from "../../Assets/Images/NsutXScreens/screen3.jpeg";
// import screen4 from "../../Assets/Images/NsutXScreens/screen4.jpeg";
// import screen5 from "../../Assets/Images/NsutXScreens/screen5.jpeg";
// import screen6 from "../../Assets/Images/NsutXScreens/screen6.jpeg";
// import screen7 from "../../Assets/Images/NsutXScreens/screen7.jpeg";
// import frame from '../../Assets/Images/NsutXScreens/frame.png';

// import { EffectCoverflow, Autoplay } from "swiper";

// export default function App() {
//   return (
//     <>
//       <h2 className={`text-center pt-0 text-light fw-bold`}>NSUTX</h2>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={1}
//         spaceBetween={10}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 5,
//           },
//           860: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//           },
//           930: {
//             slidesPerView: 3,
//             spaceBetween: 60,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 5,
//           },
//           1150: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//           },
//           1248: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//           },

//           1314: {
//             slidesPerView: 5,
//             spaceBetween: 10,
//           },
//           1510: {
//             slidesPerView: 5,
//             spaceBetween: 30,
//           },

//         }}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         modules={[EffectCoverflow, Autoplay]}
//         className="mySwiper"
//         loop={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}

//       >
//         <div className={styles['frame-container']}>
//           <img src={frame} className={styles['frame']}></img>
//         </div>
//         <SwiperSlide>
//           <img src={screen1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={screen2} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={screen3} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={screen4} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={screen6} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={screen5} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={screen7} />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";

import styles from "./NsutXScreens.module.css";
import "./swiperStyles.css";

import screen1 from "../../Assets/Images/NsutXScreens/screen1.jpeg";
import screen2 from "../../Assets/Images/NsutXScreens/screen2.jpeg";
import screen3 from "../../Assets/Images/NsutXScreens/screen3.jpeg";
import screen4 from "../../Assets/Images/NsutXScreens/screen4.jpeg";
import screen5 from "../../Assets/Images/NsutXScreens/screen5.jpeg";
import screen6 from "../../Assets/Images/NsutXScreens/screen6.jpeg";
import screen7 from "../../Assets/Images/NsutXScreens/screen7.jpeg";
import frameImg from "../../Assets/Images/NsutXScreens/frame.png";

export default function NSUTXScreens() {
  const screens = [screen1, screen2, screen3, screen4, screen5, screen6, screen7];

  return (
    <>
      <h2 className="heading">NSUTX</h2>

      <div className={styles.sliderWrapper}>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"          // <-- auto, not a fixed number
          // we'll control slide width via CSS
          spaceBetween={20}             // default; breakpoints override
          breakpoints={{
            640:  { spaceBetween: 20 },
            768:  { spaceBetween: 10 },
            1024: { spaceBetween: 30 },
            1314: { spaceBetween: 10 },
            1510: { spaceBetween: 30 },
          }}
          coverflowEffect={{
            rotate:       30,
            stretch:      0,
            depth:        100,
            modifier:     1,
            slideShadows: true,
          }}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {screens.map((src, idx) => (
            <SwiperSlide key={idx} className={styles.slide}>
              <img
                src={src}
                alt={`screen${idx + 1}`}
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.frameContainer}>
          <img src={frameImg} alt="phone frame" className={styles.frame} />
        </div>
      </div>
    </>
  );
}
