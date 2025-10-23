import video from '../../Assets/Images/Banner/video.mp4';
import styles from './Banner.module.css';
const Banner = ({id}) => {

    return (
        <section id={id} className={styles['banner-container']}>
            <video className={styles['banner']} autoPlay muted src={video}>
            </video>
        </section>
    );
};

export default Banner;