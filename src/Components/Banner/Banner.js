// import video from '../../Assets/Images/Banner/video.mp4';
// import styles from './Banner.module.css';
// const Banner = ({id}) => {

//     return (
//         <section id={id} className={styles['banner-container']}>
//             <video className={styles['banner']} autoPlay muted src={video}>
//             </video>
//         </section>
//     );
// };

// export default Banner;

import React, { useState } from 'react';
import styles from './Banner.module.css';
import videoSrc from '../../Assets/Images/Banner/video.mp4';

export default function Banner() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className={styles['banner-container']}>
      <div className={styles.banner}>
        
        {!videoLoaded && (
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#0a1420',
            zIndex: 1
          }} />
        )}
        
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          style={{
            position: 'relative',
            zIndex: 2
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
