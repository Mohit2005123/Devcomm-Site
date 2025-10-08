import video from '../../Assets/Images/Banner/video.mp4';
import styles from './Banner.module.css';
const Banner = () => {
    return (
        <div className={styles['banner-container']}>
            <video className={styles['banner']} autoPlay muted src={video}>
            </video>
        </div>
    );
};

export default Banner;